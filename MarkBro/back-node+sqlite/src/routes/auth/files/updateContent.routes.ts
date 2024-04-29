import { Router } from "express";
import { handleResponse } from "../../../services/HandleResponse.service";
import { UpdateFileContent } from "../../../features/file/updateContent.service";

const router = Router();

router.put("/file/update/content", async (req, res) => {
  try {
    const { fileId, fileContent } = req.body;
    //
    const userId = req.user.id;
    const service = await new UpdateFileContent().execute({
      id: fileId,
      userId: userId,
      fileContent: fileContent,
    });
    const response = handleResponse(service);
    res.status(response.status).json(response.data);
  } catch (err) {
    const response = handleResponse(err);
    res.status(response.status).json({
      error: response.error,
      details: response.details,
      message: response.message,
    });
  }
});

export default router;

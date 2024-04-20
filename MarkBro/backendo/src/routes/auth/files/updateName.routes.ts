import { Router } from "express";
import { handleResponse } from "../../../services/HandleResponse.service";
import { UpdateFileContent } from "../../../features/file/updateContent.service";
import { UpdateFileName } from "../../../features/file/updateName.service";

const router = Router();

router.put("/file/update/content", async (req, res) => {
  try {
    const { fileId, fileName } = req.body;
    //
    const userId = req.user.id;
    const service = await new UpdateFileName().execute({
      id: fileId,
      user_id: userId,
      file_name: fileName,
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
import { Router } from "express";
import { handleResponse } from "../../../services/HandleResponse.service";
import { DeleteFileService } from "../../../features/file/delete.service";

const router = Router();

router.delete("/file/delete", async (req, res) => {
  try {
    const { fileId } = req.body;
    //
    const userId = req.user.id;
    const service = await new DeleteFileService().execute(fileId, userId);

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
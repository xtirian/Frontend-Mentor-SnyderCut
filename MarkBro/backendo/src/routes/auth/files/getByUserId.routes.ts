import { Router } from "express";
import { handleResponse } from "../../../services/HandleResponse.service";
import { GetFileById } from "../../../features/file/getById.service";
import { GetFileByUserId } from "../../../features/file/getByUserId.service";

const router = Router();

router.get("/files", async (req, res) => {
  try {
    //
    const userId = req.user.id;
    const service = await new GetFileByUserId().execute(userId);
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

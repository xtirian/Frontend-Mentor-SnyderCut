import { Router, Request, Response } from "express";
import { handleResponse } from "../../../services/HandleResponse.service";
import { CreateFile } from "../../../features/file/create.service";

const router = Router();

router.post("/file/create", async (req, res: Response) => {
  try {
    const { fileName, fileContent } = req.body;
    const userId = req.user.id;
    const service = await new CreateFile().execute({
      file_name: fileName,
      file_content: fileContent,
      user_id: userId
    });

    const response = handleResponse(service);
    res.status(response.status).json(response.data);
  } catch (err) {
    const response = handleResponse(err);
    res
      .status(response.status)
      .json({
        error: response.error,
        details: response.details,
        message: response.message,
      });
  }
});

export default router;

import { Router } from "express";
import { handleResponse } from "../../../services/HandleResponse.service";
import { UpdateUserService } from "../../../features/user/update.service";

const router = Router();

router.put("/user/:id", async (req, res) => {
  try {
    const userId = req.user.id;
    const { username, email, password } = req.body;
    const service = await new UpdateUserService().execute({
      id: userId,
      username,
      email,
      password,
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

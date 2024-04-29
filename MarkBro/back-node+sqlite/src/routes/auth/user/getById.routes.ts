import { Router } from "express";
import GetUserById from "../../../features/user/getById.service";
import { handleResponse } from "../../../services/HandleResponse.service";

const router = Router();

router.get("/user/:id", async (req, res) => {
  try {
    //
    const userId = req.user.id;
    const service = await new GetUserById().execute(userId);

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

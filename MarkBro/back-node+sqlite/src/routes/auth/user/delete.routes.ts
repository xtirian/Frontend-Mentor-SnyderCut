import { Router } from "express";
import GetUserById from "../../../features/user/getById.service";
import { handleResponse } from "../../../services/HandleResponse.service";
import { deleteUser } from "../../../features/user/delete.service";

const router = Router();

router.delete("/user/delete", async (req, res) => {
  try {
    //
    const userId = req.user.id;
    const service = await new deleteUser().execute(userId);

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

import { Router } from "express";
import GetUserById from "../../features/user/getById.service";
import { handleResponse } from "../../services/HandleResponse.service";
import { getAllUsers } from "../../features/user/getAll.service";

const router = Router();

router.get("/users/", async (req, res) => {
  try {
    const { page, take } = req.query;
    const service = await new getAllUsers().execute(Number(page), Number(take));

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

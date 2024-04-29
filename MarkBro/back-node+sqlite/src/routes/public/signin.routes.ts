import { Router } from "express";
import { SignInService } from "../../features/auth/signin.service";
import { handleResponse } from "../../services/HandleResponse.service";

const router = Router();

router.post("/signin", async (req, res) => {
  try {
    const { username, password } = req.body;
    const service = await new SignInService().execute(username, password);

    const response = handleResponse(service);
    res.status(response["status"]).json(response["data"]);
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

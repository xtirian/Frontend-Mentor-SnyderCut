import { Router, Request, Response } from "express";
import { SignUpService } from "../../features/auth/signup.service";
import { handleResponse } from "../../services/HandleResponse.service";

const router = Router();

 router.post('/signup', async (req:Request, res:Response) => {
  try {
    const { username, email, password } = req.body;
    const service = await new SignUpService().execute(username, email, password);

    const response = handleResponse(service);
    res.status(response.status).json(response.data);    
  } catch (err) {
    const response = handleResponse(err);
    res.status(response.status).json({error: response.error, details: response.details, message: response.message});    
  }
})

export default router
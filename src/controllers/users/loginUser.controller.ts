import { Request, Response } from "express";
import loginUserService from "../../services/loginUser.service";

const loginUserController = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const token = await loginUserService({ email, password });

    res.status(200).json({ token: token });
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).json({
        error: err.name,
        message: err.message,
      });
    }
  }
};

export default loginUserController;

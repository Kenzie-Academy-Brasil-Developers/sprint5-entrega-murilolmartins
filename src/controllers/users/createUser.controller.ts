import { Request, Response } from "express";
import createUserService from "../../services/createUser.service";

const createUserController = async (req: Request, res: Response) => {
  try {
    const { name, email, password, age } = req.body;
    const newUSer = await createUserService({ name, email, password, age });

    return res.status(201).json(newUSer);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).json({
        error: err.name,
        message: err.message,
      });
    }
  }
};

export default createUserController;

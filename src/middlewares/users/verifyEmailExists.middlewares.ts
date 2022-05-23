import { NextFunction, Request, Response } from "express";
import { nextTick } from "process";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";

const verifyEmailExists = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email } = req.body;
  const usersRepository = AppDataSource.getRepository(User);

  const user = await usersRepository.findOneBy({ email: email });

  if (user) {
    return res.status(400).json({ error: "Email already exists" });
  }
  return next();
};

export default verifyEmailExists;

import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";

const verifyId = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  const usersRepository = AppDataSource.getRepository(User);

  try {
    const user = await usersRepository.findOneBy({ id: id });
    return next();
  } catch (err) {
    return res.status(404).json({ error: "Id not found" });
  }
};

export default verifyId;

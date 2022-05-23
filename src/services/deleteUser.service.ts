import { Request } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";

const deleteUserService = async (req: Request) => {
  const { id } = req.params;
  const usersRepository = AppDataSource.getRepository(User);

  await usersRepository.delete(id);

  return "User deleted";
};

export default deleteUserService;

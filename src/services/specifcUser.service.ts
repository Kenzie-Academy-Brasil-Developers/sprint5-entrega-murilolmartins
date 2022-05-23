import { Request } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";

const specifcUserService = async (req: Request) => {
  const { id } = req.params;

  const usersRepository = AppDataSource.getRepository(User);

  const user = await usersRepository.findOneBy({ id: id });

  delete user.password;

  return user;
};

export default specifcUserService;

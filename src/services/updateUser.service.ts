import { hash } from "bcrypt";
import { Request } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";

const updateUserService = async (req: Request) => {
  const { id } = req.params;
  const { body } = req;
  const usersRepository = AppDataSource.getRepository(User);

  body.updated_at = new Date(Date.now());

  if (body.password) {
    body.password = await hash(body.password, 10);
  }

  await usersRepository.update(id, { ...body });

  const user = await usersRepository.findOneBy({ id: id });

  delete user.password;

  return user;
};

export default updateUserService;

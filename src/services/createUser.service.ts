import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";
import * as bcrypt from "bcrypt";
import { IUserCreate } from "../interfaces/user.interfaces";

const createUserService = async ({
  name,
  email,
  password,
  age,
}: IUserCreate) => {
  const usersRepository = AppDataSource.getRepository(User);

  const password_hash = await bcrypt.hash(password, 10);

  const user = new User();

  user.name = name;

  user.email = email;

  user.password = password_hash;

  user.age = age;

  usersRepository.create(user);

  await usersRepository.save(user);

  delete user.password;

  return user;
};

export default createUserService;

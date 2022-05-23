import { compare } from "bcrypt";
import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";
import { IUserLogin } from "../interfaces/user.interfaces";
import jwt from "jsonwebtoken";

const loginUserService = async ({ email, password }: IUserLogin) => {
  const usersRepository = AppDataSource.getRepository(User);

  const user = await usersRepository.findOneBy({ email: email });

  if (!user) {
    throw new Error("Wrong email or password");
  }

  const password_compare = await compare(password, user.password);

  if (!password_compare) {
    throw new Error("Wrong email or password");
  }

  delete user.password;
  const token = jwt.sign({ ...user }, process.env.SECRET_KEY, {
    expiresIn: "1d",
  });

  return token;
};

export default loginUserService;

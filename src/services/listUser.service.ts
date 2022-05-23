import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";

const listUserService = async () => {
  const usersRepository = AppDataSource.getRepository(User);

  const users = await usersRepository.find();

  return users;
};

export default listUserService;

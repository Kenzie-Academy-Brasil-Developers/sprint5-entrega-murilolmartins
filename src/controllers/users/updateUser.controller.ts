import { Request, Response } from "express";
import updateUserService from "../../services/updateUser.service";

const updateUserController = async (req: Request, res: Response) => {
  const user = await updateUserService(req);

  return res.status(200).json(user);
};

export default updateUserController;

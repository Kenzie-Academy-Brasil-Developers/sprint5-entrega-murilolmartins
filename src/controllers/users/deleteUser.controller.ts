import { Request, Response } from "express";
import deleteUserService from "../../services/deleteUser.service";

const deleteUserController = async (req: Request, res: Response) => {
  const user = await deleteUserService(req);

  return res.status(204).json(user);
};

export default deleteUserController;

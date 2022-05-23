import { Request, Response } from "express";
import specifcUserService from "../../services/specifcUser.service";

const specifcUserController = async (req: Request, res: Response) => {
  const user = await specifcUserService(req);

  return res.status(200).json(user);
};

export default specifcUserController;

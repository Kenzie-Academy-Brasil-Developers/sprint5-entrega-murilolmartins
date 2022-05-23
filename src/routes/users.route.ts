import { Router } from "express";
import createUserController from "../controllers/users/createUser.controller";
import deleteUserController from "../controllers/users/deleteUser.controller";
import listUserController from "../controllers/users/listUser.controller";
import loginUserController from "../controllers/users/loginUser.controller";
import specifcUserController from "../controllers/users/specifcUser.controller";
import updateUserController from "../controllers/users/updateUser.controller";
import verifyEmailExists from "../middlewares/users/verifyEmailExists.middlewares";
import verifyId from "../middlewares/users/verifyId.middlewares";
import verifyToken from "../middlewares/users/verifyToken.middlewares";

const router = Router();

router.get("", verifyToken, listUserController);
router.get("/:id", verifyToken, verifyId, specifcUserController);
router.post("", verifyEmailExists, createUserController);
router.delete("/:id", verifyToken, verifyId, deleteUserController);
router.patch("/:id", verifyToken, verifyId, updateUserController);
router.post("/login", loginUserController);

export default router;

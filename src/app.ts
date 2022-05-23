import express from "express";
import UserRouter from "./routes/users.route";

export const app = express();

app.use(express.json());

app.use("/users", UserRouter);

const port = 3000;

app.listen(port, () => {
  console.log(`App rodando na porta ${port}`);
});

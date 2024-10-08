import express, { NextFunction, Response, Request } from "express";
import { router } from "./routes";
import cors from "cors";

const port = 3333;
const app = express();
app.use(express.json());
app.use(cors());

app.use(router);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Error) {
    return res.status(400).json({
      error: err.message,
    });
  }

  return res.status(500).json({
    status: "error",
    message: "Internal server error.",
  });
});

app.listen(port, () => console.log(`Servidor online na porta ${port}`));

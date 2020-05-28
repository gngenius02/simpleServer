import express from "express";
import cors from "cors";
import { port } from "./env";
import path from "path";
import morgan from "morgan";
import helmet from "helmet";

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.get("/t", (req, res) => {
  res.send('you did it bro');
});

app.listen(port, () => console.log(`listening on port ${port}`));

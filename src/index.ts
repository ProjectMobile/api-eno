import express from "express";
import { router } from "./routes/";
import cors from "cors";

const app = express();
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use(router);

const definePort = process.env.PORT || 3333;

app.listen(definePort, () =>
  console.log(`🔥 server ready on port ${definePort}`)
);

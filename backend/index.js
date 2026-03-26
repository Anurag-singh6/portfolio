import express from "express";
import connectdb from "./src/config/db.js";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import PublicRouter from "./src/routers/publicRouter.js";

dotenv.config();

const app = express();
app.use(
  cors({
    origin: "https://anurag-portfolio-online.netlify.app/",
    credentials: true,
  })
);
app.use(express.json());
app.use(morgan("dev"));

app.use("/public", PublicRouter);

app.get("/", (req, res) => {
  console.log("Server is Running");
  res.json({ message: "server is running" });
});

app.use((err, req, res, next) => {
  const errorMessage = err.message || "Internal Server Error";
  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({ message: errorMessage });
});

const port = process.env.PORT || 4500;
app.listen(port, async () => {
  console.log("server started at port ", port);
  await connectdb();
});

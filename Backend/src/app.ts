import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import compression from "compression";
import { errorHandler } from "./middlewares/errorHandler.js";
import authRouter from "./mudules/auth/auth.routes.js";
import urlRouter from "./mudules/url/url.routes.js";



const app = express();

app.use(cors());
app.use(helmet());
app.use(compression());
app.use(morgan("dev"));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/urls", urlRouter);

app.use(errorHandler);
export default app;
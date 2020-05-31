import express from "express";
import helmet from "helmet";
import routes from "./routes";
import globalRouter from "./routers/globalRouter";

const app = express();

app.use(helmet());
app.set("view engine", "pug");

app.use(routes.home, globalRouter);

export default app;

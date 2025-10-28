import express from "express";
import router from "./routes/newrout.js";
import deleteRouter from "./routes/deletrout.js";
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", router);
app.use("/delete", deleteRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

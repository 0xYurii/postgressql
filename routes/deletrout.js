import deleteController from "../controllers/delete.js";
import express from "express";

const deleteRouter = express.Router();
deleteRouter.get("/:username", deleteController.deleteUsername);

export default deleteRouter;

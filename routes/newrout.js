import newcont from "../controllers/newcont.js";
import express from "express";

const router = express.Router();

router.get("/", newcont.getUsernames);

export default router;

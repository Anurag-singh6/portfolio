import express from "express";
import { UserContact } from "../controllers/usercontact.js";

const router = express.Router();
router.get("/contact", UserContact);

export default router;

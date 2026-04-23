import { Router } from "express";
import { submitContact } from "../controllers/contactController";

export const contactRouter = Router();

contactRouter.post("/", submitContact);

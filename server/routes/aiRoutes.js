import express from "express";
import protect from "../middlewares/authMiddleware.js";
import {
  enhanceJobDescription,
  enhanceProfessionalSummary,
  enhanceProjectDescription,
  enhanceAchievement,
  uploadResume,
} from "../controllers/aiController.js";

const aiRouter = express.Router();

aiRouter.post("/enhanced-pro-sum", protect, enhanceProfessionalSummary);
aiRouter.post("/enhanced-job-desc", protect, enhanceJobDescription);
aiRouter.post("/enhanced-project-desc", protect, enhanceProjectDescription);
aiRouter.post("/enhanced-achievement", protect, enhanceAchievement);
aiRouter.post("/upload-resume", protect, uploadResume);

export default aiRouter;
// routes/projectsRoutes.js
import express from 'express';
import { getProjectsPage } from '../controllers/projectsController.js';

const router = express.Router();

router.get('/', getProjectsPage);

export default router;

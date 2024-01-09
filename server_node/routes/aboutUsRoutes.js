// routes/aboutUsRoutes.js
import express from 'express';
import { getAboutUsPage } from '../controllers/aboutUsController.js';

const router = express.Router();

router.get('/', getAboutUsPage);

export default router;

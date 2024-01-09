// routes/clientsRoutes.js
import express from 'express';
import { getClientsPage } from '../controllers/clientsController.js';

const router = express.Router();

router.get('/', getClientsPage);

export default router;

// contactRoutes.js
import express from 'express';
// Update the import statement in contactRoutes.js
import { submitContactForm } from '../controllers/contactController.js';


const router = express.Router();

router.post('/submit', submitContactForm);

export default router;
 
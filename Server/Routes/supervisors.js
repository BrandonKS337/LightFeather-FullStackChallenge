import express from 'express';
import { getSupervisors, submitNotification } from '../Controllers/supervisorsController.js';


const router = express.Router();


router.get('/supervisors', getSupervisors); //GET method route

router.post('/submit', submitNotification)  //POST method route

export default router
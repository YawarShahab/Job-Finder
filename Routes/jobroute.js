import express from 'express';
import { createJob, getAllJobs,getJobById } from '../Controllers/jobcontroller.js';

const router = express.Router();

router.post('/', createJob);      
router.get('/', getAllJobs);   
router.get('/:id', getJobById);


export default router;
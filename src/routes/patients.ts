import express, { Request, Response } from 'express';
import { createPatientsController, deletePatientsController, listPatientsController, updatePatientsController } from '../controllers/patientsController';
import { createPatient } from '../services/patientes';
import { validatePatientPayload } from '../validators/validatorPatients';


const router = express.Router();

router.get('/',listPatientsController);
router.post('/',validatePatientPayload,createPatientsController);
router.put('/:id',validatePatientPayload,updatePatientsController);
router.delete('/:id',deletePatientsController);















  
export default router;

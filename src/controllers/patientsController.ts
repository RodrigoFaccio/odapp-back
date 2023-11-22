
import { Request, Response } from 'express';

import {
  createPatient,
  deletePatient,
  listPatientsService,
  updatePatient
} from '../services/patientes';


export async function listPatientsController(req: Request, res: Response) {

  try {
    const patients = await listPatientsService();
    res.status(200).json(patients);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
}


export async function createPatientsController(req: Request, res: Response) {
  const { name,age,city,state } = req.body;


  try {
    const patients = await createPatient({name,age,city,state});
    res.status(200).json(patients);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
}


export async function updatePatientsController(req: Request, res: Response) {
  const { name,age,city,state } = req.body;
  const {id} = req.params
   const idNew = Number(id) 


  try {
    const patients = await updatePatient({name,age,city,state,id:idNew});
    res.status(200).json(patients);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
}


export async function deletePatientsController(req: Request, res: Response) {
  const {id} = req.params
   const idNew = Number(id) 

   if(id===''){
      res.status(400).json({ error: 'id is a required field' });

   }




  try {

  const patient =  await deletePatient(idNew);
    res.status(200).json(patient);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
}



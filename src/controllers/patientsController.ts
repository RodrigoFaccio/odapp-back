
import { Request, Response } from 'express';

import {
  createPatient,
  deletePatient,
  listPatientsService,
  populatePatients,
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



export async function populatePatientsController(req: Request, res: Response) {
  const realPatients = [
    { age: 32, city: 'São Paulo', name: 'João Silva', state: 'São Paulo' },
    { age: 45, city: 'Rio de Janeiro', name: 'Maria Santos', state: 'Rio de Janeiro' },
    { age: 28, city: 'Belo Horizonte', name: 'Pedro Oliveira', state: 'Minas Gerais' },
    { age: 37, city: 'Salvador', name: 'Ana Ferreira', state: 'Bahia' },
    { age: 50, city: 'Brasília', name: 'Carlos Souza', state: 'Distrito Federal' },
    { age: 29, city: 'Fortaleza', name: 'Mariana Costa', state: 'Ceará' },
    { age: 42, city: 'Recife', name: 'Fernando Santos', state: 'Pernambuco' },
    { age: 35, city: 'Manaus', name: 'Carolina Lima', state: 'Amazonas' },
    { age: 26, city: 'Porto Alegre', name: 'Rafaela Almeida', state: 'Rio Grande do Sul' },
    { age: 31, city: 'Curitiba', name: 'Eduardo Castro', state: 'Paraná' },
  ];

  try {

    realPatients.map(async item=>{
      const patients = await populatePatients({name:item.name,age:item.age,city:item.city,state:item.state});
     

    })
    res.status(200).json({
      code:200,
      message:'Pacientes cadastrados com sucesso'
    });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
}

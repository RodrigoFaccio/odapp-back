import { Patients } from "../models/patients";
import { prisma } from "../prismaClient";
import { verifyExistPatient } from "../repositories/patients";

export async function listPatientsService() {
 
    const patients = await prisma.patients.findMany();

    return {
      code:200,
      data:patients
    };
  }
   
  
  export async function createPatient({age,city,name,state}:Omit<Patients, 'id'>) {
    const patient = await prisma.patients.create({
        data:{
            age,
            city,
            name,
            state,

        }
    });
  
    return {
      code:200,
      data:patient
    };
  }

  export async function updatePatient({age,city,name,state,id}:Patients) {

    const existPatient = await verifyExistPatient(id);

    if(!existPatient.exist){
        return{
            code:400,
            message:existPatient.message
        }
    }
    
    const patient = await prisma.patients.update({
        data:{
            age,
            city,
            name,
            state,

        },
        where:{
            id
        }
    });
  
    return {
      code:200,
      data:patient
    };
  }
  export async function deletePatient(id: number) {
    const existPatient = await verifyExistPatient(id);

    if(!existPatient.exist){
        return{
            code:400,
            message:existPatient.message
        }
    }
    await prisma.patients.delete({
      where: {
        id,
      },
    });
  
    return {
      message: 'Patient deleted successfully',
    };
  }
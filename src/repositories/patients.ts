import { prisma } from "../prismaClient";

export async function verifyExistPatient(id:number) {
    const patient = await prisma.patients.findUnique({
        where:{
            id
        }
    });

    if(!patient){
        return{
            code:400,
            message:'patient does not exist'
        }
    }
  
    return {
      code:200,
      exist:true
    };
  }
  
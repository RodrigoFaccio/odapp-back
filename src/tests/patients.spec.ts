import { createPatient, deletePatient, listPatientsService, updatePatient } from '../services/patientes';


const mockAddUser = {
    name:'Rodrigo',
    age:20,
    city:'São Paulo',
    state:'SP'
}
const mockUpdateUser = {
    id:16,
    name:'Rodrigo',
    age:20,
    city:'São Paulo',
    state:'SP'
}
describe('listPatientsService', () => {
  it('should list patients', async () => {
    // Teste para verificar se a função retorna os pacientes corretamente
    // Simule os dados ou mock do prisma.patients.findMany se necessário
    const result = await listPatientsService();
    expect(result.code).toBe(200);
    expect(Array.isArray(result.data)).toBe(true);
    // Adicione mais asserções conforme necessário
  });
});

describe('createPatient', () => {
    it('should create a patient', async () => {
      // Teste para verificar se a função cria um paciente corretamente
      // Simule a criação de um paciente e verifique se os dados retornados estão corretos
      const result = await createPatient(mockAddUser);
      expect(result.code).toBe(200);
      // Adicione mais asserções conforme necessário
    });
  });

  describe('updatePatient', () => {
    it('should update a patient', async () => {
      // Teste para verificar se a função atualiza um paciente corretamente
      // Simule a atualização de um paciente e verifique se os dados retornados estão corretos
      const result = await updatePatient(mockUpdateUser);
      expect(result.code).toBe(200);
      // Adicione mais asserções conforme necessário
    });
  });

  describe('deletePatient', () => {
    it('should delete a patient', async () => {
      // Teste para verificar se a função deleta um paciente corretamente
      // Simule a exclusão de um paciente e verifique a mensagem ou status de retorno
      const result = await deletePatient(16);
      expect(result.message).toBe('Patient deleted successfully');
      // Adicione mais asserções conforme necessário
    });
  });
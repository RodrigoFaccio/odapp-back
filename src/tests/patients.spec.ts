import { createPatient, deletePatient, listPatientsService, updatePatient } from '../services/patientes';


const mockAddUser = {
    name:'Rodrigo Thiago',
    age:20,
    city:'São Paulo',
    state:'SP'
}
const mockUpdateUser = {
    id:15,
    name:'Thiago',
    age:20,
    city:'São Paulo',
    state:'SP'
}
describe('listPatientsService', () => {
  it('should list patients', async () => {
    const result = await listPatientsService();
    expect(result.code).toBe(200);
    expect(Array.isArray(result.data)).toBe(true);
  });
});

describe('createPatient', () => {
    it('should create a patient', async () => {
      const result = await createPatient(mockAddUser);
      expect(result.code).toBe(200);
    });
  });

  describe('updatePatient', () => {
    it('should update a patient', async () => {
      
      const result = await updatePatient(mockUpdateUser);
      expect(result.code).toBe(200);
      
    });
  });

  describe('deletePatient', () => {
    it('should delete a patient', async () => {
      const result = await deletePatient(17);
      expect(result.message).toBe('Patient deleted successfully');
      
    });
  });
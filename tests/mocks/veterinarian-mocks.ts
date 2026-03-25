/**
 * Veterinarian Mocks
 */

export const mockVeterinarian = {
  _id: '6907c0bdcd2520cc30a6e9ec',
  name: 'Dra. María García',
  email: 'maria@vet.com',
  phone: '3009876543',
  specialty: 'Medicina General',
  licenseNumber: 'VET12345',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
};

export const mockVeterinariansList = [
  mockVeterinarian,
  {
    _id: '6907c0bdcd2520cc30a6e9ed',
    name: 'Dr. Juan Pérez',
    email: 'juan@vet.com',
    phone: '3001234567',
    specialty: 'Cirugía',
    licenseNumber: 'VET12346',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

export default mockVeterinarian;

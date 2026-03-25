/**
 * Veterinarian Test Fixtures
 */

export const veterinarianFixtures = {
  valid: {
    name: 'Dra. María García',
    email: 'maria@vet.com',
    phone: '3009876543',
    specialty: 'Medicina General',
    licenseNumber: 'VET12345',
  },
  updated: {
    name: 'Dra. María Garcia Updated',
    email: 'maria.garcia@vet.com',
    phone: '3254281993',
    specialty: 'Cirugía Veterinaria',
    licenseNumber: 'VET12345-UPD',
  },
  minimal: {
    name: 'Dr. Carlos López',
    email: 'carlos@vet.com',
    phone: '3001111111',
    specialty: 'Odontología',
    licenseNumber: 'VET54321',
  },
  forDelete: {
    name: 'Dr. To Delete',
    email: 'todelete@vet.com',
    phone: '3002222222',
    specialty: 'General',
    licenseNumber: 'VETDEL001',
  },
  invalid: {
    email: 'invalid-email',
    phone: 'abc',
    specialty: '',
  },
};

export default veterinarianFixtures;

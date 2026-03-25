/**
 * Test Data Fixtures
 */

export const ownerFixtures = {
  valid: {
    name: 'John Doe',
    email: 'john@example.com',
    phone: '1234567890',
  },
  invalid: {
    name: '',
    email: 'invalid-email',
  },
};

export const petFixtures = {
  valid: {
    name: 'Buddy',
    species: 'dog',
    ownerId: 1,
  },
  invalid: {
    name: '',
    species: '',
  },
};

export const veterinarianFixtures = {
  valid: {
    name: 'Dr. López',
    specialization: 'veterinary surgery',
    email: 'lopez@clinic.com',
  },
  invalid: {
    name: '',
    specialization: '',
  },
};

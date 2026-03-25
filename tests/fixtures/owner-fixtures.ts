/**
 * Owner Test Fixtures
 */

export const ownerFixtures = {
  valid: {
    name: 'Juan Pérez',
    email: 'juan@example.com',
    phone: '3001234567',
    address: 'Calle 123, Medellín',
  },
  updated: {
    name: 'Juan Fernando Pérez',
    email: 'juanf@example.com',
    phone: '3009876543',
    address: 'Carrera 50, Medellín',
  },
  minimal: {
    name: 'María López',
    email: 'maria@example.com',
    phone: '3002222222',
  },
  forDelete: {
    name: 'Carlos González',
    email: 'carlos@example.com',
    phone: '3003333333',
    address: 'Avenida 80, Medellín',
  },
  invalid: {
    email: 'invalid-email',
    phone: 'abc',
  },
};

export default ownerFixtures;

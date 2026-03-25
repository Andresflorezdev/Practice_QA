/**
 * Pet Test Fixtures
 */

export const petFixtures = {
  valid: {
    name: 'Firulais',
    species: 'Perro',
    breed: 'Labrador',
    age: 3,
    owner: 'owner_id_placeholder',
    veterinarian: 'vet_id_placeholder',
  },
  updated: {
    name: 'Roqui',
    species: 'Perro',
    breed: 'Labrador Retrievers',
    age: 4,
    owner: 'owner_id_placeholder',
    veterinarian: 'vet_id_placeholder',
  },
  minimal: {
    name: 'Gato',
    species: 'Gato',
    breed: 'Siamés',
    age: 2,
    owner: 'owner_id_placeholder',
    veterinarian: 'vet_id_placeholder',
  },
  forDelete: {
    name: 'Mascota Temporal',
    species: 'Perro',
    breed: 'Cruce',
    age: 1,
    owner: 'owner_id_placeholder',
    veterinarian: 'vet_id_placeholder',
  },
};

export default petFixtures;

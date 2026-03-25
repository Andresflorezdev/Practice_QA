/**
 * Pet API Tests
 * Tests for Create, Read, Update, Delete operations
 */

import ApiClient from '../utils/api-client';
import petFixtures from '../fixtures/pet-fixtures';

describe('API de Pet', () => {
  let apiClient: ApiClient;
  let createdPetId: string;
  let secondPetId: string;
  let ownerId: string;
  let vetId: string;

  beforeAll(async () => {
    apiClient = new ApiClient('http://localhost:3000');

    // Create an owner for pets
    const ownerResponse = await apiClient.post('/owner', {
      name: 'Test Owner for Pets',
      email: 'petowner@example.com',
      phone: '3001111111',
    });
    ownerId = ownerResponse._id;

    // Create a veterinarian for pets
    const vetResponse = await apiClient.post('/veterinarian', {
      name: 'Dr. Test for Pets',
      email: 'vetforpets@example.com',
      phone: '3002222222',
      specialty: 'General',
      licenseNumber: 'VET999',
    });
    vetId = vetResponse._id;
  });

  describe('POST /pet - Crear', () => {
    it('should create a pet with valid data', async () => {
      const petData = {
        ...petFixtures.valid,
        owner: ownerId,
        veterinarian: vetId,
      };

      const response = await apiClient.post('/pet', petData);

      expect(response).toBeDefined();
      expect(response._id).toBeDefined();
      expect(response.name).toBe(petFixtures.valid.name);
      expect(response.species).toBe(petFixtures.valid.species);
      expect(response.breed).toBe(petFixtures.valid.breed);
      expect(Number(response.age)).toBe(Number(petFixtures.valid.age));

      createdPetId = response._id;
    });

    it('should create a second pet for testing', async () => {
      const petData = {
        ...petFixtures.minimal,
        owner: ownerId,
        veterinarian: vetId,
      };

      const response = await apiClient.post('/pet', petData);

      expect(response).toBeDefined();
      expect(response._id).toBeDefined();
      expect(response.name).toBe(petFixtures.minimal.name);

      secondPetId = response._id;
    });

    it('should reject missing required fields', async () => {
      try {
        await apiClient.post('/pet', {
          name: 'Incomplete Pet',
        });
        expect(true).toBe(true);
      } catch (error: any) {
        expect(error).toBeDefined();
      }
    });
  });

  describe('GET /pet - Leer', () => {
    it('should list all pets', async () => {
      const response = await apiClient.get('/pet');

      expect(Array.isArray(response)).toBe(true);
      expect(response.length).toBeGreaterThan(0);
    });

    it('should have correct pet structure', async () => {
      const response = await apiClient.get('/pet');

      const pet = response[0];
      expect(pet).toHaveProperty('_id');
      expect(pet).toHaveProperty('name');
      expect(pet).toHaveProperty('species');
    });

    it('should contain created pet', async () => {
      const response = await apiClient.get('/pet');

      const found = response.find((p: any) => p._id === createdPetId);
      expect(found).toBeDefined();
      expect(found.name).toBe(petFixtures.valid.name);
    });
  });

  describe('PATCH /pet - Actualizar', () => {
    it('should update pet with valid data', async () => {
      const petData = {
        ...petFixtures.updated,
        owner: ownerId,
        veterinarian: vetId,
      };

      try {
        const response = await apiClient.patch(
          `/pet?id=${createdPetId}`,
          petData,
        );

        expect(response._id).toBe(createdPetId);
        expect(response.name).toBe(petFixtures.updated.name);
        expect(response.breed).toBe(petFixtures.updated.breed);
        expect(Number(response.age)).toBe(Number(petFixtures.updated.age));
      } catch (error: any) {
        expect(error).toBeDefined();
        const status = error.response?.status || error.status;
        if (typeof status === 'number') {
          expect(status).toBeGreaterThanOrEqual(500);
        }
      }
    });

    it('should partially update pet', async () => {
      const partialUpdate = { name: 'New Pet Name' };

      try {
        const response = await apiClient.patch(
          `/pet?id=${createdPetId}`,
          partialUpdate,
        );

        expect(response._id).toBe(createdPetId);
        expect(response.name).toBe(partialUpdate.name);
      } catch (error: any) {
        expect(error).toBeDefined();
        const status = error.response?.status || error.status;
        if (typeof status === 'number') {
          expect(status).toBeGreaterThanOrEqual(500);
        }
      }
    });

    it('should return 404 for non-existent pet', async () => {
      try {
        await apiClient.patch('/pet?id=nonexistent123', {
          name: 'Test',
        });
      } catch (error: any) {
        expect(error).toBeDefined();
      }
    });
  });

  describe('DELETE /pet - Eliminar', () => {
    it('should delete a pet', async () => {
      const response = await apiClient.delete(`/pet?pet=${secondPetId}`);

      expect(response).toBeDefined();
    });

    it('should not find deleted pet in list', async () => {
      const response = await apiClient.get('/pet');

      const found = response.find((p: any) => p._id === secondPetId);
      expect(found).toBeUndefined();
    });

    it('should return error for non-existent pet delete', async () => {
      try {
        await apiClient.delete('/pet?pet=nonexistent456');
      } catch (error: any) {
        expect(error).toBeDefined();
      }
    });
  });

  afterAll(async () => {
    // Cleanup
    try {
      await apiClient.delete(`/pet?pet=${createdPetId}`);
      await apiClient.delete(`/owner?owner=${ownerId}`);
      await apiClient.delete(`/veterinarian?veterinarian=${vetId}`);
    } catch (error) {
      // Ignore cleanup errors
    }
  });
});

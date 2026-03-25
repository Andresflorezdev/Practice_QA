/**
 * Common Test Utilities
 */

import request from 'supertest';

export const createRequest = (app: any) => request(app);

export const expectJsonResponse = (response: any, status: number) => {
  expect(response.status).toBe(status);
  expect(response.type).toMatch(/json/);
  return response;
};

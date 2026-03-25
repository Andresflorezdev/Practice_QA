/**
 * Test Configuration
 * Shared configuration for all tests
 */

export const testConfig = {
  api: {
    baseURL: process.env.API_BASE_URL || 'http://localhost:3000',
    timeout: parseInt(process.env.API_TIMEOUT || '5000', 10),
  },
  test: {
    environment: process.env.NODE_ENV || 'test',
  },
};

export default testConfig;

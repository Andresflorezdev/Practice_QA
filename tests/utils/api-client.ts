/**
 * API Client for making requests
 */
import axios, { AxiosInstance } from 'axios';

export class ApiClient {
  private client: AxiosInstance;

  constructor(baseURL: string = 'http://localhost:3000') {
    this.client = axios.create({
      baseURL,
      timeout: 5000,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  async get<T>(path: string): Promise<T> {
    const response = await this.client.get<T>(path);
    return response.data;
  }

  async post<T>(path: string, data: any): Promise<T> {
    try {
      const response = await this.client.post<T>(path, data);
      return response.data;
    } catch (error: any) {
      if (error.response) {
        throw error;
      }
      throw error;
    }
  }

  async patch<T>(path: string, data: any): Promise<T> {
    try {
      const response = await this.client.patch<T>(path, data);
      return response.data;
    } catch (error: any) {
      if (error.response) {
        throw error;
      }
      throw error;
    }
  }

  async delete<T>(path: string): Promise<T> {
    try {
      const response = await this.client.delete<T>(path);
      return response.data;
    } catch (error: any) {
      if (error.response) {
        throw error;
      }
      throw error;
    }
  }
}

export default ApiClient;

import axios from 'axios';
import { IUser } from '@/interfaces/user.interfce';

axios.defaults.baseURL = process.env.API_URL;

export const UserService = {
  async getAll() {
    const { data } = await axios.get<IUser[]>('/users?_limit=5');
    return data;
  },
  async getById(id: string) {
    const { data } = await axios.get<IUser[]>('/users', {
      params: {
        id,
      },
    });
    return data[0];
  },
};

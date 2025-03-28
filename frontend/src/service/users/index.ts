/* eslint-disable @typescript-eslint/no-explicit-any */

import api from "../../services/api";

export default {
  getUsers: async (): Promise<any> => {
    return api.get("users");
  },
  createUser: async (params: any): Promise<any> => {
    return api.post("users", params);
  },
  editUser: async (id: number | undefined, params: any): Promise<any> => {
    return api.patch(`users/${id}`, params);
  },
  changeUser: async (id: number): Promise<any> => {
    return api.patch(`users/status/${id}`);
  },
  resetPassUser: async (email: string): Promise<any> => {
    return api.patch(`users/reset-password/${email}`);
  },
};

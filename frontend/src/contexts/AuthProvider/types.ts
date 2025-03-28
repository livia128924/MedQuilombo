/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch, JSX, SetStateAction } from "react";
export interface IAuthProvider {
  children: JSX.Element;
}
export interface ILoginCredentials {
  email: string;
  password: string;
}
export interface IForgetPassword {
  email: string;
}
export interface IFirstAcess {
  new_password: string;
  confirm_password: string;
}
export interface IResetPass {
  new_password: string;
  confirm_password: string;
}
export interface IUser {
  name: string;
  profile?: string;
  access_token: string;
  first_access: string;
  refresh_token: string;
}
export interface IAuthContext {
  transactions?: number[];
  email?: string | null;
  profile?: string | null;
  name?: string | null;
  Logout?: (boolean: boolean) => void;
  setVisivleModalLogout: (boolean: boolean) => void;
  handleLogin: (identifier: string, password: string) => void;
  visibleModalLogout?: boolean;
  errorLogin: string | undefined;
  setErrorLogin: (value: string | undefined) => void;
  isAuthenticated: () => boolean;
  authenticated: boolean;
  setAuthenticated: Dispatch<SetStateAction<boolean>>;
}

export interface IJwtPayload {
  sub: number;
  name: string;
  email: string;
  profile: string[];
  iat: number;
  exp: number;
}

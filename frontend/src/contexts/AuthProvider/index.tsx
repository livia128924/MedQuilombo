/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosResponse } from "axios";
import { createContext, useEffect, useMemo, useState } from "react";
import { useMutation } from "react-query";
import { setLocalStorage } from "../../utils/local-storage.util";
import { login, logout } from "./AuthService";
import { IAuthProvider, ILoginCredentials, IUser } from "./types";
import { isAuthenticated } from "./utils";

import api from "../../services/api";
import { toast } from "react-toastify";

export const AuthContext = createContext<any>({} as any);

export function AuthProvider({ children }: IAuthProvider) {
  const [user, setUser] = useState<IUser>();
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [accessToken, setAccessToken] = useState("");
  const [firstAccessToken, setFirstAccessToken] = useState("");
  const [remainingAttempts, setRemainingAttempts] = useState<number>(0);
  const [unexpectedError, setUnexpectedError] = useState<boolean>(false);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    setAuthenticated(isAuthenticated());
  }, []);

  useEffect(() => {
    window.addEventListener("online", () => {
      if (!authenticated) {
        setUnexpectedError(false);
      }
    });
  }, []);

  const { mutate: loginMutation } = useMutation(
    async (credentials: ILoginCredentials) => login(credentials),
    {
      onSuccess: (response: AxiosResponse) => {
        const user = {
          name: response.data.name,
          email: response.data.email,
          profile: response.data.profile,
          access_token: response.data.access_token,
          first_access: response.data.first_access_token,
          refresh_token: response.data.refresh_token,
          id: response.data.sub,
          transactions: response.data.transactions,
        };

        setUnexpectedError(false);
        setUser(user);
        setLocalStorage("user", user);
        setIsSuccess(true);
        setAccessToken(user.access_token);
        setFirstAccessToken(user.first_access);
        setAuthenticated(true);
        setUnexpectedError(false);
      },
      onError: (error: any) => {
        if (error.response?.data.message) {
          setRemainingAttempts(error.response?.data.remaining_attempts);
          setIsError(true);
          toast.error(error.response?.data.message);
        } else {
          toast.error("Algo errado. Contate o administrador!");
        }
      },
    }
  );

  const handleLogout = () => {
    localStorage.clear();
    localStorage.setItem("is_logged_in", "false");
  };

  async function Logout() {
    await api
      .post("auth/logout")
      .then(() => {
        handleLogout();
      })
      .catch((error) => {
        toast.error(error?.response?.data?.message);
      });
  }

  const value = useMemo(
    () => ({
      loginMutation,
      logout,
      Logout,
      isAuthenticated,
      isError,
      setIsError,
      setError,
      remainingAttempts,
      setRemainingAttempts,
      isSuccess,
      error,
      accessToken,
      firstAccessToken,
      unexpectedError,
      authenticated,
      setAuthenticated,
      setUnexpectedError,
      setFirstAccessToken,
    }),
    [user, isError, isSuccess, unexpectedError, authenticated]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

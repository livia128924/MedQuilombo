/* eslint-disable @typescript-eslint/no-explicit-any */
const APP_BASE_URL = import.meta.env.VITE_API_BASE_URL;
import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { IUser } from "../contexts/AuthProvider/types";
import { getLocalStorage, setLocalStorage } from "../utils/local-storage.util";
//import { toast } from "react-toastify";
import { refreshToken } from "../contexts/AuthProvider/AuthService";
import { toast } from "react-toastify";
//import { useTranslation } from "react-i18next";

const api = axios.create({
  baseURL: APP_BASE_URL,
});

api.interceptors.request.use((request: InternalAxiosRequestConfig) => {
  const user = getLocalStorage<IUser>("user");
  const language = getLocalStorage<string>("language");

  request.headers["Accept-Language"] = language ?? "pt-BR";

  if (user) {
    const defaultToken =
      request.headers.Authorization ?? `Bearer ${user?.access_token}`;
    request.headers["Authorization"] = defaultToken;
  }

  return request;
});

let refreshTokenAttempts = 0;
const maxRefreshTokenAttempts = 3;

api.interceptors.response.use(
  async (response: AxiosResponse) => response,
  async (error: any) => {
    const pathsToExclude = ["auth/login", "auth/first_access"];
    const originalRequest = error.config;
    const isOnline = navigator.onLine;
    const language = getLocalStorage<string>("language");
    if (
      error.response?.status === 401 &&
      !pathsToExclude.includes(error.config?.url || "") &&
      !originalRequest?._retry &&
      refreshTokenAttempts < maxRefreshTokenAttempts
    ) {
      originalRequest._retry = true;
      refreshTokenAttempts++;

      const user = getLocalStorage<IUser>("user");
      // console.log("user", user);

      if (user) {
        return await refreshToken(user.refresh_token)
          .then((response) => {
            user.access_token = response.data.access_token;
            user.refresh_token = response.data.refresh_token; // corrigido para usar refresh_token correto
            setLocalStorage("user", user);
            originalRequest.headers[
              "Authorization"
            ] = `Bearer ${user.access_token}`;
            return api(originalRequest);
          })
          .catch((err: any) => {
            console.log("err", err);
            //  toast.info(t("session.toast.logout"));
            window.location.href = "/";
            localStorage.clear();
          });
      } else {
        //localStorage.clear();

        const currentLocation = window.location.pathname;
        const currentLocationIsReset =
          window.location.pathname.includes("reset-password");
        if (currentLocation != "/" && !currentLocationIsReset) {
          // console.log("currentLocationIsReset", currentLocationIsReset);
          localStorage.clear();
          window.location.href = "/";
        }
      }
    } else {
      if (!isOnline) {
        console.log("language", language);
        toast.info(
          language === "pt-BR"
            ? "Sem conexão à internet. Verifique sua conexão e tente novamente."
            : "No internet connection. Please check your connection and try again."
        );
      }
      if (error.response?.status === 401) {
        toast.info("Token expirado.");
        window.location.href = "/";
        localStorage.clear();
      }
    }
    return Promise.reject(error);
  }
);
export default api;

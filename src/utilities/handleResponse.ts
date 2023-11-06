import { ApiResponse } from "apisauce";
import { GenericApiResponse } from "../types/api/patient/auth.types";

export const verifyResponse = (response: ApiResponse<any, any>): boolean => {
  return (
    (response.ok && response.data?.status) || response.data?.success === true
  );
};

export const formatResponseMessage = (
  response: ApiResponse<GenericApiResponse, GenericApiResponse>,
  fallbackMessage: string,
  fatalUseFallbackMesage?: boolean
): string => {
  if (fatalUseFallbackMesage) return fallbackMessage;
  return response.data?.message ?? fallbackMessage;
};

export const formatResponseError = (
  response: ApiResponse<GenericApiResponse, GenericApiResponse>
): string => {
  if (response.data?.message) return JSON.stringify(response.data.message);
  else if (response.problem) return response.problem;
  else return "An error occured.";
};

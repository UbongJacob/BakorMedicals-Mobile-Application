import { LoginRequest, RegisterRequest } from "../../types/api";
import {
  GenericApiResponse,
  PatienceLoginResponse,
} from "../../types/api/patient/auth.types";
import { client } from "../base.api";

export const patientLogIn = async (params: LoginRequest) =>
  await client.post<PatienceLoginResponse, GenericApiResponse>(
    "/auth/login",
    params
  );
export const patientRegister = async (params: RegisterRequest) =>
  await client.post<PatienceLoginResponse, GenericApiResponse>(
    "/auth/register",
    params
  );

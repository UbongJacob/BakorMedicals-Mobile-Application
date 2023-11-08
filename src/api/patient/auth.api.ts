import { LoginRequest, RegisterRequest } from "../../types/api";
import {
  GenericApiResponse,
  PatienceLoginResponse,
} from "../../types/api/patient/auth.types";
import { DoctorLoginResponse } from "../../types/api/patient/doctor.type";
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

export const doctorRegister = async (params: RegisterRequest) =>
  await client.post<DoctorLoginResponse, GenericApiResponse>(
    "/doctor/auth/register",
    params
  );
export const doctorLogin = async (params: LoginRequest) =>
  await client.post<DoctorLoginResponse, GenericApiResponse>(
    "/doctor/auth/login",
    params
  );

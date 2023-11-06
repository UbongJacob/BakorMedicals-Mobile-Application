import { GenericApiResponse } from "../../types/api/patient/auth.types";
import { GetAllDoctorsResponse } from "../../types/api/patient/doctor.type";
import { client } from "../base.api";

export const getAllDoctorsQueryName = "getAllDoctors";

export const getAllDoctors = () =>
  client.get<GetAllDoctorsResponse, GenericApiResponse>("/doctor/all");

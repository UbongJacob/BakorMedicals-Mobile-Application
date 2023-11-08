import { GenericApiResponse } from "./auth.types";

interface Specialty {
  id: string;
  title: string;
  subtitle: string | null;
}

export interface IDoctor {
  id: string;
  email: string;
  phoneNumber: string;
  firstName: string;
  lastName: string;
  specialtyId: string;
  description: string;
  gender: string;
  imageURL: string | null;
  createdAt: string;
  updatedAt: string;
  isAvailable: boolean;
  specialty: Specialty;
}

export interface GetAllDoctorsResponse extends GenericApiResponse {
  data: IDoctor[];
}

export interface DoctorLoginResponse extends GenericApiResponse {
  data: IDoctor;
}

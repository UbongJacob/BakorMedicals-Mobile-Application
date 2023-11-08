import { GenericApiResponse } from "../../types/api/patient/auth.types";
import { client } from "../base.api";

interface CreatBookingResponse {
  id: string;
  scheduledDateTime: string;
  status: string;
  doctorId: string;
  patientId: string;
  doctorNotes: string | null;
  patientNotes: string | null;
  createdAt: string;
  updatedAt: string;
}

interface CreateBookingRequest {
  doctorId: string;
  patientId: string;
  scheduledDateTime: string;
}

export const createBooking = async (params: CreateBookingRequest) =>
  await client.post<CreatBookingResponse, GenericApiResponse>(
    "/bookings",
    params
  );

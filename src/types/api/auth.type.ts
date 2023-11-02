import {GetAllCountriesAndStatesData} from './accountSetup.type';

// GENERICS START
export interface GenericResponse {
  status?: string;
  message?: string;
}

// GENERICS END

export interface SignUpRequest {
  email: string;
  phone: string;
  password: string;
}
export interface SignUpResponse extends GenericResponse {
  data: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export type SendOTPPurposes = Readonly<
  | 'email_verification'
  | 'password_reset'
  | 'password_change'
  | 'phone_verification'
>;

type Nullable<T> = T | null;
interface UserDetails {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  middle_name: string;
  dob: string;
  phone: string;
  profile_photo: string;
  country_id: number;
  state_id: number;
  city_id: number;
  email_verified_at: string;
  phone_verified_at: string;
  remember_token: boolean;
  token: string;
  // TODO CHANGE THESE TYPES
  certifications: any[];
  work_histories: any[];
  active_schedules: any[];

  // MAY NOT BE AVAILABLE A LOGIN
  country_name: string;
  state_name: string;
  city_name: string;
  country: GetAllCountriesAndStatesData;
  state: GetAllCountriesAndStatesData;
  city: GetAllCountriesAndStatesData;
}

export interface LoginResponse extends GenericResponse {
  data?: Nullable<UserDetails>;
}

export interface SendOTPRequest {
  email?: string;
  purpose: SendOTPPurposes;
  phone?: string;
}

export interface SendOTPResponse extends GenericResponse {
  data: string;
}

export interface VerifyOTPRequest extends SendOTPRequest {
  otp: string;
}

// THERE IS NO VERFY OTP RESPONSE CAUSE IT RETURNS THE SAME THING AS THE LOGIN RESPONSE

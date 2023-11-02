import {GenericResponse} from './auth.type';

export interface UpdateProfilePhotoRequest {
  formData: FormData;
}

export interface GetAllCountriesAndStatesData {
  id: number;
  name: string;
}

export interface GetAllCountriesAndStatesResponse extends GenericResponse {
  data?: GetAllCountriesAndStatesData[];
}

export interface UpdateBioRequest {
  first_name: string;
  last_name: string;
  middle_name?: string;
  dob: string;
  country_id: number;
  state_id: number;
  city_id?: number;
}

export interface UpdateBioResponse extends GenericResponse {
  data: {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    middle_name?: string;
    dob: string;
    phone: string;
    profile_photo: string;
    email_verified_at: string | null;
    phone_verified_at: string | null;
    remember_token: string | null;
    country_name: string;
    state_name: string;
    city_name: string;
    country: GetAllCountriesAndStatesData;
    state: GetAllCountriesAndStatesData;
    city: GetAllCountriesAndStatesData;
  };
}

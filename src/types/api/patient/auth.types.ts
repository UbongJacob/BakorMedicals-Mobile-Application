export interface GenericApiResponse {
  message: string;
  success: boolean;
}

interface UserData {
  id: string;
  email: string;
  phoneNumber: string;
  firstName: string;
  lastName: string;
  address: null | string;
  gender: null | string;
  imageURL: null | string;
  createdAt: string;
  updatedAt: string;
}

export interface PatienceLoginResponse extends GenericApiResponse {
  data: UserData;
}

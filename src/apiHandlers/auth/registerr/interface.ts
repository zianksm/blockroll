import { ApiResponse, IMock } from '../../baseInterface';

export interface IResgiserController<UserData, Response>
  extends IMock<RegisterRequest, RegisterResponse> {
  submit(data: UserData): Promise<Response>;
}
// new auth mock

export type RegisterRequest = {
  email: string;
  password: string;
  name: string;
  phone_number: string;
};

export type RegisterResponse = ApiResponse<RegisterData>;

export type RegisterData = {
  uuid: string;
  name: string;
  email: string;
  phone_code: string;
  phone_number: string;
};

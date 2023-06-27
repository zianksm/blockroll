import { ApiResponse, IMock, Role } from '../../baseInterface';

export interface ILoginController<UserData, Response>
  extends IMock<LoginRequest, LoginResponse> {
  submit(data: UserData): Promise<Response>;
  // new auth mock
}
// new auth
export type LoginRequest = {
  email: string;
  password: string;
};

export type LoginResponse = ApiResponse<LoginData>;

export type LoginData = {
  access_token: string;
  user: {
    uuid: string;
    name: string;
    email: string;
    phone_code: string;
    phone_number: string;
    role: Role;
  };
};

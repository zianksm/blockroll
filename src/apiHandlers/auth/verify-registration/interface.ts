export interface IVerifyRegistrationController {
  submit(data: VerifyRegistrationRequest): Promise<VerifyRegistrationResponse>;
}

export type VerifyRegistrationRequest = {
  uuid: string;
  code: string;
};

export type VerifyRegistrationResponse = {
  success: string;
  message: string;
};

// new auth mock

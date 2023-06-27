import { ApiResponse, IMock } from '../../baseInterface';

export interface IResendVerificationController
  extends IMock<ResendVerificationRequest, ResendVerificationResponse> {
  submit(data: ResendVerificationRequest): Promise<ResendVerificationResponse>;
}
// new auth mock

export type ResendVerificationRequest = {
  uuid: string;
};

export type ResendVerificationResponse = ApiResponse<ResendVerificationData>;

export type ResendVerificationData = {
  expired_in_sec: number;
};

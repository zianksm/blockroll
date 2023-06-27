export interface RegisterInterface {
  fullname: string;
  email: string;
  password: string;
  confirmPassword: string;
  phoneNumber: string;
}

export interface LoginInterface {
  email: string;
  password: string;
}
export interface ForgotPasswordInterface {
  email: string;
}
export interface OTPInterface {
  otp: string[];
}

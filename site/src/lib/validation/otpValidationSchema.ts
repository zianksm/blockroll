import * as Yup from 'yup';

export const otpValidationSchema = Yup.object().shape({
  otp: Yup.array()
    .of(
      Yup.string()
        .matches(/^\d$/, 'OTP must be a single digit')
        .required('OTP is required'),
    )
    .required('OTP is required')
    .min(4, 'OTP must be 4 digits long')
    .max(4, 'OTP must be 4 digits long'),
});

import * as Yup from 'yup';

const forgotPasswordValidationSchema = Yup.object({
  email: Yup.string().email('Invalid email').required('Email is required'),
});

export default forgotPasswordValidationSchema;

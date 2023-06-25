import * as Yup from 'yup';

const MINIMAL_PASSWORD_LENGTH = 7;

const loginValidationSchema = Yup.object({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .min(7, 'Password must be at least 8 characters')
    .required('Password is required'),
});

export default loginValidationSchema;

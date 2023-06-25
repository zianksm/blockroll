import * as Yup from 'yup';

const registerValidationSchema = Yup.object({
  fullname: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Confirm password is required'),
  phoneNumber: Yup.string()
    .matches(/^\+?[0-9]{10,}$/, 'Invalid phone number')
    .required('Phone number is required'),
});

export default registerValidationSchema;

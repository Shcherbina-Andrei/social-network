import { ErrorMessages, PASSWORD_REGEX } from '@/shared/validation/validation';
import { object, ref, string } from 'yup';

export const registrationSchema = object({
  username: string().required(),
  email: string().email(ErrorMessages.email).required(),
  password: string().matches(PASSWORD_REGEX, ErrorMessages.password).required(),
  repeatPassword: string()
    .oneOf([ref('password')], ErrorMessages.repeatPassword)
    .required(),
});

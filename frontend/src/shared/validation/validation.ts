export const ErrorMessages = {
  email: 'Incorrect email',
  repeatPassword: 'Passwords must match',
  password:
    'Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character',
  required: 'Field is required',
  maxLength: (value: number) => `Max length is ${value}`,
  minLength: (value: number) => `Min length is ${value}`,
};

export const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

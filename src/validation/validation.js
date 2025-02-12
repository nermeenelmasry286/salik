export const validateForm = (formData) => {
  let errors = {};

  for (const field in formData) {
    const error = validateField(field, formData[field], formData);
    if (error) {
      errors[field] = error;
    }
  }

  return errors;
};

export const validateLoginForm = (formData) => {
  let errors = {};

  for (const field in formData) {
    const error = validateField(field, formData[field], formData);
    if (error) {
      errors[field] = error;
    }
  }

  return errors;
};

export const validateField = (name, value, formData) => {
  let error = '';

  switch (name) {
    case 'userName':
      if (!value.trim()) {
        error = 'User Name is required';
      } else if (value.length < 3) {
        error = 'User Name must be at least 3 characters long';
      }
      break;
    case 'email':
      if (!value.trim()) {
        error = 'Email is required';
      } else if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(value)) {
        error = 'Invalid email format';
      }
      break;
    case 'password':
      if (!value.trim()) {
        error = 'Password is required';
      } else if (value.length < 8) {
        error = 'Password must be at least 8 characters';
      } else if (!/[A-Z]/.test(value)) {
        error = 'Password must contain at least one uppercase letter';
      } else if (!/[a-z]/.test(value)) {
        error = 'Password must contain at least one lowercase letter';
      } else if (!/[0-9]/.test(value)) {
        error = 'Password must contain at least one number';
      } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
        error = 'Password must contain at least one special character';
      } else if (/\s/.test(value)) {
        error = 'Password should not contain spaces';
      }
      break;
    case 'confirmPassword':
      if (!value.trim()) {
        error = 'Confirm Password is required';
      } else if (value !== formData.password) {
        error = 'Passwords do not match';
      }
      break;
    case 'nationalId':
      if (!value.trim()) {
        error = 'National ID is required';
      } else if (value.length !== 14) {
        error = 'National ID must be 14 characters long';
      }
      break;
    default:
      break;
  }

  return error;
};

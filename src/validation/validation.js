export const validateForm = (formData) => {
  let errors = {};

  if (!formData.userName.trim()) {
    errors.userName = 'User Name is required';
  } else if (formData.userName.length < 3) {
    errors.userName = 'User Name must be at least 3 characters long';
  }

  if (!formData.email.trim()) {
    errors.email = 'Email is required';
  } else if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(formData.email)) {
    errors.email = 'Invalid email format';
  }

  if (!formData.password.trim()) { 
    errors.password = 'Password is required'; 
  } 
 
  else if (formData.password.length < 8) { 
    errors.password = 'Password must be at least 8 characters'; 
  }
 
  else if (!/[A-Z]/.test(formData.password)) { 
    errors.password = 'Password must contain at least one uppercase letter'; 
  }
  
  else if (!/[a-z]/.test(formData.password)) { 
    errors.password = 'Password must contain at least one lowercase letter'; 
  }
 
  else if (!/[0-9]/.test(formData.password)) { 
    errors.password = 'Password must contain at least one number'; 
  }

  else if (!/[!@#$%^&*(),.?":{}|<>]/.test(formData.password)) { 
    errors.password = 'Password must contain at least one special character'; 
  }

  else if (/\s/.test(formData.password)) { 
    errors.password = 'Password should not contain spaces'; 
  }



  if (!formData.confirmPassword.trim()) {
    errors.confirmPassword = 'Confirm Password is required';
  } else if (formData.confirmPassword !== formData.password) {
    errors.confirmPassword = 'Passwords do not match';
  }

  if (!formData.nationalId.trim()) {
    errors.nationalId = 'National ID is required';
  } else if (formData.nationalId.length !== 14) {
    errors.nationalId = 'National ID must be 14 characters long';
  }


  return errors;
};

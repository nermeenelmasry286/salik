import React, { useState } from 'react'; 
import { FormControl, OutlinedInput, InputLabel, Button, Box, FormHelperText } from '@mui/material'; 
import { validateForm } from '../validation/validation'; 
import { useDispatch, useSelector } from 'react-redux'; 
import { signUpUser } from '../redux/slices/authSlices'; 
import { useNavigate } from 'react-router-dom'; // استيراد useNavigate

export default function SignUp() { 
  const [formData, setFormData] = useState({ 
    userName: '', 
    email: '', 
    password: '', 
    confirmPassword: '',  
    nationalId: '', 
  }); 

  const [errors, setErrors] = useState({}); 
  const dispatch = useDispatch(); 
  const { loading, error } = useSelector((state) => state.auth); 
  const navigate = useNavigate(); // تعريف الـ navigate

  const handleChange = (e) => { 
    const { name, value } = e.target; 
    setFormData({ ...formData, [name]: value }); 

    // Call the validation function immediately as the user types
    const validationErrors = validateForm({ ...formData, [name]: value });
    setErrors(validationErrors);
  }; 

  const handleSubmit = (e) => { 
    e.preventDefault(); 
    const validationErrors = validateForm(formData); 

    setErrors(validationErrors); 

    if (Object.keys(validationErrors).length === 0) { 
      const { confirmPassword, ...dataToSubmit } = formData;  
      console.log('Form Data before dispatch:', dataToSubmit); 
      dispatch(signUpUser(dataToSubmit)); 

      navigate('/');  
    }
  }; 

  return ( 
    <form onSubmit={handleSubmit} noValidate autoComplete="off"> 
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}> 
        {['userName', 'email', 'password', 'confirmPassword', 'nationalId'].map((field) => ( 
          <FormControl sx={{ width: '25ch' }} key={field} error={!!errors[field]}> 
            <InputLabel htmlFor={field}>{field.charAt(0).toUpperCase() + field.slice(1)}</InputLabel> 
            <OutlinedInput 
              id={field} 
              name={field} 
              type={field.includes('password') ? 'password' : 'text'} 
              value={formData[field]} 
              onChange={handleChange} 
              placeholder={`Enter your ${field}`} 
              label={field.charAt(0).toUpperCase() + field.slice(1)} 
            /> 
            {errors[field] && ( 
              <FormHelperText>{errors[field]}</FormHelperText> 
            )} 
          </FormControl> 
        ))} 

        {error && <FormHelperText error>{error}</FormHelperText>} 

        <Button type="submit" variant="contained" color="primary" disabled={loading}> 
          {loading ? 'Signing Up...' : 'Sign Up'} 
        </Button> 
      </Box> 
    </form> 
  ); 
}
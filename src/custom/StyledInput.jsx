import React from "react";
import styled from "styled-components";
import { FormControl, OutlinedInput, InputLabel, Button, Box, FormHelperText } from '@mui/material';
// Styled Input
export const StyledOutlinedInput = styled(OutlinedInput)`
  background-color:rgb(255, 255, 255); 
  border-radius: 8px;
  padding: 12px;
  width: 100%;
  height: 40px;
  line-height: 40px;


  &.Mui-focused {
    border-color: #FFB800; 
  }
  &:hover {
    background-color: #e0e0e0; 
  }

`;

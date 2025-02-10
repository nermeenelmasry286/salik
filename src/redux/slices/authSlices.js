import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { registerUser } from '../../api/requests';

export const signUpUser = createAsyncThunk('auth/signUpUser', async (userData, { rejectWithValue }) => {
  try {
    const response = await registerUser(userData);


    // console.log('API Response:', response);


    if (!response.id) {
      console.error('Response does not contain an ID:', response);
      throw new Error(response.message || 'No error message provided');
    }
    return response;
  } catch (error) {
    console.error('Error in signUpUser thunk:', error);
    return rejectWithValue(error.message || 'No error message provided');
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState: { user: null, loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signUpUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signUpUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(signUpUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;

       
        console.log('Error in Redux State:', action.payload);
      });
  },
});

export default authSlice.reducer;


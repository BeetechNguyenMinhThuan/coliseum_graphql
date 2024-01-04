import {createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const handleLogin = createAsyncThunk('handleLogin', 
  async () =>{
    //login
  }
)

const initialState = {
  user : {}
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) =>{
    builder.addCase(handleLogin.pending, (state, action)=>{
      console.log('action: ', action);
      console.log('state: ', state);
    })
  }
});

//export reducers
// export const {} = authSlice.actions;
export default authSlice.reducer;
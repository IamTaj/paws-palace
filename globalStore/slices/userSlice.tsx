import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { loginUserService } from "../features/user.service"

interface UserState {
  isLoggedIn: boolean
  loading: boolean
  data: any
  error: any
}

interface LoginPayload {
  name: string | null
  mobileNumber: string | null
  email: string | null
  userId: string | null
}

const initialState: UserState = {
  isLoggedIn: false,
  loading: false,
  data: {},
  error: "",
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.data = {}
      state.isLoggedIn = false
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUserService.pending, (state) => {
        state.loading = true
      })
      .addCase(loginUserService.fulfilled, (state, action) => {
        state.loading = false
        state.data = action.payload
        state.isLoggedIn = true
      })
      .addCase(loginUserService.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  },
})

export const { logoutUser } = userSlice.actions

export const selectUserData = (state: any) => state.user
export const userReducer = userSlice?.reducer

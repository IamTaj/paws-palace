import { fireBaseCustomConfig } from "@/firebase.congig"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth"

const auth = getAuth(fireBaseCustomConfig)

type userProps = { email: string; password: string }

export const loginUserService = createAsyncThunk(
  "user_signIn",
  async ({ email, password }: userProps) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )
      console.log("userCredential: ", userCredential)
      const userData = userCredential.user
      console.log("user?.user?.name", userData?.providerData[0]?.email)

      if (userData !== null) {
        const newUser = {
          name: userData?.providerData[0]?.displayName,
          mobileNumber: userData?.providerData[0]?.phoneNumber,
          email: userData?.providerData[0]?.email,
          userId: userData?.uid,
        }

        // Dispatch the loginUser action with the new user data
        return newUser
      }
    } catch (error) {
      return error
    }
  }
)

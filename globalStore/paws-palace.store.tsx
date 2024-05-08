import { userReducer } from "@/globalStore/slices/userSlice"
import { combineReducers, configureStore } from "@reduxjs/toolkit"
import storage from "redux-persist/lib/storage"
import { persistReducer, persistStore } from "redux-persist"
import { useDispatch } from "react-redux"

const persistConfig = {
  key: "root",
  storage,
}

const rootReducer = combineReducers({
  users: userReducer,
  // other reducers...
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const pawsPalaceGlobalStore = configureStore({
  reducer: persistedReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export const pawsPalaceGlobalPersistor = persistStore(pawsPalaceGlobalStore)

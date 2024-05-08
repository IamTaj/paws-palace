import { theme } from "@/lib/theme"
import "@/styles/globals.css"
import { ThemeProvider } from "@emotion/react"
import type { AppProps } from "next/app"
import {
  pawsPalaceGlobalPersistor,
  pawsPalaceGlobalStore,
} from "@/globalStore/paws-palace.store"
import { PersistGate } from "redux-persist/integration/react"
import { Provider } from "react-redux"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={pawsPalaceGlobalStore}>
        <PersistGate loading={null} persistor={pawsPalaceGlobalPersistor}>
          <ThemeProvider theme={theme}>
            <Component {...pageProps} />
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </>
  )
}

import { createContext } from "react"
import { bootstrapPage } from "./bootstrap"

export interface PageContextProps {
  isMobile?: boolean
}
export const PageContext = createContext<PageContextProps | undefined>(
  undefined
)


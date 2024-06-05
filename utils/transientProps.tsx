import { CreateStyled } from "@emotion/styled"

export const transientProps: Parameters<CreateStyled>[1] = {
  shouldForwardProp: (propName: string) => !propName.startsWith("$"),
}

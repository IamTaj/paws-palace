import { UPDATE_PROFILE } from "@/features/constants/apiConstants"
import { ApiHandler, ApiMethod } from "@/types"
import axios from "axios"

export const handler: ApiHandler = {
  createRequest: (url, payload, headers) => {
    return {
      url,
      data: payload,
      method: ApiMethod.put,
      headers: {
        ...headers,
      },
    }
  },

  mapResponse: (title: string, response: any) => {
    const { data, status }: { data: any; status: number } = response || {}
    if ([200, 201]?.includes(status)) {
      return {
        data,
        error: false,
      }
    } else {
      return { error: true, data }
    }
  },

  apiCall: async (payload: any) => {
    const apiConfig = handler.createRequest(UPDATE_PROFILE, payload, {
      Authorization: `Bearer ${global?.window?.localStorage?.getItem("accessToken")}`,
    })
    const response = await axios(apiConfig)
    return handler.mapResponse("ssoLogin", response)
  },
}

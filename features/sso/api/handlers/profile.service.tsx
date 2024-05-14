import { USER_PROFILE } from "@/features/constants/apiConstants"
import { ApiHandler, ApiMethod } from "@/types"
import { getItem } from "@/utils/manageLocalStorage"
import axios from "axios"

export const handler: ApiHandler = {
  createRequest: (url, payload, headers) => {
    return {
      url,
      data: payload,
      method: ApiMethod.get,
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

  apiCall: async () => {
    const headers = {
      Authorization: `Bearer ${getItem("accessToken")}`,
      "Content-Type": "application/json",
    }
    const apiConfig = handler.createRequest(USER_PROFILE, {}, headers)
    const response = await axios(apiConfig)
    return handler.mapResponse("ssoLogin", response)
  },
}

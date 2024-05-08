import { config } from "./config"
import { createClient } from "next-sanity"
import { SanityClient } from "@sanity/client"
import { getFile } from "@sanity/asset-utils"
import imageUrlBuilder from "@sanity/image-url"

if (!config.projectId) {
  throw Error("The Project ID is not set. Check your environment variables.")
}
//Changed type to any  to resolve build errors need to resolve this issue

const client: any = createClient(config)

const builder = imageUrlBuilder(client)
export const urlFor = (source: any) => builder.image(source)

export const getVideoUrl = (source: any) => getFile(source, client.config())?.asset?.url

const previewClient = createClient({
  ...config,
  useCdn: true,
})

export function getClient(usePreview: boolean) {
  return (usePreview ? previewClient : client) as SanityClient
}

export default client

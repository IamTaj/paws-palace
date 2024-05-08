import { ClientConfig } from "next-sanity"

export interface ProjectConfig {
  projectId: string
  dataset: string
  token?: string
  /** Must be provided when token is used in browser, as native EventSource does not support auth-headers. */
  // EventSource?: GroqStoreEventSource;
}

export const projectConfig: ProjectConfig = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
}

export const config: ClientConfig = {
  ...projectConfig,
  apiVersion: "2022-03-07",
  // token:
  //   'sku8OVybhmAnM1DJxkGpAqUV1fkzzNIXFOMfUju95KOEisEHujcl2ohoDcsBDGVq5zqquldbipPr4MMSrbylnaOXSpzWRQst3xVJEkWuyHvjYUcXN8Bj6JQuKEKPqzZvD3jRb99vW3Bcys8i2oMllJjJn89VsjE38b2zfoHcOSE1SAgqbycb',
  ignoreBrowserTokenWarning: true,
  /**
   * Set useCdn to `false` if your application require the freshest possible
   * data always (potentially slightly slower and a bit more expensive).
   * Authenticated request (like preview) will always bypass the CDN
   **/
  useCdn: true,
}

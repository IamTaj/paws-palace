export enum PathType {
    dialog = "dialog",
    external = "external",
    internal = "internal",
  }

export const ClickToNavigate = (router: any, url: string, type: string) => {
  switch (type) {
    case PathType?.internal:
      return url && router?.push(url)
    case PathType?.external:
      return url && window?.open(url)
    case PathType?.dialog:
      return <></>
    default:
      return <></>
  }
}

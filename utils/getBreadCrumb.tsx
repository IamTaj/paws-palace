export const breadcrumbList = (router: any) => {
  const { asPath, query } = router

  const asPathWithoutQuery = router.asPath.split("?")[0]
  const asPathNestedRoutes = asPathWithoutQuery
    .split(/\/|\?/)
    .filter((v: any) => v.length > 0)

  const loc =
    typeof location !== "undefined"
      ? {
          query: Object.fromEntries(new URLSearchParams(location.search)),
          pathname: location?.pathname,
        }
      : {
          query,
          pathname: asPath?.[1],
        }

  const asPathParts = loc.pathname?.split(/\/|\?/)

  const crumblist = asPathParts?.map((subpath: any, idx: number) => {
    const href =
      subpath !== "" ? asPathNestedRoutes.slice(0, idx).join("/") : ""
    return { href, text: subpath === "" ? "Home" : subpath }
  })

  return crumblist ? [...crumblist, loc?.query] : []
}

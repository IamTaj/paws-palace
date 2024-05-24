import { getClient } from "@/lib-sanity"
import { getPageQuery } from "./sanity-queries"

const getServerSideProps = async (context: any, path: any) => {
  const isMobileInitial =
    /(Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop)/i.test(
      context.req.headers["user-agent"] || ""
    )
  let queryParams = context.query
  const tempPath = path === "/" ? "/homepage" : path
  const query = getPageQuery(tempPath)
  const fetchedData = await getClient(true).fetch(query, { tempPath })

  if (fetchedData?.[0] == null) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      key: tempPath + context?.query?.pid,
      data: fetchedData?.[0] ?? [],
      // bannerTitle: fetchedData?.[0]?.pageBody?.items?.[0]?.title || "",
      // bannerLogo: fetchedData?.[0]?.header?.[0]?.secondaryLogo?.asset?._ref || "",
      queryParams: queryParams,
      isMobileInitial: isMobileInitial,
    },
  }
}

export { getServerSideProps as basePageServerSide }

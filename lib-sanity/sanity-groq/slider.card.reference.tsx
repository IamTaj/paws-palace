import { groq } from "next-sanity"
import { getClient } from "../../lib-sanity"

const fetchProductSlider = async(refId: string) => {
  let data
  const query = groq`*[_id == "${refId}"]{
    ...
  }`
 await getClient(true)
    .fetch(query)
    .then((res) => {
        (data = res?.[0])})
    .catch((err) => (data = err))

  return data
}

export default fetchProductSlider

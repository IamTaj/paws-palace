import { groq } from "next-sanity"

export const bodyGroqFragment = `"pageBody":{
    ...,
    items[isHidden!=true]{
      ...,
      aesthetic->,
     _type in ["switchCaseBlock"] => {
      ...,
     "cases":cases[]{
        ...,
        item[]{
          ...,
          aesthetic->,
        },
      },
    },
    },
  }`

export const pageGroqFragment = `{
    "footer":*[_type == "footer" && path =="/footer"],
    "header": *[_type == "header" && path =="/header"],
    "footer":*[_type == "footer" && path =="/footer"],
    }`

export const getPageQuery = (path: any) => {
  return groq`
  *[_type == "page" && path == "${path}"]`
}

export const getBodyQuery = (path: any) => {
  return groq`
  *[_type == "page" && path == "${path}"]{${bodyGroqFragment}}`
}

export const getFooterQuery = () => {
  return groq`*[_type == "footer" && path =="/footer"]`
}
export const getHeaderQuery = () => {
  return groq`*[_type == "header" && path =="/header"]`
}

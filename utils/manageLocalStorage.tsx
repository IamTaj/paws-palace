export function getItem(key: string) {
  return global?.window?.localStorage?.getItem(key)
}
export function setItem(key: string, item: any) {
  global?.window?.localStorage?.setItem(key, item)
}

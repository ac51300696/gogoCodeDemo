import { http } from "./loading"
export const fetchUrl = '/a/x//b/b/b/s'
export const fetchDemo = () => {
    return http(fetchUrl)
}

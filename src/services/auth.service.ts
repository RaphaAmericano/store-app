import { UserAuth, UserRequest } from "@/types/User.props"
import http from "./http.service"

export async function postSignin(payload: UserRequest){
    return http.post<never, UserAuth>("signin", payload)
}
export async function postSignout(payload: any){
    return http.post("signout", payload)
}
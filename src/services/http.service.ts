import axios, { AxiosResponse } from "axios"

const service = axios.create({
    baseURL:`${process.env.API_AUTH_URL}`,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    }
})

function parseResponse(response: AxiosResponse){
    return response.data
}

function handleResponseError(error: any){
    console.log(error)
    return error
}

service.interceptors.response.use(parseResponse, handleResponseError)

export default service


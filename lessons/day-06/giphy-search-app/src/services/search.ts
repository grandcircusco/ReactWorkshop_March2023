import axios, { AxiosResponse } from "axios"
import { GiphySearchResponse } from "../types/api"

// specify api return values
export const search = (query: string): Promise<AxiosResponse<GiphySearchResponse>> => {
    return axios.get(process.env.REACT_APP_API_URL as string, {
        params: {
            q: query,
            api_key: process.env.REACT_APP_API_KEY
        }
    })
}
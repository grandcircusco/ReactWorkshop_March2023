import axios, { AxiosResponse } from "axios"
import { GiphySearchResponse } from "../types/api/search"
import { GiphySearchByIdResponse } from "../types/api/searchById"
import { GiphySearchByIdsResponse } from "../types/api/searchByIds"

// specify api return values
export const search = (query: string): Promise<AxiosResponse<GiphySearchResponse>> => {
    // you changed this key in the env -> show the refactoring
    return axios.get(`${process.env.REACT_APP_API_URL}/v1/gifs/search`, {
        params: {
            q: query,
            api_key: process.env.REACT_APP_API_KEY
        }
    })
}

export const searchById = (gifID: string): Promise<AxiosResponse<GiphySearchByIdResponse>> => {
    return axios.get(`${process.env.REACT_APP_API_URL}/v1/gifs/${gifID}`, {
        params: {
            api_key: process.env.REACT_APP_API_KEY
        }
    })
}

export const searchByIDs = (ids: string[]): Promise<AxiosResponse<GiphySearchByIdsResponse>> => {
    return axios.get(`${process.env.REACT_APP_API_URL}/v1/gifs`, {
        params: {
            api_key: process.env.REACT_APP_API_KEY,
            ids: ids.join(",")
        }
    });
}
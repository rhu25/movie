import {SET_MOVIE} from './types.js'
export const setMovie = (params) => {
    return {
        type: SET_MOVIE,
        ...params
    }
}
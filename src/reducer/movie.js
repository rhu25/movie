import {SET_MOVIE} from '../actions/types.js'
let initState = {
    movies: [],
    search: ''
}
export default (state = initState, action) => {
    switch (action.type) {
      case SET_MOVIE:
        return {
            ...state,
            movies: action.movies,
            search: action.search
        }
      default:
        return state
    }
  }
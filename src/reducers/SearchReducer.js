
import { SEARCH_CHANGE } from '../types'

const INITIAL_STATE = {
    movie: ''
}
const SearchReducer = (state = INITIAL_STATE, action) => {
    console.log('acrtion SearchReducer', action)
    switch (action.type) {
        case SEARCH_CHANGE:
            return {
                ...state,
                movie: action.payload
            }
        default:
            return state;
    }
}

export default SearchReducer

import { SEARCH_CHANGE, MOVIES_FETCH,  MOVIES_FILED } from '../types'

const INITIAL_STATE = {
    movie: '',
    data: []
}
const SearchReducer = (state = INITIAL_STATE, action) => {
    console.log('acrtion SearchReducer', action)
    switch (action.type) {
        case SEARCH_CHANGE:
            return {
                ...state,
                movie: action.payload
            }
        case MOVIES_FETCH:
            return {
                ...state,
                data: action.payload
            }
        case MOVIES_FILED:
            return {
                ...state
            }
        default:
            return state;
    }
}

export default SearchReducer
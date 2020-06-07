import { SEARCH_CHANGE } from '../types'

export const SearchChange = (text) => {
    console.log('text in Action', text);
    return {
        type: SEARCH_CHANGE,
        payload: text
    }
}
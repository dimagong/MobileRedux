import { SEARCH_CHANGE, MOVIES_FETCH, MOVIES_FILED } from '../types'

export const SearchChange = (text) => {
    console.log('text in Action', text);
    return {
        type: SEARCH_CHANGE,
        payload: text
    }
}

export const getMovies = (text) => async (dispatch) => {
    function onSuccess(success){
        dispatch({
            type: MOVIES_FETCH,
            payload: success
        })
        return succes
    }
    function onError(error){
        dispatch({
            type: MOVIES_FILED,
            payload: error
        })
    }
    try {
        const URL = `https://api.tvmaze.com/search/shows?q=${text}`
        //const URL = `http://api.tvmaze.com/search/shows?q=${text}`
        const res = await fetch( URL, {
            method: 'GET'
        })
        const succes =  await res.json()
        console.log('succes', succes)
        return onSuccess(succes)
    } catch (error) {
        return onError(error)
    }

}
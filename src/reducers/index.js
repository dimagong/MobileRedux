import {combineReducers} from 'redux'
import SearchReducer from './SearchReducer'


const appRedux = combineReducers({
    search: SearchReducer
})


const reducer = (state, action) => {
    return appRedux(state, action)
}

export default reducer;
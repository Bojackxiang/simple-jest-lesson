import {createStore, combineReducers} from 'redux'
import todoReducer from '../containers/TodoList/store/reducer'


const reducers = combineReducers({
    todo: todoReducer
})

const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store; 
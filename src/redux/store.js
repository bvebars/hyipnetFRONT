import {applyMiddleware, combineReducers, createStore} from "redux";
import newsReducer from "./articles-reducer";
import thunkMiddleware from "redux-thunk"

let reducers = combineReducers({
    articlesPage: newsReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store
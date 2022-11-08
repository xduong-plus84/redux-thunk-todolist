import { applyMiddleware, combineReducers, createStore } from "redux";
import { TodoListReducer } from "./reducer/TodoListReducer";
import reduxThunk from "redux-thunk";

const rootReducer = combineReducers({
  TodoListReducer,
});

const store = createStore(rootReducer, applyMiddleware(reduxThunk));
export default store;

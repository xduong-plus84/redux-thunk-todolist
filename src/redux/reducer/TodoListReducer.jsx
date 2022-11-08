import { ERROR, GET_TASK } from "../constant/constant_TodoList";

const initialState = {
  taskList: [],
};

export let TodoListReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TASK: {
      // console.log("action: ", action.payload);
      // let taskList_Update = [...state.taskList];
      // taskList_Update;

      return { ...state, taskList: action.payload };
    }
    case ERROR: {
      // console.log("action: ", action.payload);
      // let taskList_Update = [...state.taskList];
      // taskList_Update;

      return { ...state };
    }

    default:
      return { ...state };
  }
};

import { ERROR, GET_TASK } from "../constant/constant_TodoList";
import { service_TodoList } from "../service/service_TodoList";

// const getTaskList_Reducer
const getTaskList_Reducer = (res) => ({
  type: GET_TASK,
  payload: res.data,
});

export const getAllTaskList_API = () => {
  return (dispatch) => {
    service_TodoList
      .getAllTask()
      .then((res) => {
        // console.log(res);
        dispatch(getTaskList_Reducer(res));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const addTask_API = (taskName) => {
  return (dispatch) => {
    service_TodoList
      .addTask(taskName)
      .then((res) => {
        // console.log(res);
        dispatch(getAllTaskList_API());
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const deleteTask_API = (taskName) => {
  return (dispatch) => {
    service_TodoList
      .deleteTask(taskName)
      .then((res) => {
        // console.log(res);
        dispatch(getAllTaskList_API());
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const doneTask_API = (taskName) => {
  return (dispatch) => {
    service_TodoList
      .doneTask(taskName)
      .then((res) => {
        // console.log(res);
        dispatch(getAllTaskList_API());
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const rejectTask_API = (taskName) => {
  return (dispatch) => {
    service_TodoList
      .rejectTask(taskName)
      .then((res) => {
        // console.log(res);
        dispatch(getAllTaskList_API());
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

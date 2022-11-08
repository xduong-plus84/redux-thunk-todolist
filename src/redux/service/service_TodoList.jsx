import { https } from "./configURL";

export const service_TodoList = {
  getAllTask: () => {
    // console.log("getTaskList");
    let uri = "/api/ToDoList/GetAllTask";
    return https.get(uri);
  },
  getTask: (taskName) => {
    // console.log("getTaskList");
    let uri = `/api/ToDoList/GetTask?taskName=${taskName}`;
    return https.get(uri);
  },
  addTask: (taskName) => {
    let uri = "/api/ToDoList/AddTask";
    return https.post(uri, { taskName: taskName });
  },
  deleteTask: (taskName) => {
    let uri = `/api/ToDoList/deleteTask?taskName=${taskName}`;
    return https.delete(uri);
  },
  doneTask: (taskName) => {
    let uri = `/api/ToDoList/doneTask?taskName=${taskName}`;
    return https.put(uri);
  },
  rejectTask: (taskName) => {
    let uri = `/api/ToDoList/rejectTask?taskName=${taskName}`;
    return https.put(uri);
  },
};

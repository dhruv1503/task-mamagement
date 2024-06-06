import { combineReducers, legacy_createStore as createStore } from "redux";
import data from "../data/data.json";
import users from "../data/users.json";
import { v4 as uuid } from "uuid";
import { SHA256 } from "crypto-js";
import { usersDatabaseReducer } from "./userDatabaseReducer";
import { loggedInReducer } from "./loggedInUserReducer";
// import * as jwt from "jwt-simple";
// import { Buffer } from "buffer";

// Ensure Buffer is available globally
// if (typeof global !== "undefined") {
//   global.Buffer = Buffer;
// } else if (typeof window !== "undefined") {
//   window.Buffer = Buffer;
// }

const ADD_TASK = "ADD_TASK";
const DELETE_TASK = "DELETE_TASK";
const EDIT_TASK = "EDIT_TASK";
const ADD_CATEGORY = "EDIT_CATEGORY";
const ADD_USER = "ADD_USER";

const devToolEnahncer =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();




const projectReducer = (state = data.projects, action: any) => {
  if (action.type === ADD_TASK) {
    const projectIndexToBeEdited = state.findIndex(
      (project) => project.name === action.task.project
    );
    const projectToEdited = state[projectIndexToBeEdited];
    const updatedProject = {
      ...projectToEdited,
      tasks: [...projectToEdited.tasks, { id: uuid(), ...action.task }],
    };
    const newState = [
      ...state.slice(0, projectIndexToBeEdited),
      updatedProject,
      ...state.slice(projectIndexToBeEdited + 1),
    ];
    return newState;
  }
  return state;
};

const userReducer = (state = data.user) => state;


const combinedReducers = combineReducers({
  user: userReducer,
  projects: projectReducer,
  usersDatabase: usersDatabaseReducer,
  loggedInUser: loggedInReducer,
});

export const store = createStore(combinedReducers, devToolEnahncer);

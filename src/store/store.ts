import { combineReducers, legacy_createStore as createStore } from "redux";
import data from "../data/data.json";
import users from "../data/users.json";
import { v4 as uuid } from "uuid";
import { SHA256 } from "crypto-js";
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

const getUsers = () => {
  const storedUsers = localStorage.getItem("USERS");
  if (!storedUsers) {
    localStorage.setItem("USERS", JSON.stringify(users));
    return users;
  }
  try {
    const parsedUsers = JSON.parse(storedUsers);
    return parsedUsers;
  } catch (error) {
    console.error("Failed to parse users from localStorage", error);
    return users;
  }
};

const getLoggedInUser = () => {
  const loggedInUser = localStorage.getItem("LOGGED_IN_USER");
  if (!loggedInUser) {
    return "";
  }
  return loggedInUser;
};

const intialUsersDbData = getUsers();
const loggedInUser = getLoggedInUser();

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

const usersDatabaseReducer = (state = intialUsersDbData, action: any) => {
  switch (action.type) {
    case ADD_USER: {
      const newUser = {
        id: uuid(),
        userDetails: {
          firstName: action.payload.firstName,
          lastName: action.payload.lastName,
          password: SHA256(action.payload.password).toString(),
          emailId: action.payload.email,
          countryCode: "91",
          isCompany: false,
          companyName: "",
        },
        securityQuestions: [],
        projects: [],
      };

      localStorage.setItem("USERS", JSON.stringify([...state, newUser]));

      return [...state, newUser];
    }
    default:
      return state;
  }
};

// const createLoginJwt = (userId: string) => {
//   return jwt.encode({ userId }, "secret");
// };

const loggedInReducer = (state = loggedInUser, action: any) => {
  switch (action.type) {
    case "LOGIN_USER": {
      const token = action.payload
      localStorage.setItem("LOGGED_IN_USER", token);
      return token;
    }
    case "LOGOUT_USER": {
      localStorage.setItem("LOGGED_IN_USER", "");
      return null;
    }
    default:
      return state;
  }
};

const combinedReducers = combineReducers({
  user: userReducer,
  projects: projectReducer,
  usersDatabase: usersDatabaseReducer,
  loggedInUser: loggedInReducer,
});

export const store = createStore(combinedReducers, devToolEnahncer);

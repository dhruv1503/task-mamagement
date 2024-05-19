import { combineReducers, legacy_createStore as createStore } from "redux";
import data from "../data/data.json"
import {v4 as uuid} from "uuid"



const ADD_TASK = "ADD_TASK";
const DELETE_TASK = "DELETE_TASK";
const EDIT_TASK = "EDIT_TASK";
const ADD_CATEGORY = "EDIT_CATEGORY";


const devToolEnahncer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const projectReducer = (state = data.projects, action : any) => {
    if(action.type === ADD_TASK){
        console.log(action)
     const projectIndexToBeEdited = state.findIndex((project) => (project.name === action.task.project));
     console.log(state)
     console.log(projectIndexToBeEdited)
     const projectToEdited = state[projectIndexToBeEdited]; 
     console.log(projectToEdited)
     const updatedProject = {
        ...projectToEdited,
        tasks: [...projectToEdited.tasks, { id: uuid(), ...action.task }]
    };
    const newState = [
        ...state.slice(0, projectIndexToBeEdited),
        updatedProject,
        ...state.slice(projectIndexToBeEdited + 1)
    ];
     return newState
     
    }
    return state
};
const userReducer = (state = data.user) => (state);

const combinedReducers = combineReducers({user : userReducer, projects : projectReducer})

export const store = createStore(combinedReducers, devToolEnahncer)
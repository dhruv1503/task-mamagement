import { ALL_USERS } from "../server/constants";
import {
  getItemsFromLocalStorage,
} from "../server/helpers/localstorage";


const getUsers = () => {
  return new Promise((resolve, reject) => {
    const users = getItemsFromLocalStorage(ALL_USERS);
    if (!users) {
      reject("No users found.");
    } else {
      resolve(users);
    }
  });
};

const getUsersById = (id: string) => {
  return new Promise((resolve, reject) => {
    const users = getItemsFromLocalStorage(ALL_USERS);
    const userById = users.find((user: any) => user.id === id);
    if (userById) {
      resolve(userById);
    } else {
      reject("No matching user not found.");
    }
  });
};

const getUserByByEmailId = (emailId: string) => {
  return new Promise((resolve, reject) => {
    const users = getItemsFromLocalStorage(ALL_USERS);
    const userById = users.find((user: any) => user.emailId === emailId);
    if (userById) {
      resolve(userById);
    } else {
      reject(userById);
    }
  });
};


export default {getUsers, getUsersById, getUserByByEmailId}

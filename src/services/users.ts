import { ALL_USERS } from "../server/constants";
import {
  getItemsFromLocalStorage,
  setObjectIntoLocalStorage,
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

const getUserById = (id: string) => {
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

const updateUser = (userId: string, updateUserDetails: object) => {
  return new Promise((resolve, reject) => {
    try {
      let allUsers = getItemsFromLocalStorage(ALL_USERS);
      const userToBeEdited = getUserById(userId);
      if (userToBeEdited) {
        const newUserDetails = { ...userToBeEdited, ...updateUserDetails };
        const indexToBeEdited = allUsers.findIndex(
          (user: any) => user.id === userId
        );
        if (indexToBeEdited === -1) {
          reject({ message: "Requested User not found" });
        } else {
          allUsers[indexToBeEdited] = newUserDetails;
          setObjectIntoLocalStorage(ALL_USERS, allUsers);
          resolve({ data: newUserDetails, message: "User details updated" });
        }
      } else {
        reject({ message: "Requested User not found" });
      }
    } catch (error) {}
  });
};

export default { getUsers, getUserById, getUserByByEmailId, updateUser };

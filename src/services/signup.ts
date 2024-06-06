import { ALL_USERS } from "../server/constants";
import { v4 as uuid } from "uuid";
import { getItemsFromLocalStorage, setObjectIntoLocalStorage } from "../server/helpers/localstorage";

const signup = (user: any) => {
    return new Promise(async (resolve, reject) => {
      const users: Array<any> | undefined | null =
        getItemsFromLocalStorage(ALL_USERS);
      if (users) {
        const userById = users.find(
          (existingUser: any) => existingUser.emailId === user.emailId
        );
        if (userById) {
          reject("Email id alredy registered.");
        } else {
          const id = uuid();
          users.push({ ...user, id });
          setObjectIntoLocalStorage(ALL_USERS, users);
          resolve("Registration is successful.");
        }
      } else {
        const id = uuid();
        const newUser: Array<any> = [{ ...user, id }];
        setObjectIntoLocalStorage(ALL_USERS, newUser);
        reject("Registration is successful.");
      }
    });
  };

  export {signup}
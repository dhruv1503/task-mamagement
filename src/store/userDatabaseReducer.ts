import users from "../data/users.json";
import { v4 as uuid } from "uuid";
import { SHA256 } from "crypto-js";


const ADD_USER = "ADD_USER";



  
  
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


  const intialUsersDbData = getUsers();

  export const usersDatabaseReducer = (state = intialUsersDbData, action: any) => {
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
          projects: [
            {
              id: 1,
              name: "Unassigned",
              count: 1,
              tasks: [
                {
                  id: 1,
                  title: "First Task",
                  description: "Your first Task description",
                  priority: "",
                  beginDate: "",
                  endDate: "",
                  status: "todo",
                  project: "Unassigned",
                },
              ],
            },
          ],
        };
  
        localStorage.setItem("USERS", JSON.stringify([...state, newUser]));
  
        return [...state, newUser];
      }
      default:
        return state;
    }
  };
import { ALL_USERS } from "../server/constants";
import { getItemsFromLocalStorage } from "../server/helpers/localstorage";

const login = (loginCredentials : {email : string, password : string}) => {
    return new Promise((resolve, reject) => {
        const users: Array<any> | undefined | null =
        getItemsFromLocalStorage(ALL_USERS);

        if(!users){
           return  reject("No users exist");
        }
         const userById = users.find((user: any) => user.emailId === loginCredentials.email);
         if(!userById){
            return reject({message: "User with email id not found"})
         }

         if(userById.password !== loginCredentials.password){
            return reject({message: "Wrong password entered"})
         }

         return resolve({id : userById.id, message : "User account found successfully"})

        
        
    })

}
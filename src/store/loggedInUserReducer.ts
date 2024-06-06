const getLoggedInUser = () => {
    const loggedInUser = localStorage.getItem("LOGGED_IN_USER");
    if (!loggedInUser) {
      return "";
    }
    return loggedInUser;
  };
  
  // const intialUsersDbData = getUsers();
  const loggedInUser = getLoggedInUser();

  
export const loggedInReducer = (state = loggedInUser, action: any) => {
    switch (action.type) {
      case "LOGIN_USER": {
        const token = action.payload;
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
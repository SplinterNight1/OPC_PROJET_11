export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAILED = "USER_LOGIN_FAILED";
export const USER_LOGOUT = "USER_LOGOUT";
export const USER_LOGIN_ERROR = "USER_LOGIN_ERROR";
export const SET_USER_PROFILE = "SET_USER_PROFILE";

// Action to manage the success user login
export const userLoginSuccess = (userData) => ({
  type: USER_LOGIN_SUCCESS,
  payload: userData,
});

// Action to manage the user login failed
export const userLoginFailed = (error) => ({
  type: USER_LOGIN_FAILED,
  payload: error,
});

// Action to manage user disconnection
export const userLogout = () => {
  // Clear token from client browser sessionStorage
  sessionStorage.removeItem("session_token");
  return {
    type: USER_LOGOUT,
  };
};

// Action to manage the user connection
export const userLogin = (email, password, navigate) => {
  return async (dispatch) => {
    try {
      const userData = { email, password };
      const response = await fetch("http://localhost:3001/api/v1/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (response.status === 200) {
        // If login successful, store token and navigate to profile

        const token = data.body.token;
        sessionStorage.setItem("session_token", token);
        navigate("/profile");
        dispatch(userLoginSuccess(userData));
        dispatch(getUserProfile());
      } else if (response.status === 400 || response.status === 401) {
        // If login failed, dispatch failed action

        sessionStorage.removeItem("session_token");
        dispatch(
          userLoginFailed("Invalide Email or Password. Please Try again")
        );
      }
    } catch (error) {
      // If error occurs, dispatch failed action

      dispatch(userLoginFailed("Invalid Email or Password. Please retry"));
    }
  };
};

// get the user profile with infos
export const getUserProfile = () => {
  return async (dispatch) => {
    try {
      const token = sessionStorage.getItem("session_token");

      // Return if token not available
      if (!token) {
        return;
      }

      // Fetch user profile data
      const response = await fetch(
        "http://localhost:3001/api/v1/user/profile",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        // Dispatch actions with data fetched
        dispatch({ type: "USER_LOGIN_SUCCESS", payload: data.body });
      } else {
        // Manage if response is not ok
        console.error(
          "Server response not OK:",
          response.status,
          response.statusText
        );
        // Dispatch actions to process errors
        dispatch({ type: "USER_LOGIN_FAILED", payload: response.statusText });
      }
    } catch (error) {
      // If error occurs, dispatch error action
      console.error("An error occurred while fetching user profile:", error);
      dispatch({ type: "USER_LOGIN_ERROR", payload: error.message });
    }
  };
};

// Async action creator to edit user name
export const editUserName = (newUserName) => {
  return async (dispatch) => {
    try {
      const token = sessionStorage.getItem("session_token");

      // Return if token not available
      if (!token) {
        return;
      }

      // Attempt to edit user name
      const response = await fetch(
        "http://localhost:3001/api/v1/user/profile",
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userName: newUserName }),
        }
      );

      if (response.ok) {
        // If edit successful, dispatch success action
        const data = await response.json();
        dispatch({ type: "USER_LOGIN_SUCCESS", payload: data.body });
      } else {
        // If edit fails, dispatch failed action
        // console.error(
        //   "Server response invalid:",
        //   response.status,
        //   response.statusText
        // );
        // Dispatch actions to process errors
        dispatch({ type: "SET_USER_PROFILE", payload: response.statusText });
      }
    } catch (error) {
      // If error occurs, dispatch error action
      // console.error("An error occurred while fetching user profile:", error);
      dispatch({ type: "USER_LOGIN_ERROR", payload: error.message });
    }
  };
};

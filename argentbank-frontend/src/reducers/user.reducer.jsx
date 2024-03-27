import {
  USER_LOGIN_ERROR,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILED,
  USER_LOGOUT,
  SET_USER_PROFILE,
} from "../actions/user.action";

// Initial State declaration
const initialState = {
  userProfile: {}, // Initial user profile is an empty object
  error: null, // Initial error state is null
};

// Reducer function to manage user-related state changes
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_SUCCESS:
      // When user login is successful, update user profile and clear error
      return {
        ...state,
        userProfile: action.payload,
        error: null,
      };
    case USER_LOGIN_FAILED:
      // When user login fails, clear user profile by assigning an empty string and set error message
      return {
        ...state,
        userProfile: "",
        error: action.payload,
      };
    case USER_LOGOUT:
      // Same here when user logs out, clear user profile
      return {
        ...state,
        userProfile: "",
      };
    case USER_LOGIN_ERROR:
      // When there's an error during user login, clear user profile
      return {
        ...state,
        userProfile: "",
      };
    case SET_USER_PROFILE:
      // When user profile is set, update user profile data
      return {
        ...state,
        userProfile: action.payload,
      };
    default:
      return state; // Return current state for unhandled actions
  }
};

export default userReducer;

export const registerUserReducer = (state = {}, action) => {
  switch (action.type) {
    case "REGISTER_USER_PENDING":
    case "LOAD_USER_PENIDNG":
      return {
        ...state,
        loading: true,
        success: false,
      };
    case "REGISTER_USER_FULFILLED":
      return {
        ...state,
        loading: false,
        isloggedin: true,
        success: action.payload,
      };
    case "RESET_SUCCESS":
      return {
        ...state,
        success: null,
      }
    case "LOAD_USER_FULFILLED":
      return {
        ...state,
        loading: false,
        user: action.payload,
        success: true,
      };
    case "REGISTER_USER_REJECTED":
    case "LOAD_USER_REJECTED":
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload
      }

    default:
      return state;
  }
}
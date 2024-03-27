// reducers/userReducer.js
const initialState = {
  users: [], // Store signed-up users
  currentUser: null, // Store currently signed-in user
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SIGN_UP':
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case 'SIGN_IN':
      return {
        ...state,
        currentUser: action.payload,
      };
    // Add more cases as needed
    default:
      return state;
  }
};

export default userReducer;

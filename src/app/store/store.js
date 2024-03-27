// store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/userReducer';

const store = configureStore({
  reducer: {
    user: userReducer,
    // Add more reducers if needed
  },
});

export default store;

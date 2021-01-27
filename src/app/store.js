import { configureStore } from '@reduxjs/toolkit';
import mailReducer from '../features/mailReducer/mailReducer';

export default configureStore({
  reducer: {
    counter: mailReducer,
  },
});

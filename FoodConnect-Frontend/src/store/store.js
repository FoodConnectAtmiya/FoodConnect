import {configureStore} from '@reduxjs/toolkit';
import mainReducer from '../ReduxAPIs/mainSlice';
export default configureStore({
    reducer: {
        main: mainReducer,
    }
})
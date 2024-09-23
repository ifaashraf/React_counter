import { configureStore } from "@reduxjs/toolkit";
import countSlice from "./countSlice";

const store=configureStore({
    reducer:{
        counterReducer:countSlice
    }

})

export default store
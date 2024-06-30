const { configureStore } = require("@reduxjs/toolkit");
import counterReducer from "./counterSlice"

const store = configureStore({
    reducer:{
        counter:counterReducer,
    },
})
 export default store;
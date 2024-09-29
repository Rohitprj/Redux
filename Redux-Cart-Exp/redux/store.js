import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import devToolsEnhancer from "redux-devtools-expo-dev-plugin";
import createSagaMiddleware from "redux-saga";
// import sagaApi from "./saga/sagaApi";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare({ thunk: false }).concat(sagaMiddleware),
  devTools: false,
  enhancers: (getDefaultEnhancers) =>
    getDefaultEnhancers().concat(devToolsEnhancer()),
});
sagaMiddleware.run(rootSaga);

import {
  FETCH_FAILURE,
  FETCH_REQUEST,
  FETCH_SUCCESS,
} from "../action/actionApi";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

export const reducerApi = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_SUCCESS:
      return { ...state, loading: false, data: action.paylod };
    case FETCH_FAILURE:
      return { ...state, loading: false, data: action.paylod };
    default:
      return state;
  }
};

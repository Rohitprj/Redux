export const FETCH_REQUEST = "FETCH_REQUEST";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";

export const fetchRequest = () => ({ type: FETCH_REQUEST });
export const fetchSuccess = (data) => ({ type: FETCH_SUCCESS, paylod: data });
export const fetchFailure = (error) => ({ type: FETCH_FAILURE, paylod: error });

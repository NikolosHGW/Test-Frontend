import { GET_USER_LOADING, GET_USER, GET_USER_ERROR } from '../constants/constants';

const initialUserState = {
  user: [],
  isLoading: true,
  error: null,
}

export default function recordsReducer(state = initialUserState, action) {
    switch(action.type) {
      case GET_USER_LOADING:
        return {...state, user: [],  isLoading: true, error: null };
      case GET_USER:
        return {...state, user: [...action.payload], isLoading: false, error: null};
      case GET_USER_ERROR:
        return {...state, user: [],  isLoading: false, error: action.payload };
      default:
        return state;
    }
}

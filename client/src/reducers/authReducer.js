import * as actionType from '../constants/actionTypes';

const authReducer = (action, state = { authData: null }) => {
  switch (action.type) {

    case actionType.AUTH:
      localStorage.setItem('profile', JSON.stringify({ ...action?.data }));
      return { ...state, authData: action.data, loading: false, errors: null };

    case actionType.LOGOUT:
      localStorage.clear();
      return { ...state, authData: null, loading: false, errors: null };
      
    default:
      return state;
  }
};

export default authReducer;
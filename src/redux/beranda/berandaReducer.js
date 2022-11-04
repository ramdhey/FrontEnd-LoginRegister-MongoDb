import {USER_BERANDA,SET_LOADING} from '../ActionType'

const initialState = {
  user: null,
  isLoading: false,
};

const userBerandaReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_BERANDA:
      return {
        ...state,
        user: action.payload.user,
        isLoading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    default:
      return state;
  }
};

export default userBerandaReducer;
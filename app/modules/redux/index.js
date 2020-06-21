import {string} from '../../services/utils/strings';

let authInitialState = {
  isSigned: false,
};

export const authReducer = (state = authInitialState, action) => {
  switch (action.type) {
    case string.SIGNED:
      return {
        ...state,
        isSigned: true,
      };
  }
};

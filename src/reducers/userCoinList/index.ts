/* User add, remove coin state */
import { ActionTypes, Actions } from '@actions/types';
import { UserCoinListState } from './interface';

const initialState: UserCoinListState = {
  userCoins: [],
};

export default (
  state: UserCoinListState = initialState,
  action: Actions,
): UserCoinListState => {
  switch (action.type) {
    case ActionTypes.ADD_COIN:
      if (state.userCoins.find(coinItem => action.payload === coinItem)) {
        return state;
      } // Detect existing coin
      return {
        ...state,
        userCoins: [...state.userCoins, action.payload],
      };
    case ActionTypes.REMOVE_COIN:
      return {
        ...state,
        userCoins: state.userCoins.filter(
          coin => !coin.includes(action.payload),
        ),
      };
    default:
      return state;
  }
};

export * from './interface';

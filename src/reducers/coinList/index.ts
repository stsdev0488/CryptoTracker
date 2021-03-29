/* Fetched coin data from CoinGecko */
import { ActionTypes, Actions } from '@actions/types';
import { CoinListState } from './interface';
import { Status } from '../enum';

const initialState: CoinListState = {
  status: Status.INIT,
  coins: [],
  error: null,
};

export default (
  state: CoinListState = initialState,
  action: Actions,
): CoinListState => {
  switch (action.type) {
    case ActionTypes.GET_COIN_LIST_REQUEST:
      return {
        ...state,
        status: Status.LOADING,
        coins: [],
        error: null,
      };
    case ActionTypes.GET_COIN_LIST_SUCCESS:
      return {
        ...state,
        status: Status.LOADED,
        coins: action.payload,
        error: null,
      };
    case ActionTypes.GET_COIN_LIST_ERROR:
      return {
        ...state,
        status: Status.ERROR,
        coins: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export * from './interface';

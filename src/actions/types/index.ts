import * as CoinListActions from '../coinListActions';
import * as UserCoinActions from '../userCoinActions';

export enum ActionTypes {
  GET_COIN_LIST_REQUEST = 'GET_COIN_LIST_REQUEST',
  GET_COIN_LIST_SUCCESS = 'GET_COIN_LIST_SUCCESS',
  GET_COIN_LIST_ERROR = 'GET_COIN_LIST_ERROR',
  ADD_COIN = 'ADD_COIN',
  REMOVE_COIN = 'REMOVE_COIN',
}

export type Actions =
  | CoinListActions.GetCoinListRequest
  | CoinListActions.GetCoinListSuccess
  | CoinListActions.GetCoinListError
  | UserCoinActions.AddCoin
  | UserCoinActions.RemoveCoin;

import { ActionTypes } from '../types';

export interface AddCoin {
  type: ActionTypes.ADD_COIN;
  payload: string;
}

export interface RemoveCoin {
  type: ActionTypes.REMOVE_COIN;
  payload: string;
}

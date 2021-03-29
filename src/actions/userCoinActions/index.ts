/* Manage add, remove coin action */
import { ActionTypes } from '../types';
import { AddCoin, RemoveCoin } from './interface';

export const addCoin = (payload: string): AddCoin => {
  return {
    type: ActionTypes.ADD_COIN,
    payload,
  };
};

export const removeCoin = (payload: string): RemoveCoin => {
  return {
    type: ActionTypes.REMOVE_COIN,
    payload,
  };
};

export * from './interface';

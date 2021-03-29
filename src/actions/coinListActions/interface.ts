import { ActionTypes } from '../types';
import { ICoinItem } from '@models';

export interface GetCoinListRequest {
  type: ActionTypes.GET_COIN_LIST_REQUEST;
}

export interface GetCoinListSuccess {
  type: ActionTypes.GET_COIN_LIST_SUCCESS;
  payload: ICoinItem[];
}

export interface GetCoinListError {
  type: ActionTypes.GET_COIN_LIST_ERROR;
  payload: string;
}

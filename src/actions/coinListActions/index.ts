/* Fetch coin data from CoinGecko RESTFul Apis */

import { Dispatch } from 'redux';
import { ActionTypes } from '../types';
import {
  GetCoinListRequest,
  GetCoinListSuccess,
  GetCoinListError,
} from './interface';
import { AxiosInstance } from '@apis';
import { ICoinItem } from '@models';
import { AppThunk } from '@reducers';

export const getCoinListRequest = (): GetCoinListRequest => {
  return {
    type: ActionTypes.GET_COIN_LIST_REQUEST,
  };
};

export const getCoinListSuccess = (
  payload: ICoinItem[],
): GetCoinListSuccess => {
  return {
    type: ActionTypes.GET_COIN_LIST_SUCCESS,
    payload,
  };
};

export const getCoinListError = (payload: string): GetCoinListError => {
  return {
    type: ActionTypes.GET_COIN_LIST_ERROR,
    payload,
  };
};

/* thunk action */
export const getCoinList = (): AppThunk => async (dispatch: Dispatch) => {
  dispatch<GetCoinListRequest>(getCoinListRequest());
  try {
    const { data } = await AxiosInstance.get<ICoinItem[]>(
      '/coins/markets?vs_currency=usd',
    );
    dispatch<GetCoinListSuccess>(getCoinListSuccess(data));
  } catch (e) {
    dispatch<GetCoinListError>(getCoinListError(e));
  }
};

export * from './interface';

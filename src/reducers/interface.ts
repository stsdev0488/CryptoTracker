import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { PersistPartial } from 'redux-persist/es/persistReducer';
import { CoinListState } from './coinList';
import { UserCoinListState } from './userCoinList';

export interface RootState {
  coinList: CoinListState;
  userCoinList: UserCoinListState & PersistPartial;
}

export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;

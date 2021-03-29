import AsyncStorage from '@react-native-community/async-storage';
import { persistReducer } from 'redux-persist';
import { combineReducers } from 'redux';
import { RootState } from './interface';
import coinListReducer from './coinList';
import userCoinListReducer from './userCoinList';

const persistConfig = {
  key: 'userCoinList',
  storage: AsyncStorage,
};

export default combineReducers<RootState>({
  coinList: coinListReducer,
  userCoinList: persistReducer(persistConfig, userCoinListReducer),
});

export * from './interface';

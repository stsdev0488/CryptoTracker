import { Status } from '../enum';
import { ICoinItem } from '@models';

export type CoinListState = {
  status: Status;
  coins: ICoinItem[];
  error: string | null;
};

import {Priority} from './priority';
import {Category} from './category';
import { Mexanisms} from './mechanisms';
import {UserSt} from './user-st';

export interface jourInterface {

  title: string;
  hour: number;
  date: Date;
  category: Category;
  mexanism: Mexanisms;
  profile: UserSt;
  id?: number;
}
export interface createJournal {
  title: string;
  hour: number;
  date: Date;
  category?: Category;
 mexanism?: Mexanisms;
  profile?: UserSt;
  id?: number;
}

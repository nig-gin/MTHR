import {Priority} from './priority';
import {Category} from './category';
import {Mechanisms} from './mechanisms';
import {UserSt} from './user-st';

export interface jourInterface {

  title: string;
  hour: number;
  date: Date;
  category: Category;
  mexanism: Mechanisms;
  user: UserSt;
  id?: number;
}

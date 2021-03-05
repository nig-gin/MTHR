import {Priority} from './priority';
import {Category} from './category';
import {Mechanisms} from './mechanisms';

export interface jourInterface {
  mexanism: string;
  hour: string;
  id: number;
  title: string;
  date: Date;
  category: Category;
  user: string;

}

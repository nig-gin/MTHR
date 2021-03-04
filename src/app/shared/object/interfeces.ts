import {Priority} from './priority';
import {Category} from './category';
import {Mechanisms} from './mechanisms';

export interface jourInterface {
  id: number;
  title: string;
  hour: string;
  date: Date;
  category: Category;
  mexanism: string;
  user: string;

}

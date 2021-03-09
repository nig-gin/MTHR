import {Priority} from './priority';
import {Category} from './category';
import {Mechanisms} from './mechanisms';

export interface jourInterface {

  title: string;
  hour: string;
  date: Date;
  category: Category;

  mexanism: string;
  user?: string;
  id?: number;
}

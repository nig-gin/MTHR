import {Priority} from './priority';
import {Category} from './category';

export interface jourInterface {

  category?: Category;
  priority?: Priority;



  completed: boolean;
  date: Date;
  id: string;
  title: string;


}

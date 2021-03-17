import {Material} from './material';
import {Category} from './category';

export interface Mexanisms {
  id: number;
  hour?: number;
  title?: string;
  category?: Category;
}

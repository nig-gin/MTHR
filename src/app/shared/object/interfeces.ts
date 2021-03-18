import {Priority} from './priority';
import {Category} from './category';
import { Mexanisms} from './mechanisms';
import {UserSt} from './user-st';

// tslint:disable-next-line:class-name
export interface jourInterface {
  content: cont;
}


// tslint:disable-next-line:class-name
export interface cont {
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
export interface reglamW {
  pageSize: number;
  pageNumber: number;
  sortColumn: string;
  sortDirection: string;
}

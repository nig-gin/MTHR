import {Material} from './material';

export interface Mechanisms {
  id: number;
  motohours: number;
  motohoursSet: number;
  reglamengWork: string;
  date: Date;
  executor: string;
  material: Material;
};

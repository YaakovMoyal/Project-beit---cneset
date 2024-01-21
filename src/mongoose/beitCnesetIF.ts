import { UserIF } from './userIF';

export interface TfilaIF {
  tfila: string;
  time: string;
}

export interface BeitCnesetIF {
  name: string;
  address: string;
  community: string;
  image: string;
  gabai: UserIF;
  tfilot: TfilaIF[];
}

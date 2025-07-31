import type { City } from './City.ts';
import type { Street } from './Street.ts';
import type { ZipCode } from './ZipCode.ts';

export type Adress = {
  street: Street;
  city: City;
  zipCode: ZipCode;
};

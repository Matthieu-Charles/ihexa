import type { Amount } from './Amount';
import type { LineLabel } from './LineLabel';
import type { Quantity } from './Quantity';

export type Line = {
  label: LineLabel;
  quantity: Quantity;
  unitPrice: Amount;
};

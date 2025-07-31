import type { Amount } from './Amount.ts';
import type { LineLabel } from './LineLabel.ts';
import type { Quantity } from './Quantity.ts';

export type Line = {
  label: LineLabel;
  quantity: Quantity;
  unitPrice: Amount;
};

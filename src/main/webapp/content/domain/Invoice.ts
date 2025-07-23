import type { Amount } from './Amount.ts';
import type { InvoiceId } from './InvoiceId.ts';
import type { Line } from './Line.ts';
import type { Recipient } from './Recipient';

export type Invoice = {
  id: InvoiceId;
  recipient: Recipient;
  lines: Line[];
  total: Amount;
};

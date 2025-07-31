//TODO: errors management
//TODO: handle loading state
//TODO: invoice adapter

import { dataSelector } from '../utils/DataSelector';

describe('Invoice', () =>
  it('should display invoice', () => {
    cy.visit('/invoices/0fd0a9fa-c438-4147-b952-006048fafbc9');
    cy.get(dataSelector('invoice-loader')).should('be.visible');
  }));

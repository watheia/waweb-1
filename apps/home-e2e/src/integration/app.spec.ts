import { getFooterCopyright } from '../support/app.po';

describe('home', () => {
  beforeEach(() => cy.visit('/'));

  it('should display copyright', () => {
    // Custom command example, see `../support/commands.ts` file
    // cy.login('my-email@something.com', 'myPassword');

    // Function helper example, see `../support/app.po.ts` file
    getFooterCopyright().contains('Watheia Labs, LLC');
  });
});

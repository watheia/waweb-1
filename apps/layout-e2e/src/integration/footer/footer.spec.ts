import { getFooter } from '../../support/app.po';

describe('waweb.layout/footer', () => {
  beforeEach(() => cy.visit('/iframe.html?id=waweb-layout-footer--primary'));

  it('should render the component', () => {
    getFooter().should('contain', 'Watheia Labs, LLC');
  });
});

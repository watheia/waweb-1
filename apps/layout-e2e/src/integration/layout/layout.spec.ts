import { getTitle } from '../../support/app.po';

describe('waweb.layout', () => {
  beforeEach(() => cy.visit('/iframe.html?id=waweb-layout--defaults'));

  it('should render the component', () => {
    getTitle().should('contain', 'IntroducingJavaScript for Beginners');
  });
});

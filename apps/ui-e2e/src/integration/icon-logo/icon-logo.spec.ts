describe('ui: IconLogo component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=iconlogo--primary'));

  it('should render the component', () => {
    cy.get('h1').should('contain', 'Welcome to IconLogo!');
  });
});

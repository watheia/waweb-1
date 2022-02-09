describe('ui: GatekeeperPage component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=gatekeeperpage--primary'));

  it('should render the component', () => {
    cy.get('h1').should('contain', 'Welcome to GatekeeperPage!');
  });
});

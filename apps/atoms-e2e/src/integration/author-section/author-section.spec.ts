describe('ui: AuthorSection component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=authorsection--primary'));

  it('should render the component', () => {
    cy.get('h1').should('contain', 'Welcome to AuthorSection!');
  });
});

describe('ui: Overlay component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=overlay--primary'));

  it('should render the component', () => {
    cy.get('h1').should('contain', 'Welcome to Overlay!');
  });
});

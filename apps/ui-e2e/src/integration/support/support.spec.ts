describe('ui: Support component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=support--primary'));

  it('should render the component', () => {
    cy.get('h1').should('contain', 'Welcome to Support!');
  });
});

describe('ui: IconLinkedin component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=iconlinkedin--primary'));

  it('should render the component', () => {
    cy.get('h1').should('contain', 'Welcome to IconLinkedin!');
  });
});

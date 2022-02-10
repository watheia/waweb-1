describe('icons: IconGithub component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=icongithub--primary'));

  it('should render the component', () => {
    cy.get('h1').should('contain', 'Welcome to IconGithub!');
  });
});

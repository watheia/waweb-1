describe('icons: IconCopy component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=iconcopy--primary'));

  it('should render the component', () => {
    cy.get('h1').should('contain', 'Welcome to IconCopy!');
  });
});

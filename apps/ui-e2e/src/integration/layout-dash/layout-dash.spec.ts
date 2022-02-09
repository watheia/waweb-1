describe('ui: LayoutDash component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=layoutdash--primary'));

  it('should render the component', () => {
    cy.get('h1').should('contain', 'Welcome to LayoutDash!');
  });
});

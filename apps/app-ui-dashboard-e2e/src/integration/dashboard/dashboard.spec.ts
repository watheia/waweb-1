describe('app-ui-dashboard: Dashboard component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=dashboard--primary'));

  it('should render the component', () => {
    cy.get('h1').should('contain', 'Dashboard');
  });
});

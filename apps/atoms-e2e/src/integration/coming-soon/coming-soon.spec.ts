describe('ui: ComingSoon component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=comingsoon--primary'));

  it('should render the component', () => {
    cy.get('h1').should('contain', 'Welcome to ComingSoon!');
  });
});

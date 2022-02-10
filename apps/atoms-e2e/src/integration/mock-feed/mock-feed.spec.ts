describe('ui: MockFeed component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=mockfeed--primary'));

  it('should render the component', () => {
    cy.get('h1').should('contain', 'Welcome to MockFeed!');
  });
});

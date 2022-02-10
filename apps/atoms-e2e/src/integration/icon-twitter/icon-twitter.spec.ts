describe('ui: IconTwitter component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=icontwitter--primary'));

  it('should render the component', () => {
    cy.get('h1').should('contain', 'Welcome to IconTwitter!');
  });
});

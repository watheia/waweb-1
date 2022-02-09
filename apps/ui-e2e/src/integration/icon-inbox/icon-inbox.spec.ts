describe('ui: IconInbox component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=iconinbox--primary'));

  it('should render the component', () => {
    cy.get('h1').should('contain', 'Welcome to IconInbox!');
  });
});

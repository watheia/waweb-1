describe('ui: StakeholderSection component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=stakeholdersection--primary'));

  it('should render the component', () => {
    cy.get('h1').should('contain', 'Welcome to StakeholderSection!');
  });
});

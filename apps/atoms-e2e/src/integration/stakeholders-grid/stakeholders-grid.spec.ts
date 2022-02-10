describe('ui: StakeholdersGrid component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=stakeholdersgrid--primary'));

  it('should render the component', () => {
    cy.get('h1').should('contain', 'Welcome to StakeholdersGrid!');
  });
});

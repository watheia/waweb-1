describe('ui: AuthorsGrid component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=authorsgrid--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to AuthorsGrid!');
    });
});

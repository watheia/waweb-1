describe('ui: ProjectCard component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=projectcard--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to ProjectCard!');
    });
});
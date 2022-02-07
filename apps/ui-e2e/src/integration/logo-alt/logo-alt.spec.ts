describe('ui: LogoAlt component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=logoalt--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to LogoAlt!');
    });
});

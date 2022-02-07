describe('ui: PlatformLogo component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=platformlogo--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to PlatformLogo!');
    });
});

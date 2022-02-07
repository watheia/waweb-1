describe('ui: LayoutHome component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=layouthome--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to LayoutHome!');
    });
});

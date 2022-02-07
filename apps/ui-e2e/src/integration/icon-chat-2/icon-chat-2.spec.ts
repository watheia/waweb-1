describe('ui: IconChat2 component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=iconchat2--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to IconChat2!');
    });
});

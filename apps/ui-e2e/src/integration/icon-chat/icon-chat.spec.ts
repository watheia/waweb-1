describe('ui: IconChat component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=iconchat--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to IconChat!');
    });
});

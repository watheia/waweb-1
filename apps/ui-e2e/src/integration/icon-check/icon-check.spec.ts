describe('ui: IconCheck component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=iconcheck--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to IconCheck!');
    });
});

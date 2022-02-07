describe('ui: AppEntry component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=appentry--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to AppEntry!');
    });
});

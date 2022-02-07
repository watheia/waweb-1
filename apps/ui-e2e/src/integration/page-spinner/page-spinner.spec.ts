describe('ui: PageSpinner component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=pagespinner--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to PageSpinner!');
    });
});

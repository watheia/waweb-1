describe('ui: ViewSource component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=viewsource--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to ViewSource!');
    });
});

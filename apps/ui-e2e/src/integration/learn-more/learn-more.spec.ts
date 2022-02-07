describe('ui: LearnMore component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=learnmore--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to LearnMore!');
    });
});

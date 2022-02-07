describe('ui: RealtimeChat component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=realtimechat--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to RealtimeChat!');
    });
});

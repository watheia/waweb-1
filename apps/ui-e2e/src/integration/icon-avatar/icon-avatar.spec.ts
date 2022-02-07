describe('ui: IconAvatar component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=iconavatar--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to IconAvatar!');
    });
});

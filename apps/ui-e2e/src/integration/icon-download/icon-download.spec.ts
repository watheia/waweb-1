describe('ui: IconDownload component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=icondownload--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to IconDownload!');
    });
});

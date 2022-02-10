describe('icons: IconBriefcase component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=iconbriefcase--primary'));

  it('should render the component', () => {
    cy.get('h1').should('contain', 'Welcome to IconBriefcase!');
  });
});

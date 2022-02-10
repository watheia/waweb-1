describe('waweb.layout/mobile-menu', () => {
  beforeEach(() =>
    cy.visit(
      '/iframe.html?id=waweb-layout-mobile-menu--primary&args=&viewMode=story'
    )
  );

  it('should render the component', () => {
    cy.get('h1').should('contain', 'Welcome to Overlay!');
  });
});

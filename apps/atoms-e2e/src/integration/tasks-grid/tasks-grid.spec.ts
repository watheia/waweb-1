describe('ui: TasksGrid component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=tasksgrid--primary'));

  it('should render the component', () => {
    cy.get('h1').should('contain', 'Welcome to TasksGrid!');
  });
});

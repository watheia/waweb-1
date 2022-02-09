describe('ui: TimelineItem component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=timelineitem--primary'));

  it('should render the component', () => {
    cy.get('h1').should('contain', 'Welcome to TimelineItem!');
  });
});

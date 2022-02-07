describe('ui: IconCalendar component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=iconcalendar--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to IconCalendar!');
    });
});

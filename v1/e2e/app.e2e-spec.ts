import { TicketsPage } from './app.po';

describe('tickets App', () => {
  let page: TicketsPage;

  beforeEach(() => {
    page = new TicketsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

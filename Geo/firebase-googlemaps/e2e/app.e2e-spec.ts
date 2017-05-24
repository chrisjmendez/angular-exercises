import { BusTrackerPage } from './app.po';

describe('bus-tracker App', () => {
  let page: BusTrackerPage;

  beforeEach(() => {
    page = new BusTrackerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

import { OauthPage } from './app.po';

describe('oauth App', () => {
  let page: OauthPage;

  beforeEach(() => {
    page = new OauthPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

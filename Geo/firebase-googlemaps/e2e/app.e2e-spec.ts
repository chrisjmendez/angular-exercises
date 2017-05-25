import { AngularFireMapsPage } from './app.po';

describe('angularfire-maps', () => {
  let page: AngularFireMapsPage;

  beforeEach(() => {
    page = new AngularFireMapsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

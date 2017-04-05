import { InstaPage } from './app.po';

describe('insta App', () => {
  let page: InstaPage;

  beforeEach(() => {
    page = new InstaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

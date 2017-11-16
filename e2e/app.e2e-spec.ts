import { UrlShortenerPage } from './app.po';

describe('url-shortener App', () => {
  let page: UrlShortenerPage;

  beforeEach(() => {
    page = new UrlShortenerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

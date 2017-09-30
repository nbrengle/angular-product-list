import { AngularProductPage } from './app.po';

describe('angular-product App', () => {
  let page: AngularProductPage;

  beforeEach(() => {
    page = new AngularProductPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

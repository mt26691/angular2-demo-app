import { Angular2DemoApplicationPage } from './app.po';

describe('angular2-demo-application App', function() {
  let page: Angular2DemoApplicationPage;

  beforeEach(() => {
    page = new Angular2DemoApplicationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

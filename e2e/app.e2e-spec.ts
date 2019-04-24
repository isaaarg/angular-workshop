import { DemoAngularPage } from './app.po';

describe('demo-angular App', () => {
  let page: DemoAngularPage;

  beforeEach(() => {
    page = new DemoAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

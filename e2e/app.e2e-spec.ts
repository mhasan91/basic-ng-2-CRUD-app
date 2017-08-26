import { HcrudappPage } from './app.po';

describe('hcrudapp App', () => {
  let page: HcrudappPage;

  beforeEach(() => {
    page = new HcrudappPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

import { AppPage } from './app.po';
import { browser } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it(`should display title 'weather test'`, () => {
    const expectedTitle = 'weather test';

    page.navigateTo();

    browser.getTitle().then((currentTitle) => {
      expect(currentTitle).toEqual(expectedTitle);
    });
  });
});

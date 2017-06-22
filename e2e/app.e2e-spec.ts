import { AngularObservablesPage } from './app.po';

describe('angular-observables App', () => {
  let page: AngularObservablesPage;

  beforeEach(() => {
    page = new AngularObservablesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

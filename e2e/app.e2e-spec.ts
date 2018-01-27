import { AppPage } from './app.po';

<<<<<<< HEAD
describe('fusion App', () => {
=======
describe('con-fusion App', () => {
>>>>>>> origin/master
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});


describe('Page', () => {

    it('should open page', () => {
        browser.reloadSession();
        browser.url('/');
        browser.pause(5000);
    });
    
});
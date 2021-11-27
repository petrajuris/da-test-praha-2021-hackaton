describe('Three foxes Login Page', () => {
    it('should open login page + login', () => {
        browser.reloadSession();
        browser.url('/en/login?back=my-account');
        //email
        const emailField = $('#email');
        expect(emailField).toBeDisplayed();
        expect(emailField).toBeEnabled();
        //password
        const passwordField = $('#passwd');
        expect(passwordField).toBeDisplayed();
        expect(passwordField).toBeEnabled();
        const button = $('#SubmitLogin');
        expect(button.getText()).toEqual('Sign in');
        emailField.setValue('avybenjmincox@gmail.com');
        passwordField.setValue('jsmenejlepsi5');
        button.click();
        browser.pause(5000);
        const userProfileButton = $('#user_info_acc')
        expect(userProfileButton.getText()).toEqual('Ester');
    });
    it('logout', () => {
        browser.reloadSession();
        browser.url('/en/login?back=my-account');
        //email
        const emailField = $('#email');
        expect(emailField).toBeDisplayed();
        expect(emailField).toBeEnabled();
        //password
        const passwordField = $('#passwd');
        expect(passwordField).toBeDisplayed();
        expect(passwordField).toBeEnabled();
        const button = $('#SubmitLogin');
        expect(button.getText()).toEqual('Sign in');
        emailField.setValue('avybenjmincox@gmail.com');
        passwordField.setValue('jsmenejlepsi5');
        button.click();
        browser.pause(5000);
        
        $('#user_info_acc').click();
        browser.pause(2000);
        $('=Logout').click();
        const login = $('.user_login')
        expect(login.getText()).toEqual('Sign in');
    });
   
});
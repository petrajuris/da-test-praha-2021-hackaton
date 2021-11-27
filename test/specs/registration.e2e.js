describe('Three foxes Login Page', () => {
    it.only('should open login page + login', () => {
        browser.reloadSession();
        browser.url('/en/login?back=my-account');
        
        const createEmail = $('#email_create');
        expect(createEmail).toBeDisplayed();
        expect(createEmail).toBeEnabled();

        const x =new Date();
        const mail ='avybenjamincox' + x.now() + '@gmail.com'
        createEmail.setValue(mail);
        const registrationButton = $('#SubmitCreate');
        registrationButton.click();

        browser.pause(3000);

        const name = $('#customer_firstname');
        name.setValue('Petra');
        expect(name).toBeEnabled();
        const lastName = $('#customer_lastname');
        lastName.setValue('Juris');
        expect(lastName).toBeEnabled();
        const password = $('#passwd');
        password.setValue('Heslo123');
        expect(password).toBeEnabled();

        const register = $('#submitAccount');
        register.click();
        browser.pause(3000);
        const userProfileButton = $('#user_info_acc')
        expect(userProfileButton.getText()).toEqual('Petra')


    });
   
   
});
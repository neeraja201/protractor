describe('Protractor form', () => {

    function formValidations() {
        expect(element(by.css("[class='alert alert-danger']")).getText()).toBe("Name is required");
        element(by.name('name')).sendKeys("n").then(function(){
            expect(element(by.css("[class='alert alert-danger']")).getText()).toBe("Name should be at least 2 characters");
        });
        // element(by.name('email')).clear();
        // expect(element(by.css("[class='alert alert-danger']")).getText()).toBe("Email is required");
        // element(by.name('email')).sendKeys(" ").then(function(){
        //     expect(element(by.name("name")).element(by.css("[class='alert alert-danger']")).getText()).toBe("Email is not valid");
        // });
        //expect( element(by.name('email')).element(by.css("[class='alert alert-danger']")).getText()).toBe("Email is required");
    }
    it('Open angular js website forms', () => {
        browser.waitForAngularEnabled(false);
        formValidations();
        browser.get('https://qaclickacademy.github.io/protocommerce');
        element(by.name('name')).sendKeys("Neeraja");
        element(by.css("input[name='email']")).sendKeys("neeraja@gmail.com");
        element(by.id('exampleInputPassword1')).sendKeys("Password");
        element(by.css("input[type='checkbox'")).click();
        element(by.cssContainingText("[id='exampleFormControlSelect1'] option", 'Female')).click();
        element.all(by.name("inlineRadioOptions")).first().click();
        element(by.buttonText('Submit')).click().then(function () {
          
            element(by.css("div[class*='success']")).element(by.tagName('strong')).getText().then((msg) => console.log(msg));
            expect(element(by.css("div[class*='success']")).element(by.tagName('strong')).getText()).toBe("Success!");
        });

    });

});
describe('Protractor alert', () => {
    it('Open non angular js website alerts', () => {
        browser.waitForAngularEnabled(false);
        //browser.driver.manage().window().maximize();
        browser.get('http://qaclickacademy.com/practice.php');
        browser.switchTo().frame('iframe-name');
        element(by.css("a[class='register-btn'")).getText().then(function (text) {
            console.log(text);
        });
    });

});
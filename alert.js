describe('Protractor alert', () => {
    it('Open non angular js website alerts', () => {
        browser.waitForAngularEnabled(false);
        browser.get('http://qaclickacademy.com/practice.php');
        element(by.id('confirmbtn')).click();
        browser.switchTo().alert().dismiss().then(function(){
            browser.sleep(6000);
            console.log("alert dismissed");
        })
    });

});
describe('Protractor Sample Test', () => {
    it('Chain Locators', () => {
        browser.get("http://juliemr.github.io/protractor-demo");

        element(by.model('first')).sendKeys("3");
        element(by.model('second')).sendKeys("5");
        element(by.id('gobutton')).click();

        element(by.repeater('result in memory')).element(by.css("td:nth-child(3)")).getText().then(function (result) {
            console.log(result);
        });
        //expect(element(by.css("h2[class='ng-binding']")).getText()).toBe("8");{}

    });
});
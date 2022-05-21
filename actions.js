describe('Actions demo', () => {
    it('Open Posse website', () => {
        browser.get("http://posse.com/");
        element(by.model('userInputQuery')).sendKeys("river");
        browser.actions().mouseMove(element(by.model('locationQuery')).sendKeys("london")).perform();
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
        browser.actions().sendKeys(protractor.Key.ENTER).perform().then(function () {
            browser.sleep(3000);
            expect(element.all(by.css("div[ng-mouseover*='onSerachResultOver']")).count()).toBe(7);
            element.all(by.css("div[ng-mouseover*='onSerachResultOver']")).get(0).click();
            element(by.css("a[ng-href*='London/River Island']")).click();
        });
    });
});
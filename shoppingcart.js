describe('Protractor shopping cart', () => {
    it('Open angular js website shopping cart', () => {
        browser.waitForAngularEnabled(false);
        browser.get('https://qaclickacademy.github.io/protocommerce');
        element(by.linkText('Shop')).click();
        element.all(by.tagName('app-card')).each(function (item) {
            item.element(by.css('h4[class="card-title"] a')).getText().then(function (text) {
                console.log(text);
                if (text == "Samsung Note 8") {
                    console.log(text);
                    item.element(by.css("button[class=*='btn-info'")).click();
                }
            });
        });
    });

});
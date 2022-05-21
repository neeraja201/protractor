describe('Protractor Sample Test', () => {

    function doOperation(a, b, operator) {
        element(by.model('first')).sendKeys(a);
        element(by.model('second')).sendKeys(b);
        element.all(by.tagName('option')).each(function (item) {
            item.getAttribute("value").then(function (values) {
                //console.log(values);
                if (values == operator) {
                    item.click();
                }
            });
        });
        element(by.id('gobutton')).click();
    }
    it('All', () => {
        browser.get("http://juliemr.github.io/protractor-demo");

        doOperation(2, 3, "ADDITION");
        doOperation(5, 8, "MULTIPLICATION");
        doOperation(49, 7, "DIVISION");
        doOperation(8, 4, "SUBTRACTION");

        element.all(by.repeater('result in memory')).count().then(function (count) {
            console.log(count);
        });

        element.all(by.repeater('result in memory')).each(function (item) {
            item.element(by.css("td:nth-child(3)")).getText().then(function (text) {
                console.log(text);
            })
        });
        //expect(element(by.css("h2[class='ng-binding']")).getText()).toBe("8");{}

    });
});
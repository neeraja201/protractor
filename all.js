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

    var objectDataProvider = {
        'First params': { a: 2, b: 3, result: 5, operator: "ADDITION" },
        'Second params': { a: 5, b: 8, result: 40, operator: "MULTIPLICATION" },
        'Third params': { a: 49, b: 7, result: 7, operator: "DIVISION" },
        'fourth params': { a: 8, b: 4, result: 4, operator: "SUBTRACTION" }
    };
    using(objectDataProvider, function (data, description) {
        it('testing caluclator with operator ' + description, () => {
            browser.get("http://juliemr.github.io/protractor-demo");
            doOperation(data.a, data.b, data.operator);
            expect(element(by.css("h2[class='ng-binding']")).getText()).toBe(data.result);{}
        });
    });

    it('testing count and get result from all rows', () => {
        element.all(by.repeater('result in memory')).count().then(function (count) {
            console.log(count);
        });

        element.all(by.repeater('result in memory')).each(function (item) {
            item.element(by.css("td:nth-child(3)")).getText().then(function (text) {
                console.log(text);
            })
        });
    });
});
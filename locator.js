describe('Protractor Sample Test', () => {
    var using = require('jasmine-data-provider');
    var objectDataProvider = require("./data.js");
    var objectEle = require("./pageObject.js");
    beforeEach(function () {
        objectEle.getUrl();
    });
    using(objectDataProvider.dataDriven, function (data, description) {
        it('testing caluclator functionality - ' + description, () => {

            objectEle.firstInputEle.sendKeys(data.firstInput);
            objectEle.secondInputEle.sendKeys(data.secondInput);
            objectEle.goBtn.click();
            expect(objectEle.resultEle.getText()).toBe(data.result);
            // element(by.css("h2[class='ng-binding']")).getText().then(function (text) {
            //     console.log(text);
            // });
        });
    });

});
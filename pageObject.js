function Caluclator() {
    this.firstInputEle = element(by.model('first'));
    this.secondInputEle = element(by.model('second'));
    this.resultEle = element(by.css("h2[class='ng-binding']"));
    this.goBtn = element(by.id('gobutton'));
    this.getUrl = function () {
        browser.get("http://juliemr.github.io/protractor-demo");
    }
}

module.exports = new Caluclator();
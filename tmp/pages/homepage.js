"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class homepage {
    constructor() {
        this.sign = protractor_1.element(protractor_1.by.css('a[class="login"]'));
        this.email = protractor_1.element(protractor_1.by.css('#email'));
        this.password = protractor_1.element(protractor_1.by.css('#passwd'));
        this.login = protractor_1.element(protractor_1.by.css('#SubmitLogin'));
        this.EC = protractor_1.ExpectedConditions;
    }
    goto(url) {
        protractor_1.browser.get(url);
    }
    browsersync() {
        protractor_1.browser.ignoreSynchronization = true;
    }
    waitforSign() {
        protractor_1.browser.wait(this.EC.elementToBeClickable(this.sign), 10000);
    }
    clicksignin() {
        this.sign.click();
    }
    waitforelement() {
        protractor_1.browser.wait(this.EC.elementToBeClickable(this.email), 10000);
    }
    enteremail(emailid) {
        this.email.sendKeys(emailid);
    }
    enterpassword(pwd) {
        this.password.sendKeys(pwd);
    }
    clicklogin() {
        //await browser.executeScript("arguments[0].scrollIntoView();", login);
        this.login.click();
    }
}
exports.homepage = homepage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZXBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wYWdlcy9ob21lcGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUFtRTtBQUduRSxNQUFhLFFBQVE7SUFBckI7UUFDUSxTQUFJLEdBQUcsb0JBQU8sQ0FBVSxlQUFFLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztRQUNwRCxVQUFLLEdBQUcsb0JBQU8sQ0FBVSxlQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDM0MsYUFBUSxHQUFHLG9CQUFPLENBQVUsZUFBRSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQy9DLFVBQUssR0FBRyxvQkFBTyxDQUFVLGVBQUUsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztRQUNqRCxPQUFFLEdBQUMsK0JBQWtCLENBQUM7SUFzQzlCLENBQUM7SUFuQ0csSUFBSSxDQUFDLEdBQVU7UUFDWCxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNyQixDQUFDO0lBRUQsV0FBVztRQUNQLG9CQUFPLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDO0lBQ3pDLENBQUM7SUFFRCxXQUFXO1FBQ1Asb0JBQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDakUsQ0FBQztJQUNELFdBQVc7UUFDUCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxjQUFjO1FBQ1Ysb0JBQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFFbEUsQ0FBQztJQUVELFVBQVUsQ0FBQyxPQUFjO1FBQ25CLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBRW5DLENBQUM7SUFDRCxhQUFhLENBQUMsR0FBVTtRQUNsQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUVsQyxDQUFDO0lBRUQsVUFBVTtRQUNOLHVFQUF1RTtRQUN4RSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBRXRCLENBQUM7Q0FFSjtBQTNDRCw0QkEyQ0MifQ==
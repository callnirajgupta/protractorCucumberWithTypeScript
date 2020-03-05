"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const homepage_1 = require("../pages/homepage");
const protractor_1 = require("protractor");
let inputdata = require('../data/inputdata.json');
const { Before, Given, When, Then } = require('cucumber');
var { setDefaultTimeout } = require('cucumber');
let homepageobj;
Before({ timeout: 60 * 1000 }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        setDefaultTimeout(60 * 1000);
        homepageobj = new homepage_1.homepage();
        homepageobj.browsersync();
    });
});
Given('enter the url', function () {
    return __awaiter(this, void 0, void 0, function* () {
        // Write code here that turns the phrase above into concrete actions
        // homepageobj.browsersync();
        //await browser.get('http://automationpractice.com/index.php');
        yield homepageobj.goto(inputdata.url);
        yield protractor_1.browser.manage().window().maximize();
        yield homepageobj.waitforSign();
        yield homepageobj.clicksignin();
        //const emailInputField = $$('.mat-form-field-infix>input').get(1);
        // element(<Locator>by.css('a[class="login"]')).click();
    });
});
When('user enter username and password', function () {
    return __awaiter(this, void 0, void 0, function* () {
        // Write code here that turns the phrase above into concrete actions
        yield protractor_1.browser.sleep(2000);
        yield homepageobj.waitforelement();
        //await browser.sleep(2000)
        yield homepageobj.enteremail(inputdata.email);
        yield homepageobj.enterpassword(inputdata.password);
        yield homepageobj.clicklogin();
    });
});
Then('user is login successfully', function () {
    return __awaiter(this, void 0, void 0, function* () {
        // Write code here that turns the phrase above into concrete actions
        yield protractor_1.browser.sleep(5000);
        console.log('the step is pending');
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdFN0ZXBEZWYuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9jdWN1bWJlclN0ZXAvdGVzdFN0ZXBEZWYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxnREFBNkM7QUFDN0MsMkNBQWtFO0FBRWxFLElBQUksU0FBUyxHQUFDLE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0FBQ2hELE1BQU0sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDMUQsSUFBSSxFQUFDLGlCQUFpQixFQUFDLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQzlDLElBQUksV0FBZSxDQUFDO0FBRXBCLE1BQU0sQ0FBQyxFQUFDLE9BQU8sRUFBRSxFQUFFLEdBQUcsSUFBSSxFQUFDLEVBQUU7O1FBQ3pCLGlCQUFpQixDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQztRQUM3QixXQUFXLEdBQUcsSUFBSSxtQkFBUSxFQUFFLENBQUM7UUFDN0IsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBRTFCLENBQUM7Q0FBQSxDQUFDLENBQUM7QUFDSCxLQUFLLENBQUMsZUFBZSxFQUFFOztRQUN2QixvRUFBb0U7UUFFbEUsNkJBQTZCO1FBQzdCLCtEQUErRDtRQUMvRCxNQUFNLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3RDLE1BQU0sb0JBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUUzQyxNQUFNLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNoQyxNQUFNLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUVoQyxtRUFBbUU7UUFDbkUsd0RBQXdEO0lBQzVELENBQUM7Q0FBQSxDQUFDLENBQUM7QUFFSCxJQUFJLENBQUMsa0NBQWtDLEVBQUM7O1FBQ3RDLG9FQUFvRTtRQUNwRSxNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ3pCLE1BQU0sV0FBVyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ25DLDJCQUEyQjtRQUM1QixNQUFNLFdBQVcsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzlDLE1BQU0sV0FBVyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDcEQsTUFBTSxXQUFXLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDaEMsQ0FBQztDQUFBLENBQUMsQ0FBQztBQUVILElBQUksQ0FBQyw0QkFBNEIsRUFBQzs7UUFDaEMsb0VBQW9FO1FBQ3BFLE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7Q0FBQSxDQUFDLENBQUMifQ==
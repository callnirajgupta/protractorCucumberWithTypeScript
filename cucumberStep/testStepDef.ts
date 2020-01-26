import { homepage } from '../pages/homepage';
import { browser,element,by,ExpectedConditions} from 'protractor';
import { Locator } from 'protractor/built/locators';
let inputdata=require('../data/inputdata.json');
const { Before, Given, When, Then } = require('cucumber');
var {setDefaultTimeout} = require('cucumber');
let homepageobj:any;

Before({timeout: 60 * 1000}, async function() : Promise<any> {
    setDefaultTimeout(60 * 1000);
    homepageobj = new homepage();
    homepageobj.browsersync();

    });  
    Given('enter the url', async function() : Promise<any> {
    // Write code here that turns the phrase above into concrete actions
    
      // homepageobj.browsersync();
      //await browser.get('http://automationpractice.com/index.php');
      await homepageobj.goto(inputdata.url);
      await browser.manage().window().maximize();
        
      await homepageobj.waitforSign();
      await homepageobj.clicksignin();
        
      //const emailInputField = $$('.mat-form-field-infix>input').get(1);
      // element(<Locator>by.css('a[class="login"]')).click();
  });

  When('user enter username and password',async function() : Promise<any> {
    // Write code here that turns the phrase above into concrete actions
    await browser.sleep(2000)
    await homepageobj.waitforelement();
    //await browser.sleep(2000)
   await homepageobj.enteremail(inputdata.email);
   await homepageobj.enterpassword(inputdata.password);
   await homepageobj.clicklogin();
  });

  Then('user is login successfully',async function() : Promise<any> {
    // Write code here that turns the phrase above into concrete actions
    await browser.sleep(5000)
    console.log('the step is pending');
  });
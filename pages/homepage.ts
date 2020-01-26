import { browser, element,by,ExpectedConditions} from 'protractor';
import { Locator } from 'protractor/built/locators';

export class homepage{
        sign = element(<Locator>by.css('a[class="login"]'));
        email = element(<Locator>by.css('#email'));
        password = element(<Locator>by.css('#passwd'));
        login = element(<Locator>by.css('#SubmitLogin'));
        EC=ExpectedConditions;
        
        
    goto(url:string){
        browser.get(url);
    }

    browsersync(){
        browser.ignoreSynchronization = true;
    }

    waitforSign(){
        browser.wait(this.EC.elementToBeClickable(this.sign), 10000);
    }
    clicksignin(){
        this.sign.click();
    }

    waitforelement(){
        browser.wait(this.EC.elementToBeClickable(this.email), 10000);

    }

    enteremail(emailid:string){
          this.email.sendKeys(emailid);

    }
    enterpassword(pwd:string){
          this.password.sendKeys(pwd);
        
    }

    clicklogin(){
        //await browser.executeScript("arguments[0].scrollIntoView();", login);
       this.login.click();

    }

}

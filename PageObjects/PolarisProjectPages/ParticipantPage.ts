 //import { ElementFinder,element,by, browser, protractor, ExpectedConditions, Key } from "protractor";
 import { ElementFinder, By, element, ElementArrayFinder } from "protractor";


 
export class ParticipantAssessment{
    emailField:ElementFinder;
    pwdField:ElementFinder;
    loginBtn:ElementFinder;
    journeyDropdown:ElementFinder;
    select:ElementFinder;
    moduleName:ElementFinder;
    activityName:ElementFinder;
    startBtn:ElementFinder;
    nextBtn:ElementFinder;
    percentage:ElementFinder;
    pageTitle:ElementFinder;
    rejectBtn:ElementFinder;
    acceptBtn:ElementFinder;
    userprofileUsername:ElementFinder;
    userprofileEmail:ElementFinder;
    question:ElementFinder;
    errorMsg:ElementFinder;
   

    constructor(){
       
        this.emailField= element(By.xpath('//input[@id="userEmail"]'))
        this.pwdField= element(By.xpath('//input[@id="password"]'))
        this.loginBtn= element(By.xpath('//button[@id="btnLogin"]'))
        this.journeyDropdown= element(By.xpath('//select[@id="mat-input-2"]'))
        this.select= element(By.xpath('//option[contains(text(),"Journey for Participant")]'))
        this.moduleName= element(By.xpath('//h2[contains(text(),"Module One")]'))
        this.activityName=element(By.xpath('//h3[contains(text(),"Activity for Assessment")]'))
        this.startBtn= element(By.xpath('//span[@class="plugin-common__btn-start__text"]'))
        this.nextBtn = element(By.xpath('//span[contains(text(),"Next")]'))
        this.percentage = element(By.xpath('//div[@class="plugin-module-side d-flex completion-bar"]'))
        this.pageTitle = element(By.xpath('//h3[@class="page__name"]'))
        this.rejectBtn = element(By.xpath('//span[contains(text(),"Reject")]'))
        this.acceptBtn = element(By.xpath('//span[contains(text(),"Accept")]'))
        this.userprofileUsername = element (By.xpath('//input[@name="UserName"]'))
        this.userprofileEmail = element (By.xpath('//input[@name="Email"]'))
        this.question = element(By.xpath('//h4[@class="item_question mba ng-star-inserted"]'))
        this.errorMsg = element(By.xpath('//li[contains(text(),"This question is mandatory")]'))
        

    }


}










// export class btsMatchPage
// {
// constructor(){}

// static async selectRadio(xpath){

   
//     await element(by.xpath(xpath)).click();
//      return browser.sleep(2000);
// }

// static async type(id, value){
//   element(by.id(id));
//     element(by.xpath("//input[@placeholder='answer']")).click().then(function(){
// browser.switchTo().activeElement().sendKeys(value);
// browser.sleep(2000)

//     })
   
   
// }

// static async sendCrossScript(locator,value){
// await locator.sendKeys(value).then(async function(){
// var key= browser.actions().sendKeys(protractor.Key.TAB);
// await key.perform();

// })
// }
// static async radioselectwithscroll(locator){
//   var locator1=element(by.id(locator))
//   await browser.sleep(4000)
//   var elem=browser.actions().mouseMove(locator1);
//   await  elem.perform();
//   await browser.wait(EC.visibilityOf(locator1),30000);
//   await locator1.click();
//   return browser.sleep(4000)


// }
// static async selectDropdownValue(value,id){
//   // await browser.executeScript('window.scrollTo(0,10000);')
//     await browser.sleep(2000);
//     await element(by.id(id)).click();
//     await browser.sleep(1000);
//     await element(by.cssContainingText('.mat-option-text', value)).click();
//     await browser.sleep(1000);
//     // await element(by.id(id)).sendKeys(value);
    
// }
// static async checkLocalised(){
  
// }


// }


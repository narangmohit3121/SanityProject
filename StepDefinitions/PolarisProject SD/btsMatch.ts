// import { Given, When, Then } from "cucumber";
// import { browser, by, element, By, protractor, ExpectedConditions, Browser, ElementFinder, ElementArrayFinder } from "protractor";
// import config from "./config.json";
// import chai from "chai";
// import { async } from "q";
// import { btsMatchPage } from "../../PageObjects/PolarisProjectPages/btsMatchPage";
// import _ from "lodash";
// import { Driver } from "selenium-webdriver/ie";
// import { angularHomePage } from "../pageObjects/angularHomePage.js";
// var expect = chai.expect;
// declare var require: any;
// let EC = ExpectedConditions;
// let path = require("path");

// var Excel = require('xlsx');
// var {setDefaultTimeout} = require('cucumber');

// setDefaultTimeout(80 * 1000);

// Given('I am on Angular page', async () => {
//     browser.sleep(4000)
//     browser.waitForAngularEnabled(true)
//     browser.driver.get(config.practice);
//     browser.sleep(4000)
//     browser.getCurrentUrl().then(function (test) {
//         console.log(test)


//     })


// });



// Then('I scroll', function () {
//     browser.executeScript('window.scrollTo(0, document.body.scrollHeight)').then(function () {
//         // browser.switchTo().activeElement();
//         browser.sleep(2000)
//         console.log("Script Executed")
//         browser.sleep(2000)
//         // element(by.cssContainingText('.card h3','Indiegogo')).click();

//     })


// })

// Given('I will navigate to btsMatchLogin page', async () => {
//     browser.waitForAngularEnabled(false)
//     await browser.get(config.btsMatchLoginPage);
//     // await browser.refresh(); body

// });

// Given('I will navigate to chevron page', async () => {
//     // browser.waitForAngularEnabled(false)
//     await browser.get(config.chevronDev);
//     // await browser.refresh(); body

// });

// Given('I will navigate to momenta page', async () => {
//     // browser.waitForAngularEnabled(false)
//     await browser.get(config.momentaDev);
//     // await browser.refresh(); body

// });

// Given('I will navigate to btsmatchdev page', async () => {
//     browser.waitForAngularEnabled(false)
//     await browser.get(config.btsmatchdev);
//     // await browser.refresh(); body

// });

// Given('I am on chevronHome page', async () => {

//     await browser.get(config.chevronHome);
//     await browser.refresh();
//     await browser.sleep(5000)
//   // await browser.refresh(); body

// });

// Given('I will check there is toast message text should be {string}', async (string) => {
//     await browser.sleep(1000)
//     await browser.wait(EC.visibilityOf(element(by.xpath('//div[contains(text(),"' + string + ' ")]'))), 15000)
//     await element(by.xpath('//div[contains(text(),"' + string + ' ")]')).isDisplayed().then(async function (bool) {
//         await console.log('the bool is' + bool)
//         // await element(by.xpath('//div[contains(text(),"'+string+' ")]')).click();
//         await expect(bool).to.be.true;



//     })

// });

// Given('I will navigate to btsMatch page', async () => {
//     browser.waitForAngularEnabled(false)
//     await browser.get(config.btsMatch);
//     await browser.refresh()
//     return browser.sleep(6000)  // await browser.refresh(); body

// });
// Given('I select {string} from {string} dropdown', async (value, id) => {
//     //browser.waitForAngularEnabled(false)
//     await element(by.id(id)).sendKeys(value);
//     return browser.sleep(3000)
// });
// Then('I will navigate to BTSAdminpage', async function () {
//     // Write code here that turns the phrase above into concrete actions
//     await browser.get(config.btsAdminPage);
//     await browser.refresh()
//     return browser.sleep(6000)


// });

// Then('I will get message {string}', async function (msg) {
//     // Write code here that turns the phrase above into concrete actions
//     await browser.waitForAngularEnabled(false)
//     await element(by.id('msg-block')).getText().then(function (text) {
//         expect(msg).to.equal(text)

//     })



// });
// Then('I will check the error message displayed as {string}', async function (msg) {
//     // Write code here that turns the phrase above into concrete actions
//     await browser.sleep(3000)
//     var elem: ElementFinder = element(by.className('login-errorMessage login-errorMessage--show'));
//     await browser.executeScript("arguments[0].scrollIntoView(true);", elem);
//     await elem.getText().then(function (text) {
//         expect(msg).to.equal(text)

//     })



// });

// Then('I will click on list option having Text {string}', async function (optiontext) {
//     Write code here that turns the phrase above into concrete actions
//     await browser.sleep(1000)
//     await browser.waitForAngularEnabled(false)
//     await browser.wait(EC.invisibilityOf(element(by.className('loader'))), 25000)
//     await browser.wait(EC.visibilityOf(element(by.name('Viewing Journey'))), 25000)
//     await browser.sleep(5000)
//     await element(by.name('Viewing Journey')).sendKeys(optiontext)
//     await element(by.name('Viewing Journey')).getText().then(function(text){
//         console.log("The text befire select"+text )
//     })

//     // if(element(by.name('Viewing Journey')).getText()===optiontext){
//     //     await browser.wait(EC.elementToBeClickable(element(by.xpath('//span[contains(text(),"My Journey")]'))),15000)
//     //  await element(by.xpath('//span[contains(text(),"My Journey")]')).click()

//     // }
//     // else{

//     //await element(by.name('Viewing Journey')).sendKeys(optiontext)
//     await element(by.name('Viewing Journey')).click();
//     await browser.sleep(5000)
//      await element(by.xpath('//span[contains(text(),"' +optiontext+ '")]')).click();
//     await browser.sleep(5000)
//     await element(by.name('Viewing Journey')).getText().then(function(text){
//         console.log("The text befire select"+text )
//     })
//     await browser.wait(EC.elementToBeClickable(element(by.xpath('//span[contains(text(),"My Journey")]'))), 15000)
//     await element(by.xpath('//span[contains(text(),"My Journey")]')).click()
//     // }

//     await browser.sleep(5000)


// });

// Then('I will open {string} assesment', async (assesmentName) => {

//     await element(by.cssContainingText('.master-collection__box-text', assesmentName)).click()
// });

// Then('I will check the available pages', async () => {

//     await element(by.className('assessment-editing__list__row')).getText().then(function (text) {
//         console.log("The list as follows  " + text)

//     })

// });
// Then('I will click on navigate to assessment', async () => {
//    // await browser.wait(EC.elementToBeClickable(element(by.xpath('//span[contains(text(),"' + string + '")]'))), 15000)
//     //await element(by.xpath('//span[contains(text(),"' + string + '")]')).click()
//     await browser.wait(EC.elementToBeClickable(element(by.xpath('//mat-card/div/div/div[2]/div[2]/button'))), 15000)
//     await element(by.xpath('//mat-card/div/div/div[2]/div[2]/button')).click();
//     await browser.wait(EC.elementToBeClickable(element(by.xpath('//div/div[2]/div[2]/div[1]/div[1]/div[2]/button'))), 15000)
//     await element(by.xpath('//div/div[2]/div[2]/div[1]/div[1]/div[2]/button')).click();

// })


// Then('I will check i am on btsMatchLogin page', async function () {
//     browser.waitForAngularEnabled(false)
//     await browser.getCurrentUrl().then(function (text) {
//         expect(text).to.equal(config.btsMatchLoginPage)

//     })
// });

// Then('I navigate to chevron dashboard page', async function () {
//     browser.wait(EC.visibilityOf(element(by.xpath('//div[contains(text(),"Client")]'))), 15000)
//     await element(by.xpath('//div[contains(text(),"Client")]')).click();
//     await element(by.xpath('//input[@placeholder="Filter Collections"]')).sendKeys("Chevron").then(function () {
//         browser.sleep(3000);
//         element(by.xpath('//span[contains(text(),"Chevron")]')).click();

//     })
//     await browser.sleep(5000);
// });

// Then('I create journey having name {string} and publish it', async function (value) {

//     await browser.wait(EC.invisibilityOf(element(by.xpath('//div[@class="loader_container"]'))), 50000)
//     await browser.wait(EC.elementToBeClickable(element(by.xpath('//div/div[2]/div/div/div/div[3]/button'))), 15000)
//     await element(by.xpath('//div/div[2]/div/div/div/div[3]/button')).click().then(function () {
//         browser.sleep(2000);
//         element(by.xpath('//span[contains(text(),"Create")]')).click()
//     })
//     await browser.wait(EC.invisibilityOf(element(by.xpath('//div[@class="loader_container"]'))), 50000)
//     await browser.wait(EC.elementToBeClickable(element(by.id('mat-input-2'))), 15000);
//     await element(by.id('mat-input-2')).click().then(function () {
//         element(by.id('mat-input-2')).clear();
//         element(by.id('mat-input-2')).sendKeys(value);

//     })
//     await browser.sleep(2000)
//     await element(by.name('save')).click();
//     await browser.wait(EC.invisibilityOf(element(by.xpath('//div[@class="loader_container"]'))), 50000)
//     await browser.sleep(2000)
//     await browser.wait(EC.invisibilityOf(element(by.xpath('//div[@class="loader_container"]'))), 50000)
//     await browser.wait(EC.visibilityOf(element(by.cssContainingText('.master-collection__box-text', value))), 15000)
//     await element(by.cssContainingText('.master-collection__box-text', value)).click().then(async function () {
//         await browser.wait(EC.invisibilityOf(element(by.xpath('//div[@class="loader_container"]'))), 50000)
//         await browser.sleep(2000)
//         await console.log("Executed................")
//         await browser.wait(EC.invisibilityOf(element(by.xpath('//div[@class="loader_container"]'))), 50000)
//         await browser.wait(EC.visibilityOf(element(by.name('publish'))), 25000)
//         await element(by.name('publish')).click();
//         // await  browser.sleep(2000)
//         await browser.wait(EC.invisibilityOf(element(by.xpath('//div[@class="loader_container"]'))), 50000)

//     })
//     await element(by.cssContainingText('.toast-message', ' Journey Published Successfully ')).isPresent().then(function (bool) {
//         expect(bool).to.be.true;
//     })
//     await element(by.cssContainingText('.toast-message', ' Journey Published Successfully ')).click();
//     await browser.wait(EC.invisibilityOf(element(by.cssContainingText('.toast-message', ' Journey Published Successfully '))), 15000)
//     await browser.wait(EC.visibilityOf(element(by.name('cancel'))), 25000)
//     await element(by.name('cancel')).click();
//     await browser.wait(EC.visibilityOf(element(by.name('Leave'))), 15000)
//     await element(by.name('Leave')).click();
//     await browser.sleep(3000)

// });

// Then('I will create cohort and link {string} to user', async function (value) {
//     await browser.wait(EC.invisibilityOf(element(by.xpath('//div[@class="loader_container"]'))), 50000)
//     await element(by.cssContainingText('.mat-tab-label', 'Users')).click();
//     await browser.wait(EC.invisibilityOf(element(by.xpath('//div[@class="loader_container"]'))), 50000)
//     await browser.sleep(3000)
//     var journey: ElementFinder = element(by.linkText(value));
//     await browser.executeScript("arguments[0].scrollIntoView(true);", journey);
//     await browser.wait(EC.elementToBeClickable(journey), 15000)
//     await journey.click();
//     // await browser.wait(EC.visibilityOf(element(by.linkText(value))), 15000)
//     // await element(by.linkText(value)).click();
//     // await browser.wait(EC.invisibilityOf(element(by.xpath('//div[@class="loader_container"]'))), 50000)
//      await browser.wait(EC.visibilityOf(element(by.xpath('//app-cohorts/div/div[2]/div/header/div/button[3]'))), 15000)
//     await element(by.xpath('//app-cohorts/div/div[2]/div/header/div/button[3]')).click();
//     await browser.wait(EC.invisibilityOf(element(by.xpath('//div[@class="loader_container"]'))), 50000)
//     await element(by.xpath('//input[@placeholder="Cohort Title"]')).click().then(async function () {
//         element(by.xpath('//input[@placeholder="Cohort Title"]')).clear().then(function () {
//             element(by.xpath('//input[@placeholder="Cohort Title"]')).sendKeys("base")

//         })
//         await element(by.xpath('//button[@aria-label="Open calendar"]')).click();
//         await element(by.css('.mat-calendar-body-today:not(.mat-calendar-body-selected)')).click();
//         await element(by.css('.mat-calendar-body-today:not(.mat-calendar-body-selected)')).click();
//         await browser.sleep(2000)
//     })
//     await element(by.name('journey-save')).click().then(async function () {
//         await browser.wait(EC.invisibilityOf(element(by.xpath('//div[@class="loader_container"]'))), 50000)
//         // await browser.wait(EC.visibilityOf(element(by.cssContainingText('.toast-container', 'Cohort succesfully created'))), 15000).then(async function () {
//         //     await element(by.id('toast-container')).getText().then(async function (text) {
//         //         await expect(text).to.contains("Cohort succesfully created")
//         //     })
//         // })
//     })
//     // await browser.wait(EC.invisibilityOf(element(by.xpath('//div[@class="loader_container"]'))), 50000)
//     await browser.wait(EC.elementToBeClickable(element(by.xpath('//td[contains(text(),"base")]'))), 15000);
//     await element(by.xpath('//td[contains(text(),"base")]')).click();
//     await browser.wait(EC.invisibilityOf(element(by.xpath('//div[@class="loader_container"]'))), 50000)
//     await browser.wait(EC.invisibilityOf(element(by.xpath('//div[contains(text()," Cohort Successfully created ")]'))), 15000)
//     await browser.wait(EC.elementToBeClickable(element(by.xpath('//app-cohort-user-list/div/div[2]/div/header/div/button[2]'))), 15000)
//     await browser.wait(EC.invisibilityOf(element(by.xpath('//div[@class="loader_container"]'))), 50000)
//     await element(by.xpath('//app-cohort-user-list/div/div[2]/div/header/div/button[2]')).click();
//     await browser.wait(EC.invisibilityOf(element(by.xpath('//div[@class="loader_container"]'))), 50000)
//     var brow: ElementFinder = element(by.xpath('//span[contains(text(),"jack ")]'))
//     await browser.executeScript("arguments[0].scrollIntoView(true);", brow);
//     await browser.wait(EC.elementToBeClickable(brow), 15000)
//     await brow.click();
//     await element(by.name('create-user-save')).click().then(async function () {
//         await browser.wait(EC.visibilityOf(element(by.xpath('//div[contains(text()," Users Added to Cohort successfully ")]'))), 15000)
//         await element(by.xpath('//div[contains(text()," Users Added to Cohort successfully ")]')).isDisplayed().then(async function (result) {
//             await expect(result).to.be.true;
//         })

//     })
//     await browser.wait(EC.invisibilityOf(element(by.xpath('//div[@class="loader_container"]'))), 50000)
//     await element(by.cssContainingText('.mat-tab-label', 'Content')).click();
//     await browser.wait(EC.invisibilityOf(element(by.xpath('//div[@class="loader_container"]'))), 50000)
//     return browser.sleep(3000)

// });

// Then('I will upload the assesment name {string} and check the validations', async function (assesmentName) {
//     await browser.wait(EC.invisibilityOf(element(by.xpath('//div[@class="loader_container"]'))), 50000)
//     await browser.wait(EC.elementToBeClickable(element(by.name('add-content'))), 15000)
//     var buttonclick: ElementFinder = element(by.name('add-content'));
//     await browser.executeScript("arguments[0].scrollIntoView(true);", buttonclick);
//     await buttonclick.click().then(async function () {
//         buttonclick = element(by.xpath('//span[contains(text(),"New Assessment")]'));
//         await browser.executeScript("arguments[0].scrollIntoView(true);", buttonclick);
//         await browser.wait(EC.elementToBeClickable(element(by.xpath('//span[contains(text(),"New Assessment")]'))), 15000)
//         await buttonclick.click();

//     })

//     await browser.wait(EC.invisibilityOf(element(by.xpath('//div[@class="loader_container"]'))), 50000)
//     await element(by.name('create-activity')).click().then(async function () {
//         await browser.wait(EC.invisibilityOf(element(by.xpath('//div[@class="loader_container"]'))), 50000)
//         // await browser.wait(EC.visibilityOf(element(by.cssContainingText('.toast-container', 'ActivityTile is Mandatory'))), 15000)
//         await element(by.xpath('//div[contains(text()," Title is mandatory ")]')).isDisplayed().then(async function (elrm) {
//             await expect(elrm).to.be.true;
//             await element(by.xpath('//div[contains(text()," Title is mandatory ")]')).click();
//         })
//     })
//     await browser.sleep(2000)
//     await element(by.name('activityTitle')).click().then(async function () {
//         await element(by.name('activityTitle')).sendKeys(assesmentName)
//     })
//     await element(by.name('create-activity')).click()
//     await browser.wait(EC.invisibilityOf(element(by.xpath('//div[@class="loader_container"]'))), 50000)
//     let filePath = config.file
//     //let fpath=path.resolve("C:",filePath)
//     await element(by.id('file-input')).sendKeys(filePath).then(async function () {
//         await element(by.name('upload')).click();
//         await browser.wait(EC.invisibilityOf(element(by.xpath('//div[@class="loader_container"]'))), 50000)
//         await browser.sleep(3000)
//     })
//     await browser.wait(EC.invisibilityOf(element(by.xpath('//div[@class="loader_container"]'))), 50000)
//     var assesment: ElementFinder = element(by.xpath('//p[contains(text(),"' + assesmentName + '")]'))
//     await browser.executeScript("arguments[0].scrollIntoView(true);", assesment);
//     await browser.wait(EC.elementToBeClickable(assesment), 15000)
//     await assesment.isDisplayed().then(function (displayed) {
//         expect(displayed).to.be.true
//     })
//     await browser.wait(EC.elementToBeClickable(element(by.name('add-content'))), 15000)
//     var buttonclick: ElementFinder = element(by.name('add-content'));
//     await browser.executeScript("arguments[0].scrollIntoView(true);", buttonclick);
//     await buttonclick.click().then(async function () {
//         buttonclick = element(by.xpath('//span[contains(text(),"New Assessment")]'));
//         await browser.executeScript("arguments[0].scrollIntoView(true);", buttonclick);
//         await browser.wait(EC.elementToBeClickable(element(by.xpath('//span[contains(text(),"New Assessment")]'))), 15000)
//         await buttonclick.click();

//     })
//     await element(by.name('activityTitle')).click().then(function () {
//         element(by.name('activityTitle')).sendKeys(assesmentName)
//     })
//     await element(by.name('create-activity')).click()
//     await element(by.id('file-input')).sendKeys(filePath).then(async function () {
//         await element(by.name('upload')).click();
//         return browser.sleep(3000)
//     })
//     await browser.wait(EC.invisibilityOf(element(by.xpath('//div[@class="loader_container"]'))), 50000)
//     await browser.wait(EC.visibilityOf(element(by.xpath('//mat-card-content/div[2]/div/p[1]'))), 15000);
//     await element(by.xpath('//mat-card-content/div[2]/div/p[1]')).getText().then(function (errorMessage) {
//         return expect(errorMessage).to.contains("Assessment with same name already exist")

//     })
//     await element(by.xpath('//div[contains(text(),"Something went wrong")]')).isDisplayed().then(function(bool){
//         expect(bool).to.be.true
//     return element(by.xpath('//div[contains(text(),"Something went wrong")]')).click()
//     })
//     await browser.wait(EC.visibilityOf(element(by.xpath('//button[contains(text(),"CLOSE")]'))), 50000);
//     await element(by.xpath('//button[contains(text(),"CLOSE")]')).click();
//     await browser.wait(EC.invisibilityOf(element(by.xpath('//div[@class="loader_container"]'))), 50000)

// })

// Then('I will check the assesment options for assessment {string}', async function (assesmentName) {
//     await browser.wait(EC.invisibilityOf(element(by.xpath('//div[@class="loader_container"]'))), 50000)
//     var assesment: ElementFinder = element(by.xpath('//p[contains(text(),"' + assesmentName + '")]'))
//     await browser.executeScript("arguments[0].scrollIntoView(true);", assesment);
//     await browser.wait(EC.elementToBeClickable(assesment), 15000)
//     await assesment.isDisplayed().then(function (displayed) {
//         expect(displayed).to.be.true
//     })
//     await assesment.click();
//     await browser.wait(EC.invisibilityOf(element(by.xpath('//div[@class="loader_container"]'))), 50000)
//    //  const pages: any = [];
//     //     const assessmentpages: any = ['Welcome', 'PrivacyPolicy', 'UserProfile', 'SingleHorizontal', 'SingleVertical', 'Polar', 'Texts', 'variableGrid', ' MbaEmail', ' MbaCalender', ' MbaMessenger', ' BiPolar', ' Matrix1', ' Matrix2', ' Matrix3', ' ##SIM##', ' Instructions', ' BarcodeSingle', ' ##SIM##', ' Scoring'];
//          const assessmentpages: string[]  = ['Welcome', 'PrivacyPolicy', 'Instructions', 'MBA1', 'MBA2', 'MBA3', 'MBA4','Scoring','ThankYou']
//          let pageList: ElementArrayFinder =  element.all(By.xpath("//ul[@class='assessment-editing__list__row']/li"));
//          await console.log("The Size is   "+(await pageList).length);
//          var totalLength= (await pageList).length;
//          let data: string[] = [];
//          for(var i=1;i<=totalLength;i++){
//            let input = await element(by.xpath("//ul[@class='assessment-editing__list__row']/li["+i+"]")).getText();  
//            console.log("The Value is "+input);
//            data.push(input);
//          }
//         const ans = _.difference(data, assessmentpages);
//         const assert: boolean =  await ans.length === 0;
//         await expect(assert).to.be.true
//     //     pageList.each(async function (page) {
//     //         let pageName: string = await page.getText();
//     //         pages.push(pageName)

//     //     })
//     //expect(assessmentpages).to.equal(pages)
//     // console.log('the pages are'+pages)
//     // await element(by.xpath('//mat-select[@ng-reflect-value="2"]')).getAttribute('aria-disabled').then(async function (value) {
//     // await console.log("The Value is   "+ value)   
//     // await expect(value).to.equal('false')
//     // })
//     // await element(by.xpath('//mat-select[@ng-reflect-value="en-US:English"]')).getAttribute('aria-disabled').then(function (value) {
//     //     expect(value).to.equal('false')
//     // })
//     await element(by.name('Re-Import Excel')).click();
//     let filePath1 = config.file
//     await element(by.id('file-input')).sendKeys(filePath1).then(async function () {
//         await element(by.name('upload')).click();
//         await browser.sleep(3000)
//     })
//     await browser.wait(EC.invisibilityOf(element(by.xpath('//div[@class="loader_container"]'))), 50000)
//     await element(by.name('upload content')).click();
//     let filePath = "C:\\Users\\Administrator\\Downloads\\Demo.xlsx"
//     await element(by.id('file-input')).sendKeys(filePath).then(async function () {
//         await element(by.name('upload')).click();
//         return browser.sleep(3000)
//     })
//     await browser.wait(EC.invisibilityOf(element(by.xpath('//div[@class="loader_container"]'))), 50000)
//     await element(by.name('publish')).click().then(function () {
//         element(by.cssContainingText('.toast-container', 'successfully')).isDisplayed().then(async function (bool) {
//             await expect(bool).to.be.true;
//             await browser.wait(EC.invisibilityOf(element(by.cssContainingText('.toast-container', 'successfully'))),15000)
//             await browser.wait(EC.invisibilityOf(await element(by.xpath('//div[@class="loader_container"]'))), 50000)
//         })
//     })
//     // await browser.wait(EC.invisibilityOf(element(by.xpath('//div[@class="loader_container"]'))), 50000)
//     await browser.wait(EC.elementToBeClickable(element(by.name('exit'))),50000)
//     await element(by.xpath('//span[contains(text(),"EXIT EDITOR")]')).click()
//     await browser.wait(EC.invisibilityOf(element(by.xpath('//div[@class="loader_container"]'))), 50000)

// });

// Then('I will open assesment details for assesment {string}', async function (assesmentName) {
//     var assesment: ElementFinder = element(by.xpath('//div[2]/div/div/div/div[6]/a//p[contains(text(),"' + assesmentName + '")]'))
//     await browser.executeScript("arguments[0].scrollIntoView(true);", assesment);
//     await browser.wait(EC.elementToBeClickable(assesment), 15000)
//     await assesment.isDisplayed().then(function (displayed) {
//         expect(displayed).to.be.true
//     })
//     await assesment.click();
//     await element(by.name('upload score test')).click();
//     let filePath = "C:\\Users\\Administrator\\Downloads\\RCCL_Correct.xlsx"
//     await element(by.id('file-input')).sendKeys(filePath).then(async function () {
//         await element(by.name('upload')).click();
//         return browser.sleep(3000)
//     })
//     await element(by.xpath('//mat-card[1]/mat-card-content/table/tbody/tr[1]/td[2]')).getAttribute('ng-reflect-disabled').then(function (value) {
//         return expect(value).to.equal('true')
//     })
//     await element(by.xpath('//mat-card[1]/mat-card-content/table/tbody/tr[2]/td[2]')).getAttribute('ng-reflect-disabled').then(function (value) {
//         return expect(value).to.equal('false')
//     })
//     let filePath1 = "C:\\Users\\Administrator\\Downloads\\RCCL_Wrong.xlsx"
//     await element(by.id('file-input')).sendKeys(filePath1).then(async function () {
//         await element(by.name('upload')).click();
//         await element(by.xpath('//div[contains(text(),"Upload Test Score Failed")]')).isDisplayed().then(function (bool) {
//             expect(bool).to.be.true
//         })
//         return browser.sleep(3000)
//     })
//     await browser.wait(EC.invisibilityOf(element(by.xpath('//div[@class="loader_container"]'))), 50000)
//     await element(by.name('cancel')).click()
//     await browser.wait(EC.invisibilityOf(element(by.xpath('//div[@class="loader_container"]'))), 50000)
//     await element(by.name('exit')).click()

// });

// Then('I will open the journey {string} and I will link {string} assessment publish the stages', async function (JourneyName, assesmentName) {
//     var Journey: ElementFinder = element(by.xpath('//a//p[contains(text(),"' + JourneyName + '")]'))
//     await browser.executeScript("arguments[0].scrollIntoView(true);", Journey);
//     await browser.wait(EC.elementToBeClickable(Journey), 15000)
//     await Journey.click();
//     await browser.wait(EC.invisibilityOf(element(by.xpath('//div[@class="loader_container"]'))), 50000)
//     await element(by.name('add stage')).click();
//     await browser.wait(EC.visibilityOf(element(by.xpath('//span/mat-panel-description/div/button/span/i'))), 15000)
//     //await element(by.name('add stage')).click();
//     var elem1 = await element(by.xpath('//span/mat-panel-description/div/button/span/i'));
//     await elem1.click().then(async function () {
//         await browser.wait(EC.visibilityOf(element(by.name('add-module'))), 15000)
//         await element(by.name('add-module')).click();
//         await browser.sleep(5000)

//     })
    
//     await element(by.xpath('//span/div/mat-panel-description/div/button/span/i')).click().then(async function () {
//         await browser.sleep(3000)
//         await element(by.name('add-activity')).click();
//         await browser.sleep(3000)

//     })
//     await element(by.xpath('//span/div/mat-panel-description/div/button/span/i')).click().then(async function () {
//         await browser.sleep(3000)
//         await element(by.name('add-activity')).click();
//         await browser.sleep(3000)

//     })
//     await element(by.xpath('//div[1]/div[2]/button/span/i')).click().then(async function () {
//         await browser.sleep(3000)
//         await element(by.xpath('//button[contains(text(),"Link Activity")]')).click();
//         await browser.wait(EC.invisibilityOf(element(by.xpath('//div[@class="loader_container"]'))), 50000)
//         await browser.sleep(3000)
//     })
//     await element(by.xpath('//div/div/div[2]/div[1]/div[1]/mat-form-field/div/div[1]/div[1]/mat-select')).click().then(async function () {
//         await browser.sleep(3000)
//         await element(by.cssContainingText('.mat-option-text', assesmentName)).click();
//         await browser.sleep(3000)

//     })
//     await element(by.xpath('//div/div/div[2]/div[1]/div[2]/button')).click();
//     await browser.wait(EC.invisibilityOf(element(by.xpath('//div[@class="loader_container"]'))), 50000)

//     await element(by.xpath('//div[2]/div[2]/button/span/i')).click().then(async function () {
//         await browser.sleep(3000)
//         await element(by.xpath('//button[contains(text(),"Link Activity")]')).click();
//         await browser.wait(EC.invisibilityOf(element(by.xpath('//div[@class="loader_container"]'))), 50000)
//         await browser.sleep(3000)
//     })
//     await element(by.xpath('//div/div/div[2]/div[1]/div[1]/mat-form-field/div/div[1]/div[1]/mat-select')).click().then(async function () {
//         await browser.sleep(3000)
//         await element(by.cssContainingText('.mat-option-text','JS Report (Chevron Corporation)')).click();
//         await browser.sleep(3000)

//     })
//     await element(by.xpath('//div/div/div[2]/div[1]/div[2]/button')).click();
//     await browser.wait(EC.invisibilityOf(element(by.xpath('//div[@class="loader_container"]'))), 50000)
//   //  await element(by.xpath('//app-link-activity-component/div/div/div[2]/div[1]/div[2]/button')).click();




//     // await element(by.xpath('//app-link-activity-component/div/div/div[2]/div[1]/div[1]/mat-form-field')).click().then(function () {
//     //     element(by.cssContainingText('.mat-option-text', 'Test Assessment2')).click();
//     // })
//    // await element(by.xpath('//app-link-activity-component/div/div/div[2]/div[1]/div[2]/button')).click();
//     await element(by.name('save')).click().then(async function () {
//         await browser.wait(EC.invisibilityOf(element(by.xpath('//div[@class="loader_container"]'))), 50000)
//         await element(by.xpath('//div[contains(text(),"Successfully")]')).isDisplayed().then(function (bool) {
//             expect(bool).to.be.true
            
//         })
//         await browser.sleep(3000)
//         await console.log("Opening Report")
//     })
//     await element(by.xpath('//li/div[contains(text(),"Reports")]')).click();
//     await browser.wait(EC.invisibilityOf(element(by.xpath('//div[@class="loader_container"]'))), 50000)
//     await (console.log("Entered in reports"))
//     await element(by.xpath('//div/div[2]/button/span/i')).click().then(async function () {
//     await browser.sleep(2000) 
//     await browser.wait(EC.elementToBeClickable(element(by.xpath('//button[contains(text(),"Link Report")]'))),15000) 
//     // await browser.waitForAngularEnabled(false)  
//     await element(by.xpath('//button[contains(text(),"Link Report")]')).click();
//     await console.log("Linking Report")
//      await browser.sleep(2000)
//      await browser.wait(EC.invisibilityOf(element(by.xpath('//div[@class="loader_container"]'))), 50000)
//    // await browser.sleep(3000)   
//    await browser.wait(EC.visibilityOf(element(by.xpath('//div/div/div[2]/div/div[1]/mat-form-field/div/div[1]/div/mat-select'))),15000)
//     await element(by.xpath('//div/div/div[2]/div/div[1]/mat-form-field/div/div[1]/div/mat-select')).click().then(async function(){
//      await browser.sleep(1000)   
//     await console.log("Reports opened")
//     await browser.wait(EC.elementToBeClickable(element(by.cssContainingText('.mat-option-text','JS Report'))),15000)
//     await element(by.cssContainingText('.mat-option-text','JS Report')).click();
//     await browser.sleep(3000) 
//     await console.log("Lined")
//     })
//     await browser.wait(EC.elementToBeClickable(element(by.xpath('//div/div/div[2]/div/div[2]/button/i'))),15000)
//     await element(by.xpath('//div/div/div[2]/div/div[2]/button/i')).click();
//     await browser.wait(EC.elementToBeClickable(element(by.name('save'))),15000)
//     await element(by.name('save')).click()
//     await browser.wait(EC.invisibilityOf(element(by.xpath('//div[@class="loader_container"]'))), 50000)
//     await element(by.xpath('//div[contains(text(),"Reports linked")]')).click();
//     await browser.wait(EC.invisibilityOf(element(by.xpath('//div[contains(text(),"Reports linked")]'))),20000)
//     await browser.wait(EC.elementToBeClickable( element(by.xpath('//div[contains(text(),"Journey Flow")]'))),20000)
//     await element(by.xpath('//div[contains(text(),"Journey Flow")]')).click();
//     await browser.wait(EC.invisibilityOf(element(by.xpath('//div[@class="loader_container"]'))), 50000)

//     })
//     await browser.wait(EC.elementToBeClickable(element(by.xpath('//button/span[contains(text(),"PUBLISH")]'))),15000)
//     await element(by.xpath('//button/span[contains(text(),"PUBLISH")]')).click().then(async function () {
//         await element(by.xpath('//div[contains(text(),"published successfully")]')).isDisplayed().then(function (bool) {
//             expect(bool).to.be.true   
//         })
//     await browser.wait(EC.invisibilityOf(element(by.xpath('//div[@class="loader_container"]'))), 50000)
       
//             // element(by.xpath('//div[contains(text(),"Successfully")]')).click();
            
       

//     })


// });

// Then('I will navigate to chevron upload page and upload yaml file', async function () {
//     await element(by.xpath('//*[@id="mat-tab-label-0-1"]/div')).click();
//     await element(by.xpath('//*[@id="mat-tab-content-0-1"]/div/div/input')).sendKeys("Chevron").then(function () {
//         browser.sleep(3000);
//         return element(by.xpath('//*[@id="mat-tab-content-0-1"]/div/ul/li/a/span')).click();

//     })
//     await element(by.xpath('/html/body/app-root/app-home/app-my-nav/mat-sidenav-container/mat-sidenav-content/app-master-collection/div/div[2]/div/div/div/div[5]/button/i')).click().then(function () {
//         browser.sleep(3000)
//         return element(by.xpath('//*[@id="cdk-overlay-0"]/div/div/button[2]')).click();
//     })
//     await element(by.xpath('//*[@id="mat-dialog-0"]/app-assessment-activity-auth-config/mat-card/mat-card-content/div[2]/form/div[1]/input')).sendKeys("Test");
//     await element(by.name("create-activity")).click();
//     let filePath = "C:\\Users\\Administrator\\Downloads\\BTSMATCH-EXCEL with YAML.xlsx"
//     //let fpath=path.resolve("C:",filePath)
//     await element(by.id('file-input')).sendKeys(filePath).then(async function () {
//         await element(by.name('upload')).click();
//         return browser.sleep(3000)

//     })

// });

// Then('I will check the {string} error message displayed on page for mandatory field', async function (errorMessage) {
//     var elem: ElementFinder = element(by.cssContainingText('.mat-raised-button', 'Next'));
//     await browser.executeScript("arguments[0].scrollIntoView(true);", elem);
//     await elem.click();
//     var message:ElementFinder=element(by.xpath('//li[contains(text(),"'+errorMessage+'")]'))
//     await browser.executeScript("arguments[0].scrollIntoView(true);", message);
//     await browser.wait(EC.visibilityOf(message),15000)
//     await expect(message).isDisplayed().to.be.true;



// });

// Then('I will fillout the user profile form', async function () {
//     await element(by.id('mat-select-0')).click();
//     await element(by.cssContainingText('.mat-option', 'Male')).click();
//     await element(by.id('mat-select-1')).click();
//     await element(by.cssContainingText('.mat-option', 'Asian')).click();
//     var elem: ElementFinder = element(by.id('mat-select-2'));
//     await browser.executeScript("arguments[0].scrollIntoView(true);", elem);
//     await elem.click();
//     await element(by.cssContainingText('.mat-option', '20-30')).click();

// });

// Then('I will fillout the Single Horizontal form', async function () {
//     var locate = "As long as I get my point across, it is not important to be completely accurate."
//     var xpath = "//h4[contains(text(),'" + locate + "')]/following-sibling::app-radio/div[1]/mat-radio-group/mat-radio-button[2]"
//     await element(by.xpath(xpath)).click();

// });
// Then('I will fillout the MBA1 Pages', async function () {
//     await browser.wait(EC.invisibilityOf(element(by.className('loader'))), 25000)
//     await browser.wait(EC.visibilityOf(element(by.xpath('//app-email/div/div/div[1]/div[1]/div[1]/div[2]/span[1]'))), 25000)
//     await element(by.xpath('//app-email/div/div/div[1]/div[1]/div[1]/div[2]/span[1]')).getText().then(async function (text1) {
//         await expect(text1).to.equal('Steve - Btsdigital@bts.com')

//     })
//     await element(by.cssContainingText('.mat-tab-label', 'Decisions')).click();
//     await browser.sleep(3000)
//     // await element(by.xpath('//app-radio/div/div/mat-radio-group/mat-radio-button[3]')).click();
//     // await element(by.cssContainingText('.mat-raised"button','Next'))
//     // await expect(element(by.xpath('//li[contains(text(),"mandatory")]')).isPresent()).to.be.true;
//     await element(by.xpath('//app-radio/div/div/mat-radio-group/mat-radio-button[2]')).click();
//     await element(by.xpath('//app-radio/div/div/mat-radio-group/mat-radio-button[4]')).click();
//     await element(by.xpath('//app-radio/div/div/mat-radio-group/mat-radio-button[1]')).click();
//     await element(by.xpath('//app-radio/div/div/mat-radio-group/mat-radio-button[2]')).click();
//     await element(by.xpath('//app-radio/div/div/mat-radio-group/mat-radio-button[2]')).click();
//     await browser.sleep(2000)

// });
// Then('I will fillout the LocalisedMBA1 Pages', async function () {
//     await browser.wait(EC.invisibilityOf(element(by.className('loader'))), 25000)
//     await browser.wait(EC.visibilityOf(element(by.xpath('//app-email/div/div/div[1]/div[1]/div[1]/div[2]/span[1]'))), 25000)
//     await element(by.xpath('//app-email/div/div/div[1]/div[1]/div[1]/div[2]/span[1]')).getText().then(async function (text1) {
//         await expect(text1).to.equal('Steve - Btsdigital@bts.com')

//     })
//     await element(by.cssContainingText('.mat-tab-label', 'Decisions')).click();
//     await browser.sleep(3000)
//     // await element(by.xpath('//app-radio/div/div/mat-radio-group/mat-radio-button[3]')).click();
//     // await element(by.cssContainingText('.mat-raised"button','Next'))
//     // await expect(element(by.xpath('//li[contains(text(),"mandatory")]')).isPresent()).to.be.true;
//     await expect(element(by.xpath('//span[contains(text(),"Very unlikely AU")]'))).to.be.true;
//     await expect(element(by.xpath('//span[contains(text(),"Unlikely AU")]'))).to.be.true;
//     await expect(element(by.xpath('//span[contains(text(),"Neither AU")]'))).to.be.true;
//     await expect(element(by.xpath('//span[contains(text(),"Likely AU")]'))).to.be.true;
//     await expect(element(by.xpath('//span[contains(text(),"Very Likely AU")]'))).to.be.true;
//     await element(by.xpath('//app-radio/div/div/mat-radio-group/mat-radio-button[2]')).click();
//     await browser.sleep(3000)
//     await expect(element(by.xpath('//span[contains(text(),"Very unlikely AU")]'))).to.be.true;
//     await expect(element(by.xpath('//span[contains(text(),"Unlikely AU")]'))).to.be.true;
//     await expect(element(by.xpath('//span[contains(text(),"Neither AU")]'))).to.be.true;
//     await expect(element(by.xpath('//span[contains(text(),"Likely AU")]'))).to.be.true;
//     await expect(element(by.xpath('//span[contains(text(),"Very Likely AU")]'))).to.be.true;
//     await element(by.xpath('//app-radio/div/div/mat-radio-group/mat-radio-button[4]')).click();
//     await browser.sleep(3000)
//     await expect(element(by.xpath('//span[contains(text(),"Very unlikely AU")]'))).to.be.true;
//     await expect(element(by.xpath('//span[contains(text(),"Unlikely AU")]'))).to.be.true;
//     await expect(element(by.xpath('//span[contains(text(),"Neither AU")]'))).to.be.true;
//     await expect(element(by.xpath('//span[contains(text(),"Likely AU")]'))).to.be.true;
//     await expect(element(by.xpath('//span[contains(text(),"Very Likely AU")]'))).to.be.true;
//     await element(by.xpath('//app-radio/div/div/mat-radio-group/mat-radio-button[1]')).click();
//     await browser.sleep(3000)
//     await expect(element(by.xpath('//span[contains(text(),"Very unlikely AU")]'))).to.be.true;
//     await expect(element(by.xpath('//span[contains(text(),"Unlikely AU")]'))).to.be.true;
//     await expect(element(by.xpath('//span[contains(text(),"Neither AU")]'))).to.be.true;
//     await expect(element(by.xpath('//span[contains(text(),"Likely AU")]'))).to.be.true;
//     await expect(element(by.xpath('//span[contains(text(),"Very Likely AU")]'))).to.be.true;
//     await element(by.xpath('//app-radio/div/div/mat-radio-group/mat-radio-button[2]')).click();
//     await browser.sleep(3000)
//     await expect(element(by.xpath('//span[contains(text(),"Very unlikely AU")]'))).to.be.true;
//     await expect(element(by.xpath('//span[contains(text(),"Unlikely AU")]'))).to.be.true;
//     await expect(element(by.xpath('//span[contains(text(),"Neither AU")]'))).to.be.true;
//     await expect(element(by.xpath('//span[contains(text(),"Likely AU")]'))).to.be.true;
//     await expect(element(by.xpath('//span[contains(text(),"Very Likely AU")]'))).to.be.true;
//     await element(by.xpath('//app-radio/div/div/mat-radio-group/mat-radio-button[2]')).click();
//     await browser.sleep(2000)

// });
// Then('I will fillout the MBA2 Pages', async function () {
//     // await element(by.xpath('//app-email/div/div/div[1]/div[1]/div[1]/div[2]/span[1]')).getText().then(async function (text1) {
//     //     await  expect(text1).to.equal('SaleUp - btsdigital@bts.com')

//     // })
//     await browser.wait(EC.invisibilityOf(element(by.className('loader'))), 25000)
//     await browser.wait(EC.visibilityOf(element(by.xpath('//app-email/div/div/div[1]/div[1]/div[1]/div[2]/span[1]'))), 25000)
//     await element(by.xpath('//div[contains(text(),"Decisions")]')).click();
//     await browser.sleep(3000)
//     await element(by.xpath('//app-radio/div/div/mat-radio-group/mat-radio-button[3]')).click();
//     await element(by.xpath('//app-radio/div/div/mat-radio-group/mat-radio-button[2]')).click();
//     await element(by.xpath('//app-radio/div/div/mat-radio-group/mat-radio-button[4]')).click();
//     await element(by.xpath('//app-radio/div/div/mat-radio-group/mat-radio-button[1]')).click();
//     await element(by.xpath('//app-radio/div/div/mat-radio-group/mat-radio-button[2]')).click();
//     await browser.sleep(2000)

// });

// Then('I will fillout the Single Vertical form', async function () {
//     var locate1 = "How do you typically react when you are asked to do something new and challenging"
//     var locate2 = "During my most recent year of work or school, I was late for non-approved reasons:"
//     var xpath = "//h4[contains(text(),'" + locate1 + "')]/following-sibling::app-radio/mat-radio-group/mat-radio-button[1]"
//     var elem1 = element(by.xpath(xpath));
//     await browser.wait(EC.visibilityOf(elem1), 20000)
//     await elem1.click();
//     var xpath1 = "//h4[contains(text(),'" + locate2 + "')]/following-sibling::app-radio/mat-radio-group/mat-radio-button[3]"
//     element(by.xpath(xpath1)).click();

// });

// Then('I will fillout the texts form', async function () {
//     var elem1 = element(by.id('mat-input-0'));
//     browser.wait(EC.visibilityOf(elem1), 20000)
//     await elem1.clear().then(function () {
//         elem1.sendKeys('It is some random text')
//     })
// });

// Then('I will fillout the Variable Grid form', async function () {
//     await element(by.xpath('//app-default/div/div[1]/div/div[1]/app-variable-grid/div/mat-radio-group[1]/div[2]/mat-radio-button')).click();
//     await element(by.xpath('//app-default/div/div[1]/div/div[1]/app-variable-grid/div/mat-radio-group[2]/div[4]/mat-radio-button')).click();
//     await element(by.xpath('//app-default/div/div[1]/div/div[1]/app-variable-grid/div/mat-radio-group[3]/div[6]/mat-radio-button')).click();
//     await element(by.xpath('//app-default/div/div[1]/div/div[1]/app-variable-grid/div/mat-radio-group[4]/div[5]/mat-radio-button')).click();
//     await element(by.xpath('//app-default/div/div[1]/div/div[2]/app-variable-grid/div/mat-radio-group/div[3]/mat-radio-button')).click();
//     await element(by.xpath('//app-default/div/div[1]/div/div[3]/app-variable-grid/div/mat-radio-group[1]/div[6]/mat-radio-button')).click();
//     await element(by.xpath('//app-default/div/div[1]/div/div[3]/app-variable-grid/div/mat-radio-group[2]/div[2]/mat-radio-button')).click();
//     await element(by.xpath('//app-default/div/div[1]/div/div[3]/app-variable-grid/div/mat-radio-group[3]/div[5]/mat-radio-button')).click();
//     await element(by.xpath('//app-default/div/div[1]/div/div[3]/app-variable-grid/div/mat-radio-group[4]/div[3]/mat-radio-button')).click();
//     return browser.sleep(2000)
// });
// Then('I will fillout the MBA3 Pages', async function () {
//     // await element(by.xpath('//app-email/div/div/div[1]/div[1]/div[1]/div[2]/span[1]')).getText().then(async function (text1) {
//     //     await  expect(text1).to.equal('Moe - Btsdigital@bts.com')

//     // })
//     await browser.wait(EC.invisibilityOf(element(by.className('loader'))), 25000)
//     await browser.wait(EC.visibilityOf(element(by.xpath('//app-email/div/div/div[1]/div[1]/div[1]/div[2]/span[1]'))), 25000)
//     //await element(by.cssContainingText('.mat-tab-label', 'Decisions')).click();
//     await element(by.xpath('//div[contains(text(),"Decisions")]')).click();
//     await browser.sleep(3000)
//     await element(by.xpath('//app-radio/div/div/mat-radio-group/mat-radio-button[3]')).click();
//     await element(by.xpath('//app-radio/div/div/mat-radio-group/mat-radio-button[2]')).click();
//     await element(by.xpath('//app-radio/div/div/mat-radio-group/mat-radio-button[4]')).click();
//     await element(by.xpath('//app-radio/div/div/mat-radio-group/mat-radio-button[1]')).click();
//     await browser.sleep(2000)

// });
// Then('I will fillout the MBA4 Pages', async function () {
//     // await element(by.xpath('//app-email/div/div/div[1]/div[1]/div[1]/div[2]/span[1]')).getText().then(async function (text1) {
//     //     await  expect(text1).to.equal('Alex - Btsdigital@bts.com')

//     // })
//     await browser.wait(EC.invisibilityOf(element(by.className('loader'))), 25000)
//     await browser.wait(EC.visibilityOf(element(by.xpath('//app-email/div/div/div[1]/div[1]/div[1]/div[2]/span[1]'))), 25000)
//     // await element(by.cssContainingText('.mat-tab-label', 'Decisions')).click();
//     await element(by.xpath('//div[contains(text(),"Decisions")]')).click();
//     await browser.sleep(3000)
//     await element(by.xpath('//app-radio/div/div/mat-radio-group/mat-radio-button[3]')).click();
//     await element(by.xpath('//app-radio/div/div/mat-radio-group/mat-radio-button[2]')).click();
//     await element(by.xpath('//app-radio/div/div/mat-radio-group/mat-radio-button[4]')).click();
//     await element(by.xpath('//app-radio/div/div/mat-radio-group/mat-radio-button[1]')).click();
//     await element(by.xpath('//app-radio/div/div/mat-radio-group/mat-radio-button[3]')).click();
//     await element(by.xpath('//app-radio/div/div/mat-radio-group/mat-radio-button[2]')).click();
//     await element(by.xpath('//app-radio/div/div/mat-radio-group/mat-radio-button[5]')).click();
//     await browser.sleep(2000)

// });


// Then('I will fillout the Single Vertical form', async function () {
//     var locate1 = "How do you typically react when you are asked to do something new and challenging"
//     var locate2 = "During my most recent year of work or school, I was late for non-approved reasons:"
//     var xpath = "//h4[contains(text(),'" + locate1 + "')]/following-sibling::app-radio/mat-radio-group/mat-radio-button[1]"
//     var elem1 = element(by.xpath(xpath));
//     await browser.wait(EC.visibilityOf(elem1), 20000)
//     await elem1.click();
//     var xpath1 = "//h4[contains(text(),'" + locate2 + "')]/following-sibling::app-radio/mat-radio-group/mat-radio-button[3]"
//     element(by.xpath(xpath1)).click();

// });

// Then('I will fillout the texts form', async function () {
//     var elem1 = element(by.id('mat-input-0'));
//     browser.wait(EC.visibilityOf(elem1), 20000)
//     await elem1.clear().then(function () {
//         elem1.sendKeys('It is some random text')
//     })
// });

// Then('I will fillout the Variable Grid form', async function () {
//     await element(by.xpath('//app-default/div/div[1]/div/div[1]/app-variable-grid/div/mat-radio-group[1]/div[2]/mat-radio-button')).click();
//     await element(by.xpath('//app-default/div/div[1]/div/div[1]/app-variable-grid/div/mat-radio-group[2]/div[4]/mat-radio-button')).click();
//     await element(by.xpath('//app-default/div/div[1]/div/div[1]/app-variable-grid/div/mat-radio-group[3]/div[6]/mat-radio-button')).click();
//     await element(by.xpath('//app-default/div/div[1]/div/div[1]/app-variable-grid/div/mat-radio-group[4]/div[5]/mat-radio-button')).click();
//     await element(by.xpath('//app-default/div/div[1]/div/div[2]/app-variable-grid/div/mat-radio-group/div[3]/mat-radio-button')).click();
//     await element(by.xpath('//app-default/div/div[1]/div/div[3]/app-variable-grid/div/mat-radio-group[1]/div[6]/mat-radio-button')).click();
//     await element(by.xpath('//app-default/div/div[1]/div/div[3]/app-variable-grid/div/mat-radio-group[2]/div[2]/mat-radio-button')).click();
//     await element(by.xpath('//app-default/div/div[1]/div/div[3]/app-variable-grid/div/mat-radio-group[3]/div[5]/mat-radio-button')).click();
//     await element(by.xpath('//app-default/div/div[1]/div/div[3]/app-variable-grid/div/mat-radio-group[4]/div[3]/mat-radio-button')).click();
//     return browser.sleep(2000)
// });

// Then('I will upload the assesment name {string} and open {string} preview page',async (assessmentname, pagename) =>{
//     await browser.wait(EC.invisibilityOf(element(by.xpath('//div[@class="loader_container"]'))), 50000)
//     var assesment: ElementFinder = element(by.xpath('//p[contains(text(),"' + assessmentname+ '")]'))
//     await browser.executeScript("arguments[0].scrollIntoView(true);", assesment);
//     await browser.wait(EC.elementToBeClickable(assesment), 15000)
//     await assesment.isDisplayed().then(function (displayed) {
//         expect(displayed).to.be.true
//     })
//     await assesment.click();
//     await browser.wait(EC.invisibilityOf(element(by.xpath('//div[@class="loader_container"]'))), 50000)
//     var pages: ElementFinder = element(by.xpath('//li[contains(text(),"'+pagename+'")]'))
//     await browser.executeScript("arguments[0].scrollIntoView(true);", pages);
//     await browser.wait(EC.visibilityOf(element(by.xpath('//li[contains(text(),"'+pagename+'")]'))),25000)
//     await pages.click();



// })

// Then('I will fillout the Mba Email form', async function () {

//     await element(by.xpath('//app-email/div/div/div[1]/div[1]/div[1]/div[2]/span[1]')).getText().then(function (text1) {
//         return expect(text1).to.equal('Steve - Btsdigital@Bts.Com')

//     })
//     await element(by.xpath('//app-email/div/div/div[1]/div[2]/span[1]')).getText().then(function (text2) {
//         return expect(text2).to.equal('To')

//     })
//     await element(by.cssContainingText('.mat-tab-label', 'Decisions')).click();
//     await element(by.xpath('//app-radio/div/div/mat-radio-group/mat-radio-button[3]')).click();
//     await element(by.xpath('//app-radio/div/div/mat-radio-group/mat-radio-button[2]')).click();
//     await element(by.xpath('//app-radio/div/div/mat-radio-group/mat-radio-button[4]')).click();
//     return browser.sleep(2000)
// });

// Then('I will fillout the Mba Calender form', async function () {

//     await element(by.xpath('//app-mba-calender/div/div/div[1]/h3/span')).getText().then(function (text1) {
//         return expect(text1).to.equal(' project kick-Off: Oasis Dining Room Project ')

//     })

//     await element(by.cssContainingText('.mat-tab-label', 'Decisions')).click();
//     await element(by.xpath('//app-radio/div/div/mat-radio-group/mat-radio-button[1]')).click();
//     await element(by.xpath('//app-radio/div/div/mat-radio-group/mat-radio-button[2]')).click();
//     await element(by.xpath('//app-radio/div/div/mat-radio-group/mat-radio-button[5]')).click();
//     await element(by.xpath('//app-radio/div/div/mat-radio-group/mat-radio-button[4]')).click();
//     return browser.sleep(2000)
// });

// Then('I will fillout the Mba Messenger form', async function () {

//     await element(by.xpath('//app-mba-messenger/div/div/div[1]/div[1]/div[2]')).getText().then(function (text1) {
//         return expect(text1).to.equal(' steve ')

//     })

//     await element(by.cssContainingText('.mat-tab-label', 'Decisions')).click();
//     await element(by.xpath('//app-radio/div/div/mat-radio-group/mat-radio-button[3]')).click();
//     await element(by.xpath('//app-radio/div/div/mat-radio-group/mat-radio-button[2]')).click();
//     await element(by.xpath('//app-radio/div/div/mat-radio-group/mat-radio-button[5]')).click();

//     return browser.sleep(2000)
// });

// Then('I will fillout barcode form', async function () {
//     await element(by.cssContainingText('.btn__decision[_ngcontent-urp-c39]', ' Show the Question ')).click()
//     await element(by.cssContainingText('.mat-radio-label', '10012346579802')).click();

// });

// Then('I will fillout the SIM1 form', async function () {
//     var element = element(by.xpath('//app-default/div/div[1]/div/div[1]/app-radio/div/div/mat-radio-group/mat-radio-button[4]'));
//     await browser.actions().mouseMove(element).perform().then(function () {
//         return element.click();

//     })
//     var element1 = element(by.xpath('//app-default/div/div[1]/div/div[2]/app-radio/div/div/mat-radio-group/mat-radio-button[2]'));
//     await browser.actions().mouseMove(element1).perform().then(function () {
//         return element1.click();

//     })
//     var element2 = element(by.xpath('//app-default/div/div[1]/div/div[3]/app-radio/div/div/mat-radio-group/mat-radio-button[1]'));
//     await browser.actions().mouseMove(element2).perform().then(function () {
//         return element2.click();

//     })
//     var element3 = element(by.xpath('//app-default/div/div[1]/div/div[4]/app-radio/div/div/mat-radio-group/mat-radio-button[2]'));
//     await browser.actions().mouseMove(element3).perform().then(function () {
//         return element3.click();

//     })


// });
// Then('I will fillout the SIM2 form', async function () {
//     await element(by.cssContainingText('.mat-radio-label', ' Very Unlikely ')).click()


// });

// Then('I will check the Title is {string}', async function (title) {
//     await browser.sleep(5000);
//     await browser.wait(EC.invisibilityOf(element(by.className('loader'))), 25000)
//     await element(by.tagName("h3")).getText().then(async function (text) {
//         // console.log("the Header is    " + text)
//         var tr = element(by.tagName('h3'))

//         await browser.wait(EC.visibilityOf(tr), 10000)
//         await expect(title).to.equal(text)

//     })
// });
// Then('I will select file', async function () {

//     var fileToUpload = 'Downloads/BTSMatch SampleAssessment.xlsx'

// });
// Then('I will fillout the polar form', async function () {
//     browser.sleep(1000);
//     var elem = element(by.name('pick-5df33e16639ad600d7c649aa'));
//     browser.wait(EC.visibilityOf(elem), 10000)
//     await elem.click();
//     await browser.sleep(2000)
//     // browser.actions().mouseMove(product).perform().then(function(){
//     //     product.click();
//     //     browser.sleep(2000);
//     // })

// });
// Then('I will fillout matrix form', async function () {
//     var elem: ElementFinder = element(by.xpath('//app-default/div/div[1]/div/div[2]/app-radio/div/div/mat-radio-group/mat-radio-button[4]'));
//     await browser.executeScript("arguments[0].scrollIntoView(true);", elem);
//     await elem.click();
//     var element2: ElementFinder = element(by.xpath('//app-default/div/div[1]/div/div[4]/app-radio/div/div/mat-radio-group/mat-radio-button[3]'));
//     await browser.executeScript("arguments[0].scrollIntoView(true);", element2);
//     await element2.click();
//     var element3: ElementFinder = element(by.xpath('//app-default/div/div[1]/div/div[6]/app-radio/div/div/div/div/mat-radio-group/div[2]'));
//     await browser.executeScript("arguments[0].scrollIntoView(true);", element3);
//     await element3.click();
//     var element4: ElementFinder = element(by.xpath('//app-default/div/div[1]/div/div[8]/app-radio/div/div/mat-radio-group/mat-radio-button[1]'));
//     await browser.executeScript("arguments[0].scrollIntoView(true);", element4);
//     await element4.click();
//     var nextButton: ElementFinder = element(by.cssContainingText('.mat-raised-button', ' Next'));
//     await browser.executeScript("arguments[0].scrollIntoView(true);", nextButton);
//     await nextButton.click();
//     var element5: ElementFinder = element(by.xpath('//app-default/div/div[1]/div/div[2]/app-radio/div/div/div/div/mat-radio-group/div[2]'));
//     await browser.executeScript("arguments[0].scrollIntoView(true);", element5);
//     await element5.click();
//     var element6: ElementFinder = element(by.xpath('//app-default/div/div[1]/div/div[4]/app-radio/div/div/div/div/mat-radio-group/div[4]'));
//     await browser.executeScript("arguments[0].scrollIntoView(true);", element6);
//     await element6.click();
//     var element7: ElementFinder = element(by.xpath('//app-default/div/div[1]/div/div[6]/app-radio/div/div/div/div/mat-radio-group/div[1]'));
//     await browser.executeScript("arguments[0].scrollIntoView(true);", element7);
//     await element7.click();
//     var element8: ElementFinder = element(by.xpath('//app-default/div/div[1]/div/div[8]/app-radio/div/div/mat-radio-group/mat-radio-button[5]'));
//     await browser.executeScript("arguments[0].scrollIntoView(true);", element8);
//     await element8.click();
//     var nextButton: ElementFinder = element(by.cssContainingText('.mat-raised-button', ' Next'))
//     await browser.executeScript("arguments[0].scrollIntoView(true);", element8);
//     await nextButton.click();
//     var element9: ElementFinder = element(by.xpath('//app-default/div/div[1]/div/div[2]/app-radio/div/div/div/div/mat-radio-group/div[1]'));
//     await browser.executeScript("arguments[0].scrollIntoView(true);", element9);
//     await element9.click();
//     var element10: ElementFinder = element(by.xpath('//app-default/div/div[1]/div/div[4]/app-radio/div/div/div/div/mat-radio-group/div[1]'));
//     await browser.executeScript("arguments[0].scrollIntoView(true);", element10);
//     await element10.click();
//     var element11: ElementFinder = element(by.xpath('//app-default/div/div[1]/div/div[5]/app-radio/div/div/div/div/mat-radio-group/div[1]'));
//     await browser.executeScript("arguments[0].scrollIntoView(true);", element11);
//     await element11.click();
//     var nextButton: ElementFinder = element(by.cssContainingText('.mat-raised-button', ' Next'))
//     await browser.executeScript("arguments[0].scrollIntoView(true);", nextButton);
//     await nextButton.click();
// }),

//     Then('I will Log Out from user account', async function () {
//         await element(by.cssContainingText('.mat-icon', 'more_vert')).click().then(function () {
//             browser.sleep(3000)
//             return element(by.cssContainingText('.mat-menu-item', 'Logout')).click();

//         })

//     });

// Then('I will click on {string} button', async function (locator) {
//     await browser.sleep(1000);
//     // browser.ignoreSynchronization = true;
//     var elem: ElementFinder = await element(by.cssContainingText('.mat-raised-button', locator));
//     await browser.executeScript("arguments[0].scrollIntoView(true);", elem);
//     await browser.wait(EC.visibilityOf(elem), 20000)
//     await browser.wait(EC.elementToBeClickable(elem), 20000)
//     await elem.click();
//     await browser.sleep(2000);

// });

// Then('I will start the assessment', async function () {
//     await browser.sleep(1000);
//     var elem1: ElementFinder = await element.all(by.cssContainingText('.mat-raised-button', 'Start')).get(1)
//     await browser.executeScript("arguments[0].scrollIntoView(true);", elem1);
//     await browser.wait(EC.visibilityOf(elem1), 20000)
//     await browser.wait(EC.elementToBeClickable(elem1), 20000);
//     await elem1.click();
//     await browser.sleep(5000);
// });

// Then('I will navigate to cloud CMS page', async function () {
//     await browser.sleep(1000);
//     browser.waitForAngularEnabled(false)
//     await browser.get(config.cloudCMS)
// });

// Then('I will enter credentials to cloud CMS', async function () {
//     await browser.sleep(1000);
//     browser.waitForAngularEnabled(false)
//     await element(by.id('username')).click().then(function () {
//         element(by.id('username')).sendKeys("neha_seth")
//     })
//     await element(by.id('password')).click().then(function () {
//         element(by.id('password')).sendKeys("Cont3ntCl0ud")
//     })
//     await element(by.xpath('//button[contains(text(),"Login")]')).click();
//     await browser.sleep(5000)
// });

// Then('I will navigate to assessment details page', async function () {
//     await browser.sleep(1000);
//     browser.waitForAngularEnabled(false)
//     await element(by.linkText("Momenta Development")).click();
//     await element(by.xpath('//a[@href="#/projects/103e88a1d9dc870024ae/content"]')).click();
//     await element(by.xpath('//a[@href="/#/projects/103e88a1d9dc870024ae/content/bts:content"]')).click();
//     await element(by.xpath('//input[@type="search"]')).click().then(function () {
//         return element(by.xpath('//input[@type="search"]')).sendKeys("Test Assessment2")
//     })
//     await element(by.xpath('//a[contains(text(),"Test Assessment2")]')).click();
//     var elem: ElementFinder = await element(by.xpath('//label[contains(text(),"S3")]'))
//     await browser.executeScript("arguments[0].scrollIntoView(true);", elem);
//     await elem.isDisplayed().then(function (bool) {
//         expect(bool).to.be.true;

//     })


// });

// Then('I will check the texts fields with css scripting', async function () {
//     await browser.sleep(1000);
//     var cross = 'pqr"><script>alert("xss")</script>';
//     var elem1 = element(by.id('mat-input-0'));
//     browser.wait(EC.visibilityOf(elem1), 20000)
//     await btsMatchPage.sendCrossScript(elem1, cross)
//     await elem1.sendKeys("164.32")
//     var elem2 = element(by.id('mat-input-1'))
//     await browser.wait(EC.visibilityOf(elem2), 20000)
//     await btsMatchPage.sendCrossScript(elem2, cross)
//     var elem3 = element(by.id('mat-input-2'));
//     await browser.wait(EC.visibilityOf(elem3), 20000)
//     await btsMatchPage.sendCrossScript(elem3, cross)
//     var key = browser.actions().sendKeys(protractor.Key.ENTER)
//     key.perform().then(function () {
//         browser.wait(EC.visibilityOf(elem3), 20000)
//         btsMatchPage.sendCrossScript(elem3, cross)
//     })

// });
// Then('I click on radiobuttons', async function () {
//     browser.sleep(6000);
//     let array: string[] = ['mat-radio-5', 'mat-radio-12', 'mat-radio-16']
//     var size = array.length;
//     for (var i = 0; i < size; i++) {
//         await browser.sleep(4000)
//         console.log("The size is  " + size);
//         console.log("the element" + i + " is  " + array[i])
//         var locator = element(by.id(array[i]))
//         //  console.log("locator is "+locator)
//         // await btsMatchPage.radioselectwithscroll(locator)

//     }

//     element(by.id(array[0])).click();
//     var elem1 = element(by.id(array[1]));
//     var elemclick = browser.actions().mouseMove(elem1)
//     await elemclick.perform()
//     await browser.wait(EC.visibilityOf(elem1));
//     await elem1.click();
//     //     var elemclick= browser.actions().mouseMove(elem1)
//     //     await elemclick.perform();
//     //     await elem1.click();
//     //     var elem2=element(by.id("mat-radio-12"))
//     //     var elemclick= browser.actions().mouseMove(elem2)
//     //     await elemclick.perform()
//     //     await browser.wait(EC.visibilityOf(elem2));
//     //     await  elem2.click();
//     //     await  browser.sleep(6000)
//     //     var elem3=element(by.id("mat-radio-17"))
//     //     var elemclick= browser.actions().mouseMove(elem3)
//     //     await elemclick.perform()
//     //     await browser.wait(EC.visibilityOf(elem3));
//     //     await  elem3.click();
//     return browser.sleep(6000)
// })

// Then('I enter {string} in textbox having id {string}', async function (value, id) {
//     // browser.sleep(3000);
//     // browser.ignoreSynchronization = true
//     //browser.waitForAngularEnabled(false)
//     await element(by.id(id)).click();
//     await element(by.id(id)).clear();
//     await element(by.id(id)).sendKeys(value)

// });
// Then('I will change the language to {string} from dropdown having id {string}', async function (value, id) {
//     browser.sleep(1000);
//     await element(by.id(id)).click();
//     await element(by.cssContainingText('.mat-option-text', value)).click();
//     await browser.sleep(1000);

// });
// Then('I check value of dropdown to be {string} of dropdown having id {string}', async function (value, id) {
//     browser.sleep(1000);
//     await element(by.id(id)).getText().then(function (text) {
//         expect(text).to.equal(value)
//     })

// });

// Then('I will check the survey page field with css scripting', async function () {
//     await browser.sleep(1000);
//     var cross = 'pqr"><script>alert("xss")</script>';
//     var elem1 = element(by.id('mat-input-0'));
//     browser.wait(EC.visibilityOf(elem1), 20000)
//     await btsMatchPage.sendCrossScript(elem1, cross)

// });

// Then('I click on button having id {string}', async function (id) {
//     browser.sleep(1000);
//     await browser.waitForAngularEnabled(false)
//     await element(by.id(id)).click();
//     return browser.sleep(3000)
// });

// Then('I check the text should contains the timestamp', async function () {
//     await browser.sleep(1000);
//     await element(by.id('participent')).getText().then(function (text) {
//         expect(text).to.contains("https://btsmatchtest.btspulse.com/login/index.html");
//         console.log("checked " + text)

//     })
// })
// Then('I will check the html component is displayed', async function () {
//     await browser.sleep(1000)
//     await element(by.cssContainingText('.html-content[_ngcontent-mvr-c15]', 'This is the instruction which will show on both random sim pages. ')).getText().then(function (text) {
//         console.log("passs   " + text)
//     })

// }),



//     Then('I will fillout the MBA form', async function () {
//         browser.sleep(4000);
//         await element(by.xpath("//h3/span[contains(text(),'hard to take someone seriously at work')]")).getText().then(function (Text) {
//             console.log("the question is:  " + Text);
//         })
//         await element(by.cssContainingText('.mat-radio-label-content', 'Strongly Agree')).click();
//         browser.sleep(3000)

//     });

// Then('I select question as {string} and answer as {string}', async function (question, answer) {
//     await browser.sleep(1000);
//     if (answer === "Strongly Disagree" || answer === " I enjoy having the challenge" || answer === " 0 times " || answer === " People don't rock the boat too often ") {
//         var i = 1;
//     }
//     if (answer === "Disagree" || answer === "I enjoy it if I am pretty sure I can be successful" || answer === " 5 times " || answer === "People are expected to confront others who stabd in the way") {
//         var i = 2;
//     }
//     if (answer === "Neither Agree nor Disagree" || answer === " I do it, but probably won't either enjoy or dislike it that much. " || answer === "10-20 times") {
//         var i = 3;
//     }
//     if (answer === "Agree" || answer === " I do it, but don’t like it " || answer === " 30-40 times ") {
//         var i = 4;
//     }
//     if (answer === "Strongly Agree" || answer === " I try to see if there isn't someone else who can do it " || answer === "40-50 times") {
//         var i = 5;
//     }
//     // var elem=  element(by.cssContainingText('h3', question)).gettext();
//     var xpath = "//h3[contains(text(),'" + question + "')]/following-sibling::app-radio/mat-radio-group/mat-radio-button[" + i + "]"
//     //console.log("elemeny is    "+xpath);
//     await element(by.cssContainingText('h3', question)).getText().then(function (text) {
//         console.log("I answer question--   " + question);

//     })
//     await btsMatchPage.selectRadio(xpath);
//     await element(by.xpath(xpath)).getText().then(function (text) {
//         console.log(text)
//         expect(text).to.equal(answer)
//     })
//     await browser.sleep(1000);
// });



// Then('I will select question {string} and selects answer for is {string} from dropdown having id {string}', async function (locator, value, id) {
//     await browser.sleep(1000)
//     await element(by.cssContainingText('h3', locator)).getText().then(function (text) {
//         console.log("I answer question--   " + locator);

//     })
//     await browser.sleep(1000)
//     await btsMatchPage.selectDropdownValue(value, id);
//     await element(by.id(id)).getText().then(function (text) {
//         console.log(text)
//         expect(text).to.equal(value);
//     })

// });
// Then('I will select other journyes from dropdowns', async function () {
//     await element(by.name('select journey')).click().then(function () {
//         element(by.xpath('//li[contains(text(),"Browse ")]')).click();
//     })
//     await element(by.xpath('//div[contains(text(),"Test Journey")]')).click();

// });

// Then('I will select {string} from dropdown having name {string}', async function (value,locator) {
//     await browser.sleep(1000)
//     await browser.wait(EC.elementToBeClickable(element(by.xpath('//i[contains(text(),"menu")]'))),30000)
//     await element(by.xpath('//i[contains(text(),"menu")]')).click();
//     await browser.wait(EC.elementToBeClickable(element(by.name(locator))),30000)
//     await element(by.name(locator)).click()
//     await browser.wait(EC.elementToBeClickable(element(by.cssContainingText('.mat-option-text',value))),30000)
//    await element(by.cssContainingText('.mat-option-text',value)).click();
//    await browser.wait(EC.invisibilityOf(element(by.className('loader'))),25000)
// });

// Then('I will press {string} Key', async function (keyToPress) {
//     if (keyToPress === "TAB") {
//         var key = browser.actions().sendKeys(protractor.Key.TAB)
//         key.perform().then(function () {
//             console.log("switch to element on ");
//             browser.sleep(2000)
//         })
//     }
//     if (keyToPress === "Down") {
//         var key = browser.actions().sendKeys(protractor.Key.ARROW_DOWN)
//         key.perform().then(function () {
//             console.log("switch to element on ");
//         })
//     }
//     if (keyToPress === "Right") {
//         var key = browser.actions().sendKeys(protractor.Key.ARROW_RIGHT)
//         key.perform().then(function () {
//             console.log("switch to element on ");
//             browser.sleep(2000)
//         })
//     }

// }),

//     Then('I will press {string} Key and currently I am on element having text {string}', async function (keyToPress, text) {


//         await browser.sleep(2000)
//         if (keyToPress === "TAB") {
//             var key = browser.actions().sendKeys(protractor.Key.TAB)
//             key.perform().then(function () {
//                 browser.switchTo().activeElement().getText().then(function (value) {
//                     console.log("I am currently on " + value);
//                     expect(value).to.contains(text)

//                 })

//             })

//         }
//         if (keyToPress === "ENTER") {
//             // browser.switchTo().activeElement().getText().then(function (value){
//             //     console.log("I am currently on "+value);
//             //     expect(value).to.contains(text)

//             // })
//             var key = browser.actions().sendKeys(protractor.Key.ENTER)
//             key.perform();
//             browser.sleep(2000)

//         }
//         if (keyToPress === "ARROWUP") {
//             var key = browser.actions().sendKeys(protractor.Key.ARROW_UP)
//             key.perform().then(function () {
//                 browser.switchTo().activeElement().getText().then(function (value) {
//                     console.log("I am currently on " + value);
//                     expect(value).to.contains(text)

//                 })

//             })
//         }
//         if (keyToPress === "ARROWDOWN") {
//             var key = browser.actions().sendKeys(protractor.Key.ARROW_DOWN)
//             key.perform().then(function () {

//                 browser.switchTo().activeElement().getText().then(function (value) {
//                     console.log("I am currently on " + value);
//                     expect(value).to.contains(text)

//                 })
//             })
//         }
//         if (keyToPress === "ARROWRIGHT") {
//             var key = browser.actions().sendKeys(protractor.Key.ARROW_RIGHT)
//             key.perform().then(function () {

//                 browser.switchTo().activeElement().getText().then(function (value) {
//                     console.log("I am currently on " + value);
//                     expect(value).to.contains(text)

//                 })
//             })
//         }
//         if (keyToPress === "ARROWLEFT") {
//             var key = browser.actions().sendKeys(protractor.Key.ARROW_LEFT)
//             key.perform().then(function () {

//                 browser.switchTo().activeElement().getText().then(function (value) {
//                     console.log("I am currently on " + value);
//                     expect(value).to.contains(text)

//                 })
//             })
//         }
//         if (keyToPress === "SPACE") {
//             var key = browser.actions().sendKeys(protractor.Key.SPACE)
//             key.perform().then(function () {

//                 browser.switchTo().activeElement().getText().then(function (value) {
//                     console.log("I am currently on " + value);
//                     expect(value).to.contains(text)

//                 })
//             })
//         }
//         //  browser.switchTo().activeElement().getText().then(function (value){
//         //     console.log("I am currently on "+value);
//         //     expect(value).to.contains(text)

//         // })

//         // var statements= "protractor.Key."+keyToPress;
//         //console.log("Sequence is  "+ statements)


//     });

// Then('I will press TAB Key and I select option {string}', async function (option) {
//     var tab = browser.actions().sendKeys(protractor.Key.TAB)
//     tab.perform();

//     if (option === "Strongly Disagree" || option === " I enjoy having the challenge" || option === " 0 times " || option === " People don't rock the boat too often ") {
//         var key = browser.actions().sendKeys(protractor.Key.ARROW_RIGHT)
//         key.perform().then(function () {
//             var key = browser.actions().sendKeys(protractor.Key.ARROW_LEFT)
//             key.perform()
//         })
//     }
//     if (option === "Disagree" || option === "I enjoy it if I am pretty sure I can be successful" || option === " 5 times " || option === "People are expected to confront others who stabd in the way") {
//         var key = browser.actions().sendKeys(protractor.Key.ARROW_RIGHT)
//         key.perform();


//     }
//     if (option === "Neither Agree nor Disagree" || option === " I do it, but probably won't either enjoy or dislike it that much. " || option === "10-20 times") {
//         var key = browser.actions().sendKeys(protractor.Key.ARROW_RIGHT)
//         key.perform().then(function () {
//             browser.sleep(1000)
//             return key.perform();
//         })

//     }
//     if (option === "Agree" || option === " I do it, but don’t like it " || option === " 30-40 times ") {
//         var key = browser.actions().sendKeys(protractor.Key.ARROW_RIGHT)
//         key.perform();
//         browser.sleep(1000)
//         key.perform();
//         browser.sleep(1000)
//         key.perform();
//     }
//     if (option === "Strongly Agree" || option === " I try to see if there isn't someone else who can do it " || option === "40-50 times") {
//         var key = browser.actions().sendKeys(protractor.Key.ARROW_RIGHT)
//         key.perform();
//         browser.sleep(1000)
//         key.perform();
//         browser.sleep(1000)
//         key.perform();
//         browser.sleep(1000)
//         key.perform();
//     }
// });
// Then('I will check text contains {string}', async function (value) {

//     await browser.sleep(1000)
//     await element(by.className("dataContainer")).getText().then(async function (text) {
//         //console.log(text)
//         await expect(text).to.contains(value);
//         return browser.sleep(2000)
//     })
// })

// Then('I will check i am on report page', async function () {

//     await browser.sleep(2000)
//     await browser.getCurrentUrl().then(function (text) {
//         console.log("the current url " + text)
//         return expect(text).to.equal("https://btsmatchtest.btspulse.com/#/report")
//     })
//     await browser.wait(EC.visibilityOf(element(by.cssContainingText('h3 ', 'Welcome to the assessement'))), 30000)
//     await element(by.cssContainingText('h3 ', 'Welcome to the assessement')).getText().then(function (title) {
//         return expect(title).to.contains('Welcome to the assessement')
//     })
//     return browser.sleep(5000);
// })


// Then('I will answer question {string} and answer in {string} as {string}', async function (question, id, value) {
//     await browser.sleep(1000);
//     await element(by.cssContainingText('h3', question)).getText().then(function (text) {
//         console.log("I answer question--   " + question)
//         expect(text).to.contains(question);

//     })
//     await btsMatchPage.type(id, value);
//     console.log(value)
//     // await element(by.id(id)).getText().then(function(text){

//     //     console.log(text);
//     //     expect(text).to.equal(value);
//     // })
// });

// //custom methods for checking the selected answers



// Then('I check answer of {string} should be {string} of dropdown having id {string}', async function (locator, value, id) {
//     await browser.sleep(1000)
//     await element(by.cssContainingText('h3', locator)).getText().then(function (locator) {
//         console.log("the question is " + locator);
//     })
//     await browser.sleep(1000)
//     await element(by.id(id)).getText().then(function (text) {
//         console.log("answer is" + text)
//         expect(value).to.equal(text)
//     })

// });
// Then('I will click on {string} icon on header', async function (locator) {
//     await browser.sleep(1000)
//     await element(by.cssContainingText('.mat-icon', locator)).click().then(async function () {
//         await browser.sleep(2000)
//     })


// });
// Then('I check answer of {string} should be {string}', async function (locator, value) {
//     await browser.sleep(1000)
//     await element(by.cssContainingText('h3', locator)).getText().then(function (locator) {
//         console.log("We are checking answer for " + locator);
//     })
//     await browser.sleep(1000)

//     var elemen = "//h3[contains(text(),'" + locator + "')]/following-sibling::app-radio/mat-radio-group//mat-radio-button[@class='example-margin mat-radio-button mat-radio-checked mat-accent ng-star-inserted']"
//     element(by.xpath(elemen)).getText().then(function (text) {

//         expect(text).to.equal(value)

//     })

// });
// Then('I check the answer of {string} and answer of {string} should be {string}', async function (locator, id, value) {
//     await browser.sleep(1000)
//     await element(by.cssContainingText('h3', locator)).getText().then(function (locator) {
//         console.log("We are checking answer for " + locator);
//     })
//     await browser.sleep(1000)

//     await element(by.id(id)).getText().then(function (text) {
//         return console.log("Entered value is " + value)

//     })

// });
// Then('I will fillout bipolar form', async function () {
//     browser.sleep(1000);
//     //await element(by.cssContainingText('.icon-radio[_ngcontent-nho-c24] .icon-radio-icon[_ngcontent-nho-c24]',locator)).click();
//     await element(by.xpath('//app-bipolar/div[1]/div[2]/div[3]/app-icon-radio[1]/label/mat-icon')).click();
//     browser.sleep(2000);
// })

// //German Methods

// Then('I will fillout the German user profile form', async function () {
//     await element(by.id('mat-select-1')).click();
//     await element(by.cssContainingText('.mat-option-text', 'Männlich')).click();
//     await element(by.id('mat-select-2')).click();
//     await element(by.cssContainingText('.mat-option-text', ' Schwarzer oder Afroamerikaner ')).click();
//     await element(by.id('mat-select-3')).click();
//     await element(by.cssContainingText('.mat-option-text', '20-30')).click();

// });

// Then('I will fillout the German Single Horizontal form', async function () {
//     var locate = "Solange ich meine Argumentation verdeutliche, ist es nicht wichtig, vollständig korrekt zu sein."
//     var xpath = "//h3[contains(text(),'" + locate + "')]/following-sibling::app-radio/mat-radio-group/mat-radio-button[1]"
//     element(by.xpath(xpath)).click();

// });

// Then('I will fillout the German Single Vertical form', async function () {
//     var locate1 = "Wie reagieren Sie normalerweise, wenn Sie aufgefordert werden, etwas Neues und Herausforderndes zu tun?"
//     var locate2 = "Während meines letzten Arbeits- oder Schuljahres kam ich aus nicht genehmigten Gründen zu spät:"
//     var xpath = "//h3[contains(text(),'" + locate1 + "')]/following-sibling::app-radio/mat-radio-group/mat-radio-button[3]"
//     var elem1 = element(by.xpath(xpath));
//     await browser.wait(EC.visibilityOf(elem1), 20000)
//     await elem1.click();
//     var xpath1 = "//h3[contains(text(),'" + locate2 + "')]/following-sibling::app-radio/mat-radio-group/mat-radio-button[3]"
//     element(by.xpath(xpath1)).click();

// });

// Then('I will fillout the German texts form', async function () {
//     var elem1 = element(by.id('mat-input-0'));
//     var questions = ['Ein Kunde möchte einen Modezug für 54,80 USD, einen Baumschmuck für 2,99 USD und', 'Wie heißt dein Haustier?', 'Erzähl mir etwas über dich in wenigen Worten.']
//     for (var i = 0; i < 3; i++) {
//         await element(by.cssContainingText('h3', questions[i])).getText().then(function (text) {
//             return expect(text).to.contains(questions[i])

//         })
//     }
//     await browser.wait(EC.visibilityOf(elem1), 20000)
//     await elem1.sendKeys('65.12');
//     var elem2 = element(by.id('mat-input-1'))
//     await browser.wait(EC.visibilityOf(elem2), 20000)
//     await elem2.sendKeys('Tommy');
//     var elem3 = element(by.id('mat-input-2'));
//     await browser.wait(EC.visibilityOf(elem3), 20000)
//     await elem3.sendKeys('this is first line');
//     var key = browser.actions().sendKeys(protractor.Key.ENTER)
//     key.perform().then(function () {
//         browser.wait(EC.visibilityOf(elem3), 20000)
//         elem3.sendKeys('this is second line');
//     })
// });

// Then('I will fillout the German SIM1 form', async function () {
//     var locate1 = "Ich fördere die Werte der Organisation, für die ich arbeite."
//     var locate2 = "Professionelles Handeln ist in der Geschäftswelt ein Muss."
//     var locate3 = "Es ist wichtig, ein scharfes Bild von sich selbst bei der Arbeit zu zeichnen."
//     var xpath = "//h3[contains(text(),'" + locate1 + "')]/following-sibling::app-radio/mat-radio-group/mat-radio-button[3]"
//     var elem = element(by.xpath(xpath));
//     browser.wait(EC.visibilityOf(elem), 20000);
//     elem.click();
//     var xpath1 = "//h3[contains(text(),'" + locate2 + "')]/following-sibling::app-radio/mat-radio-group/mat-radio-button[5]"
//     var elem1 = element(by.xpath(xpath1));
//     browser.wait(EC.visibilityOf(elem1), 20000);
//     elem1.click();
//     var xpath2 = "//h3[contains(text(),'" + locate3 + "')]/following-sibling::app-radio/mat-radio-group/mat-radio-button[1]"
//     var elem2 = element(by.xpath(xpath2));
//     browser.wait(EC.visibilityOf(elem2), 20000);
//     elem2.click();


// });
// Then('I will fillout the German SIM2 form', async function () {
//     var locate1 = "wenn Sie für eine Organisation arbeiten."
//     var locate2 = "Am Arbeitsplatz ist es wichtig, gut gepflegt zu sein."
//     var xpath = "//h3[contains(text(),'" + locate1 + "')]/following-sibling::app-radio/mat-radio-group/mat-radio-button[2]";
//     //
//     var elem = element(by.xpath(xpath));
//     browser.wait(EC.visibilityOf(elem), 20000);
//     elem.click();
//     var xpath1 = "//h3[contains(text(),'" + locate2 + "')]/following-sibling::app-radio/mat-radio-group/mat-radio-button[4]"
//     var elem1 = element(by.xpath(xpath1));
//     browser.wait(EC.visibilityOf(elem1), 20000);
//     elem1.click();


// });

// Then('I will fillout German bipolar form', async function () {
//     browser.sleep(1000);
//     var question = "Geben Sie an, inwieweit Sie diesen beiden Aussagen zustimmen";
//     await element(by.cssContainingText('h3', question)).getText().then(function (text) {
//         return expect(text).to.contains(question)

//     })
//     //await element(by.cssContainingText('.icon-radio[_ngcontent-nho-c24] .icon-radio-icon[_ngcontent-nho-c24]',locator)).click();
//     await element(by.xpath('/html/body/app-root/app-home/div[1]/app-default/div[1]/div/app-bipolar/div[4]/app-icon-radio[2]/label/mat-icon')).click();
//     browser.sleep(2000);
// })

// Then('I will fillout the German polar form', async function () {
//     browser.sleep(1000);
//     var elem = element(by.id('mat-radio-20'));
//     browser.wait(EC.visibilityOf(elem), 10000)
//     await elem.click();
//     await browser.sleep(2000)
//     var questions = "Was denkst du über das Verhalten von Menschen?";
//     await element(by.cssContainingText('h3', questions)).getText().then(function (text) {
//         return expect(questions).to.equal(text);

//     })
//     // browser.actions().mouseMove(product).perform().then(function(){
//     //     product.click();
//     //     browser.sleep(2000);
//     // })

// });

// Then('I will fillout the German MBA form', async function () {
//     browser.sleep(4000);
//     await element(by.xpath("//h3/span[contains(text(),' wenn er sich nicht um sein Aussehen kümmert')]")).getText().then(function (Text) {
//         console.log("the question is:  " + Text);
//     })
//     await element(by.cssContainingText('.mat-radio-label-content', 'Stimme voll zu')).click();
//     browser.sleep(3000)

// });

// Then('I will answer all German questions', async function () {
//     await browser.sleep(2000);
//     var questions = ['1. Welche Form soll', '2. Welche Nummer soll', '3. Welches der folgenden', '4. Welcher Wert soll in das', '5. Welche Buchstaben sollten', '6. Welche Form sollte in das', '7. Sie finden ein Blumengelb.', '8. Welches der folgenden Muster ', '9. Welcher Buchstabe soll dem ', '10. Sie beobachten folgendes', '11. Ein STREAM fließt ', '12. EIN BERG ist', '13. Ein BUMPA ist']
//     for (var i = 0; i <= 13; i++) {
//         await element(by.cssContainingText('h3', questions[i])).getText().then(function (text) {
//             return expect(text).to.comtains(questions[i])

//         })

//     }
//     for (var i = 1; i < 15;) {
//         var key = browser.actions().sendKeys(protractor.Key.TAB)
//         await key.perform().then(async function () {
//             var secondKey = browser.actions().sendKeys(protractor.Key.RIGHT)
//             await secondKey.perform();

//         })
//         i++;
//     }
// });
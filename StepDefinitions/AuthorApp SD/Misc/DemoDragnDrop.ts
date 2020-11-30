import { Given, Then, When } from "cucumber";
import { browser, By,by, element, ElementFinder, protractor } from "protractor";



When('User clicks on DragnDrop content', async function () {
    await element(By.xpath("//p[contains(text(),'Demo_Drag_&_Drop')]")).isDisplayed().then(async function(){
        await element(By.xpath("//p[contains(text(),'Demo_Drag_&_Drop')]")).click().then(async function(){
            await browser.sleep(4000);
        })
    })
});

When('User clicks on Content Tab for DragnDrop', async function () {
    await element(By.xpath("(//div[contains(text(),'Content')])[2]")).isDisplayed().then(async function(){
        await element(By.xpath("(//div[contains(text(),'Content')])[2]")).click().then(async function(){
            await browser.sleep(4000);
        })
    })
});

When('User drags and drop', async function () {
    //var fromEle=element(by.css('div.mat-list-item-content'));
    var fromEle=element(By.xpath("(//div[@class='mat-list-item-ripple mat-ripple'])[1]"));
    var toEle=element(By.css('div#cdk-drop-list-0.blocks-container.edit-area.cdk-drop-list'));
    await browser.actions().mouseMove(fromEle).perform();
    await browser.sleep(6000);
    await browser.actions().mouseDown(fromEle).perform();
    await browser.sleep(6000);
    await browser.actions().mouseMove(toEle).perform();
    await browser.sleep(6000);
    await browser.actions().mouseUp(toEle).perform();
    await browser.sleep(6000);
})
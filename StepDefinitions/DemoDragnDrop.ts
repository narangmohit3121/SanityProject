import { Given, Then, When } from "cucumber";
import { browser, By,by, element, ElementFinder, protractor } from "protractor";



When('User clicks on DragnDrop content', async function () {
    await element(By.xpath("//p[contains(text(),'Demo_Drag_&_Drop')]")).isDisplayed().then(async function(){
        await element(By.xpath("//p[contains(text(),'Demo_Drag_&_Drop')]")).click().then(async function(){
            browser.sleep(4000);
        })
    })
});

When('User drags and drop', async function () {
    var fromEle=element(by.css('div.mat-list-item-content'));
    var toEle=element(by.css('div#cdk-drop-list-0.blocks-container.edit-area.cdk-drop-list'));
    await browser.actions().mouseMove(fromEle).perform();
    await browser.sleep(6000);
    await browser.actions().mouseDown(fromEle).perform();
    await browser.sleep(6000);
    await browser.actions().mouseMove(toEle).perform();
    await browser.sleep(6000);
    await browser.actions().mouseUp(toEle).perform();
    await browser.sleep(6000);
})
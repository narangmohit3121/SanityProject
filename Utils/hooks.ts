//var {After, Before, Status} = require('cucumber');
import {After, Before, Status, AfterAll} from "cucumber";
import { browser } from "protractor";


Before({tags: "@DemoRun"}, function () {
    browser.manage().window().maximize();
    console.log("Browser Maximized success")
});

After(async function(scenario) {
    if(scenario.result.status=== Status.FAILED)
    {
        const screenshotTaken = await browser.takeScreenshot();
        this.attach(screenshotTaken, "image/png");
    }

});

AfterAll(async function(){
    browser.quit();
})

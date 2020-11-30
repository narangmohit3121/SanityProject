import { browser, By, element, ElementFinder, protractor, WebElement, ProtractorExpectedConditions } from "protractor";
import { CommonLocate } from "../PageObjects/Common";
import { ParticipantActivityPageLocate } from "../PageObjects/UserApp POM/My Journey/ParticipantActivityPage";
import config from "./config.json";

export class participantHelperFunctions{

    participantactivitypage = new ParticipantActivityPageLocate();

    public async login(userName:string,password:string):Promise<void>{
        await browser.waitForAngularEnabled(false);
        let participantActivity = this.participantactivitypage;
        await browser.getCapabilities().then(async function (caps) {
            let browserName: string = caps.get("browserName");
            //console.log(browserName);
            if (browserName === 'internet explorer' || browserName === 'Safari') {
                browser.resetUrl = 'about:blank';
            }
        })
        await browser.get(config.MomentaParticipant).then(async function () {
            
            await participantActivity.p_emailID.sendKeys(userName);
            await participantActivity.p_password.sendKeys(password).then(async function () {
                await participantActivity.p_loginButton.click().then(async function () {
                    await browser.sleep(8000);
                })
            })
        });
        await browser.waitForAngularEnabled(true);
    }
}
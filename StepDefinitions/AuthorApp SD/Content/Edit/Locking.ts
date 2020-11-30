import {When} from "cucumber";
import {browser} from "protractor";
import { LockingLocate } from "../../../../PageObjects/AuthorApp POM/Content/Edit/Locking";
import config from "../../../config.json";
import { ParticipantResponseBlockPageLocate } from "../../../../PageObjects/AuthorApp POM/Content/Create/ParticipantResponseBlock-Authoring";
let locking = new LockingLocate();
let participantresponseblock = new ParticipantResponseBlockPageLocate();


When('Admin one clicks on Locking Content block', async function () {
    await locking.cntLockingContent.isDisplayed().then(async function(){
        await locking.cntLockingContent.click();
    })
  });

  When('Admin two should login with {string} and {string}', async function (string, string2) {
    await browser.get(config.MomentaUserUrl).then(async function () {
        await participantresponseblock.txtLoginEmailId.sendKeys(string).then(async function () {
          await participantresponseblock.btnNext.click();
        })
      })
      await participantresponseblock.txtLoginPassword.sendKeys(string2).then(async function () {
        await participantresponseblock.btnLogin.click();
      })
  });

  When('Admin two clicks on Locked Content block', async function () {
    await locking.lockedCntLockingContent.isDisplayed().then(async function(){
      await locking.lockedCntLockingContent.click().then(async function(){
        await locking.btnViewReadOnly.isDisplayed().then(async function(){
          await locking.btnViewReadOnly.click().then(async function(){
            await browser.sleep(3000).then(async function(){
              await locking.icnReadyOnly.isDisplayed();
            })
          })
        })
      })
    })
  });
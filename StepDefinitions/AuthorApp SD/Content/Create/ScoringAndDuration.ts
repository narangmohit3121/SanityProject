import { Given, When, Then } from "cucumber";
import { browser, element, protractor } from "protractor";
import config from "../../../config.json"
import chai = require('chai');
import { Alert } from "selenium-webdriver";
import { By } from "protractor";
import { async } from "q";

var EC = protractor.ExpectedConditions;


import { ScoringAndDurationPageLocate } from "../../../../PageObjects/AuthorApp POM/Content/Create/ScoringAndDurationPage";

var expect = chai.expect;


// let scoringduration = ScoringAndDurationPageLocate();
let scoringduration = new ScoringAndDurationPageLocate();

let expectedPoinofflabel = "Off";
let expecteddurationofflabel = "Off";

let expectedPoinOnlabelAfetrclick = "On";
let expecteddurationOnlabelAfterclick = "On";

let expectedPoints = "5";
let expectedDuration = "5";

let expectPointsParticipant = "5 Points";


When('User click on Sprint 18 folder', async function () {
    await scoringduration.Sprint18Fld.isDisplayed().then(async function () {
        await scoringduration.Sprint18Fld.click().then(async function () {
            await browser.sleep(2000);
        })
    })
});

When('User click 1957 Scoring And Duration content', async function () {
    await scoringduration.ScoreDurrationCnt.isDisplayed().then(async function () {
        await scoringduration.ScoreDurrationCnt.click().then(async function () {
            await browser.sleep(2000);
        })
    })
});

Then('User should be able to change the state of Number of Points and Expected Duration toggles', { timeout: 12 * 1000 }, async function () {

    //browser.ignoreSynchronization = true;

    await scoringduration.NumberOfPointsOffLbl.getText().then(async function (actualonumberfflabel) {
        await scoringduration.NumberOfPointsOffBtn.click();
        await scoringduration.NumberOfPointsOffLbl.getText().then(async function (currentLabel) {
            if (actualonumberfflabel == "Off") {
                expect(currentLabel).to.equal("On");
            }
            else {
                expect(currentLabel).to.equal("Off");
            }
        })

    })

    await scoringduration.DurationOffLbl.getText().then(async function (actualdurationofflabel) {
        await scoringduration.DurationOffBtn.click();
        await scoringduration.DurationOffLbl.getText().then(async function (currentLabel) {
            if (actualdurationofflabel == "Off") {
                expect(currentLabel).to.equal("On");
            }
            else {
                expect(currentLabel).to.equal("Off");
            }
        })

    })
});


When('User click on Number of Points and Expected Duration toggles button', async function () {
    await scoringduration.NumberOfPointsOffBtn.isDisplayed().then(async function () {
        await scoringduration.NumberOfPointsOffBtn.click().then(async function () {
            await browser.sleep(2000);

        })
    })

    await scoringduration.DurationOffBtn.isDisplayed().then(async function () {
        await scoringduration.DurationOffBtn.click().then(async function () {
            await browser.sleep(2000);

        })
    })

});

Then('User turns on Number of Points and Expected Duration toggle buttons', { timeout: 12 * 1000 }, async function () {

    await scoringduration.NumberOfPointsOffLbl.getText().then(async function (currentLabel) {
        if (currentLabel == "Off") {
            await scoringduration.NumberOfPointsOffBtn.click();
        }
    })

    await scoringduration.DurationOffLbl.getText().then(async function (currentLabel) {
        if (currentLabel == "Off") {
            await scoringduration.DurationOffBtn.click();
        }
    })
});

When('User click 5 times on pluse icon to increase the points and Duration', async function () {

    await scoringduration.PointsTextFieldTxt.clear().then(async function () {

    });
    // await scoringduration.PointsPlusBtn.isDisplayed().then(async function () {

    // });
    for (let i = 0; i < 5; i++) {
        await scoringduration.PointsPlusBtn.click().then(async function () {
            await browser.sleep(500)
        });
    }
    await scoringduration.DurationTextFieldTxt.clear().then(async function () {

    });
    // await scoringduration.DurationMinutesPlusBtn.isDisplayed().then(async function () {

    // });
    for (let i = 0; i < 5; i++) {
        await scoringduration.DurationMinutesPlusBtn.click().then(async function () {
            await browser.sleep(500)

        });
    }
});



Then('User should see 5 number in point and duration textfield', { timeout: 12 * 1000 }, async function () {

    await scoringduration.PointsTextFieldTxt.isDisplayed().then(async function () {
        await scoringduration.PointsTextFieldTxt.getAttribute('ng-reflect-model').then(async function (actualOnPoints) {
            expect(actualOnPoints).to.eql(expectedPoints);
        })
    })

    await scoringduration.DurationTextFieldTxt.isDisplayed().then(async function () {
        await scoringduration.DurationTextFieldTxt.getAttribute('ng-reflect-model').then(async function (actualOnDuration) {
            expect(actualOnDuration).to.eql(expectedDuration);
        })
    })
});


When("User click on SAVEDRAFT and PUBLISH button and exit editer", async function () {
    await scoringduration.SAVEDRAFTBtn.click().then(async function () {
        await browser.wait(EC.visibilityOf(scoringduration.toastMessageSuccess), 20000).then(async function () {
            await scoringduration.toastMessageSuccess.click().then(async function () {
                await browser.sleep(2000);
                await scoringduration.PUBLISHBtn.click().then(async function () {
                    await browser.wait(EC.visibilityOf(scoringduration.toastMessageSuccess), 20000).then(async function () {
                        await scoringduration.toastMessageSuccess.click().then(async function () {
                            await browser.sleep(2000);
                            await scoringduration.exitEditor.click().then(async function () {
                            })
                        })
                    })
                })
            })
        })
    })
});




When('Participant user land on petronas test valid url', async function () {
    await browser.get(config.MomentaParticipant).then(async function () {
        await browser.sleep(3000);
    });
});

When("User select an industry as {string} from industry vertical dropdown", async function (industryName) {
    browser.waitForAngularEnabled(false);
    await scoringduration.IndustryDDArrow.isPresent().then(async function (registrationReqd) {
        if (registrationReqd == true) {
            await scoringduration.IndustryDDArrow.click().then(async function () {
                let industryXpath: string = "//option[contains(text(),'" + industryName + "')]"
                await element(By.xpath(industryXpath)).click().then(async function () {
                    await scoringduration.ContinueBtn.click().then(async function () {
                        await browser.sleep(5000);
                    })
                })
            })
        }
    });
    browser.waitForAngularEnabled(true);
})

When('User select Financial Services vertical and click continue', async function () {
    await scoringduration.VerticalManshaRadioBtn.isDisplayed().then(async function () {
        await scoringduration.VerticalManshaRadioBtn.click().then(async function () {
            await browser.sleep(2000);

        })
    })

    await scoringduration.ContinueBtn.isDisplayed().then(async function () {
        await scoringduration.ContinueBtn.click().then(async function () {
            await browser.sleep(2000);

        })
    })
})


When('User click on start button to launch scoring and duration journey', async function () {
    browser.waitForAngularEnabled(false);

    await browser.sleep(8000).then(async function () {
        await scoringduration.StartBtn.isDisplayed().then(async function () {
            await scoringduration.StartBtn.click().then(async function () {

            })
        })
    })
});


Then('User should see points set by admin for this activity', { timeout: 12 * 1000 }, async function () {
    browser.waitForAngularEnabled(false);
    await browser.sleep(5000);

    //  browser.ignoreSynchronization = true;
    await scoringduration.FivePoints.isDisplayed().then(async function () {
        await scoringduration.FivePoints.getText().then(async function (actualPoint) {
            console.log(actualPoint);
            expect(expectPointsParticipant).to.equal(actualPoint);

        })
    })
    browser.waitForAngularEnabled(true);
});
import { Given, When, Then } from "cucumber";
import { browser, element } from "protractor";
import config from "../../../config.json"
import chai = require('chai');
import { Alert } from "selenium-webdriver";
import { By } from "protractor";
import { async } from "q";


var expect = chai.expect;



import { MultiSelectDropdownPageLocate } from "../../../../PageObjects/AuthorApp POM/Content/Create/MultiSelectDropdownPage.js";

let multiSelectionDropdown = new MultiSelectDropdownPageLocate();

let expected_product = "BTS Momenta Strategy Partner  and people connecton of online training for indusrial bas people";
let expected_Lotofoptionsmultiselectdropdown = "Lot of options in the multi select dropdown";


Then('user should see multi selectes dropdown', async function () {
    browser.waitForAngularEnabled(false);
    await browser.sleep(5000);
    await multiSelectionDropdown.selecteddActualoption.isDisplayed().then(async function (dropdownexist) {
            expect(dropdownexist).to.be.true;
    })
    browser.waitForAngularEnabled(true);
});



When('user select product as {string} from Long Text Dropdown', async function (industryName) {
     browser.waitForAngularEnabled(false);
    await browser.sleep(8000).then(async function () {
    await multiSelectionDropdown.LongTextDDArrow.isDisplayed().then(async function (ddArrow) {
        if (ddArrow == true) {
            await multiSelectionDropdown.LongTextDDArrow.click().then(async function () {
                let LongTextXpath: string = "//option[contains(text(),'" + industryName + "')]"
                await element(By.xpath(LongTextXpath)).click().then(async function () {
                    await browser.sleep(5000);
                    
                })
            })
        }
    })
})
    browser.waitForAngularEnabled(true);
})


Then('Long Text Dropdown Options  should be selected and displayed', async function () {
    browser.waitForAngularEnabled(false);
    await multiSelectionDropdown.selecteddActualoption.isSelected().then(async function (actualprductSelected) {
        console.log("text is"+actualprductSelected);
        expect(actualprductSelected).to.be.true;
    }) 
    browser.waitForAngularEnabled(true);
});


When('user clicks on continue button', async function () {
    browser.waitForAngularEnabled(false);
    await multiSelectionDropdown.ContinueBtn.isDisplayed().then(async function () {
        await multiSelectionDropdown.ContinueBtn.click().then(async function () {
            await browser.sleep(3000);
        })
    })
    browser.waitForAngularEnabled(true);
});

Then('user should be landed on Lot of options in the multi select dropdown', async function () {
    browser.waitForAngularEnabled(false);
    await multiSelectionDropdown.lotofoptionLbl.getText().then(async function (act_lotofoptionLbl) {
        expect(expected_Lotofoptionsmultiselectdropdown).to.equal(act_lotofoptionLbl);
        await browser.sleep(3000);
        })
    browser.waitForAngularEnabled(true);
});


When('user click  more than three options select from maximum number 3 dropdown', async function () {
    browser.waitForAngularEnabled(false);
    await multiSelectionDropdown.maximumthreeOptionDD.isDisplayed().then(async function () {
        await multiSelectionDropdown.maximumthreeOptionDD.click().then(async function () {
            await browser.sleep(1000);
        })
        await multiSelectionDropdown.functionalTestingddoption.click().then(async function () {
            await browser.sleep(1000);
        })

        await multiSelectionDropdown.automationddoption.click().then(async function () {
            await browser.sleep(1000);
        })

        await multiSelectionDropdown.apiddoption.click().then(async function () {
            await browser.sleep(1000);
        })

        await multiSelectionDropdown.QtpddOption.click().then(async function () {
            await browser.sleep(3000);
        })

    })
    browser.waitForAngularEnabled(true);
});


Then('user should not be allowed to select more than three itmes from dropdown', async function () {
    browser.waitForAngularEnabled(false);
    await multiSelectionDropdown.QtpddOption.isSelected().then(async function (actualprductSelected) {
        console.log("text is"+actualprductSelected);
        expect(actualprductSelected).to.be.false;
    browser.waitForAngularEnabled(true);
});
});



// When('user land on Participant Response Graph Page', async function () {
//     browser.waitForAngularEnabled(false);
//     await browser.sleep(6000);
//     browser.actions().click(element(By.xpath("//div[@class='mat-select-arrow-wrapper']"))).perform()
//      await multiSelectionDropdown.LongTextDDArrow.isDisplayed().then(async function () {
//          await browser.sleep(6000);
//         await multiSelectionDropdown.LongTextDDArrow.click().then(async function () {
//              await browser.sleep(3000);
//             console.log("Last clicked !!!");
//             await browser.sleep(6000);
//          })
//      })
//     browser.waitForAngularEnabled(true);
// });




When('user refresh the current page', async function () {
    
      browser.waitForAngularEnabled(false);
        browser.navigate().refresh();
  
      browser.waitForAngularEnabled(true);
      console.log("Refreshed Page !!!!!!!!!");
});


When('user land on Participant Response Page', async function () {
    browser.waitForAngularEnabled(false);
    await browser.sleep(5000);

   // browser.ignoreSynchronization = false;
   // browser.manage().window().maximize();
    browser.manage().window().setSize(1690, 1000);

    await browser.sleep(5000);
    console.log("last clicked !!!!");

    await multiSelectionDropdown.ContinueBtn.isDisplayed().then(async function () {
        await multiSelectionDropdown.ContinueBtn.click().then(async function () {
            await browser.sleep(1000);
            console.log("last clicked !!!!");
        })

  
      browser.waitForAngularEnabled(true);
  });
  
});
  



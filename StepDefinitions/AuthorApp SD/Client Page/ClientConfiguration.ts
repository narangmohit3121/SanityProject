import { Then, When } from "cucumber";
import { browser, By, element, protractor } from "protractor";
import { ClientConfigurationLocate } from "../../../PageObjects/AuthorApp POM/Client Page/ClientConfiguration";
import chai = require('chai');
let expect = chai.expect;
let path = require("path");
var EC = protractor.ExpectedConditions;
let clientconfiguration = new ClientConfigurationLocate();
let expconfigurationTabs: Array<string> = [];
let configurationTabs: Array<string> = ['Configuration\nMessaging\nLogo\nFonts\nColor Palette\nPassword Setup']; //'Configuration', 'Messaging', 'Logo Fonts', 'Color Palette', 'Password Setup', 'LMS', 'Themes', 'My Insights', 'Dashboard App Settings', 
//Primary color palette
let expcolorPalettePrimary: Array<string> = [];
let expcolorPaletteSecondary: Array<string> = [];
let expcolorPalette: Array<string> = [];
let actcolorPalette: Array<string> = ['#38B09D', '#2D8D7E', '#226A5E', '#16463F', '#0E2C27', '#DCA61F', '#B08519', '#846413', '#58420C', '#372A08'];

//Extended accents color palette
let expextendedColorPalette: Array<string> = [];
let actextendedColorPalette: Array<string> = ['#C8CD17', '#112E30', '#0074C8', '#2E48CC', '#6E3095', '#AD0E83', '#C61C52', '#D63F20'];

//Status indicators
let expstatusIndicatorColor: Array<string> = [];
let actstatusIndicatorColor: Array<string> = [];

//Neutrals on white
let expneutralsOnWhite: Array<string> = [];
let actneutralsOnWhite: Array<string> = ['#191919', '#5E5E5E', '#8C8C8C', '#BABABA', '#D1D1D1', '#E8E8E8', '#F4F4F4'];



When('User should click on Client Configuration logo', { timeout: 50 * 1000 }, async function () {
    await clientconfiguration.icoClientConfig.isDisplayed().then(async function () {
        await clientconfiguration.icoClientConfig.click().then(async function () {
            await browser.driver.switchTo().activeElement().then(async function () {
                await  browser.sleep(2000);
            })
        });
    })
});

Then('User should check if all tabs are visible on Client Configuration page', async function () {
    // browser.waitForAngularEnabled(false).then(async function () {


    // });
    await element.all(By.xpath("(//div[(contains(@class,'mat-tab-list'))])[2]")).each(async function (element, index) {
        //  browser.sleep(5000);
        await element.getText().then(async function (txt) {

            expconfigurationTabs.push(txt);
        })
    })
    //console.log(expconfigurationTabs);
    expect(expconfigurationTabs).to.include.members(configurationTabs);
    
});

When('User should click on Configuration Tab', async function () {
    await clientconfiguration.tabConfiguration.isDisplayed().then(async function () {
        await clientconfiguration.tabConfiguration.click();
    })
});

//Need to check
Then('User should check all options present under Configuration Tab', async function () {
    await clientconfiguration.lblSelectIndustry.isDisplayed().then(async function () {
        await clientconfiguration.lblEnterDomainLocation.isDisplayed().then(async function () {
            await clientconfiguration.lblAwsRegion.isDisplayed().then(async function () {
                await browser.sleep(2000);

            })
        })
    })
   
});


Then('User should should be able to select the dropdown option from select industry', async function () {
    await clientconfiguration.ddlSelectIndustryArrow.isDisplayed().then(async function () {
        await clientconfiguration.ddlSelectIndustryArrow.click().then(async function () {
           await browser.sleep(2000);
        })
    })
    await clientconfiguration.ddlSelectIndustryOption.isPresent().then(async function () {
        await clientconfiguration.ddlSelectIndustryOption.click().then(async function () {
            await browser.sleep(2000);

        })
    })
   
})

Then('User should should be able to select the dropdown option from select font family', async function () {
    await clientconfiguration.ddlSelectFontFamilyArrow.isDisplayed().then(async function () {
        await clientconfiguration.ddlSelectFontFamilyArrow.click().then(async function () {
            await browser.sleep(2000);
        })
    })
    await clientconfiguration.ddlSelectFontFamilyOption.isPresent().then(async function () {
        await clientconfiguration.ddlSelectFontFamilyOption.click().then(async function () {
           await browser.sleep(2000);

        })
    })
   
});

When('User should enter valid domain name in Enter Domain Location text field', async function () {
    await clientconfiguration.txtDomainLocation.isDisplayed().then(async function () {
        await clientconfiguration.txtDomainLocation.clear().then(async function () {
            await clientconfiguration.txtDomainLocation.sendKeys("petronas.com,bts.com")
        })
    })
});

When('User should enter invalid domain name in Enter Domain Location text field', function () {

});

Then('User clicks on Save button', async function () {
    await clientconfiguration.btnClientConfSave.isDisplayed().then(async function () {
        await clientconfiguration.btnClientConfSave.click().then(async function () {
            await browser.sleep(3000);

        })
    })
    
});

Then('User should click on Cancel button', async function () {
    await clientconfiguration.btnClientConfCancel.isDisplayed().then(async function () {
        await clientconfiguration.btnClientConfCancel.click().then(async function () {
            await browser.sleep(3000);

        })
    })
    
});

When('User should click on Logo Fonts Tab', async function () {
    await clientconfiguration.tabLogoFonts.isDisplayed().then(async function () {
        await clientconfiguration.tabLogoFonts.click().then(async function () {
            await browser.sleep(3000);
        });
    })
});

Then('User should view contents under Logo Fonts Tab', async function () {
    await clientconfiguration.lblSelectFontFamily.isDisplayed().then(async function () {
        await clientconfiguration.lblPositiveLogo.isDisplayed().then(async function () {
            await clientconfiguration.lblNegativeLogo.isDisplayed();

        })
    })
    
});

When('User should click on Color Palette Tab', { timeout: 50 * 1000 }, async function () {
    await clientconfiguration.tabColorPalette.isDisplayed().then(async function () {
        await clientconfiguration.tabColorPalette.click();
    })
});

Then('User should view contents under Color Palette Tab', async function () {
    await clientconfiguration.lblPrimaryColorPalette.isDisplayed().then(async function () {
        //await clientconfiguration.lblExtendedAccents.isDisplayed().then(async function () {     
            //await clientconfiguration.lblColorNeutrals.isDisplayed();

        })

    
});

Then('User should be able to close Client Configuration window by clicking on close icon', async function () {
    await clientconfiguration.icoClientConfigClose.isDisplayed().then(async function () {
        await clientconfiguration.icoClientConfigClose.click().then(async function () {
            await browser.sleep(2000);

        })
    })
    
});

Then('User should check if Enter AWS Region option is disabled', async function () {
    await clientconfiguration.txtAwsRegionDisabled.isEnabled();
  

});



Then('User should validate lists of color bars under Primary and Secondary Color Palette', async function () {
    await 
    await element.all(By.xpath("((//div[@class='mat-expansion-panel-body']/child::div[@class='d-flex ng-star-inserted'])[1])//child::div[@class='client__color-block ng-star-inserted']//p[@class='client__Palette-details']")).each(async function (element, index) {
        
        await element.getText().then(async function (pcolors) {
            expcolorPalettePrimary.push(pcolors);
            console.log(pcolors);
        })

    })


    await element.all(By.xpath("((//div[@class='mat-expansion-panel-body']/child::div[@class='d-flex ng-star-inserted'])[2])//child::div[@class='client__color-block ng-star-inserted']//p[@class='client__Palette-details']")).each(async function (element, index) {
        
        await element.getText().then(async function (scolors) {
            expcolorPaletteSecondary.push(scolors);
            console.log(scolors);
        })
    })

    expcolorPalette = expcolorPalettePrimary.concat(expcolorPaletteSecondary);
    expect(expcolorPalette).to.include.members(actcolorPalette);
    

})

When('User should click on first color of Primary Color menu', async function () {
    await clientconfiguration.cptPrimaryFirstColor.isDisplayed().then(async function () {
        await browser.sleep(2000);
        await clientconfiguration.cptPrimaryFirstColor.click();
    })
});


Then('User should be able to view color picker for Primary color', async function () {
    await clientconfiguration.cptPrimaryFirstColorUpdated.isDisplayed().then(async function () {
        await clientconfiguration.cptPrimaryFirstColorUpdated.click();
        //await browser.sleep(2000);

    })
    
});

When('User should click on first color of Secondary Color menu', async function () {
    await clientconfiguration.cptSecondaryFirstColor.isDisplayed().then(async function () {
        await clientconfiguration.cptSecondaryFirstColor.click();
    })
});

Then('User should be able to view color picker for Secondary color', async function () {
    await clientconfiguration.clpSecondaryColorPicker.isDisplayed().then(async function () {
        await browser.sleep(2000);

    })
    
});

When('User should click on first color of Neutrals on White menu', async function () {
    await clientconfiguration.cptNeutralsFirstColor.isDisplayed().then(async function () {
        await clientconfiguration.cptNeutralsFirstColor.click();
    })
});

Then('User should be able to view color picker for Neutrals on White', async function () {
    await clientconfiguration.clpNeutralsColorPicker.isDisplayed().then(async function () {
        await browser.sleep(2000);

    })
    
});

When('User should click on tab Extended Accents Color Palette', async function () {
    await clientconfiguration.lblExtendedAccents.isDisplayed().then(async function () {
        await clientconfiguration.lblExtendedAccents.click().then(async function () {
            await browser.sleep(2000);
        })
    })
})


When ('User should click on Other Client Color dropdown', async function(){
    await clientconfiguration.btnDDOtherClientColor.isDisplayed().then(async function(){
        await clientconfiguration.btnDDOtherClientColor.click();
    })

})


Then('User should validate lists of color bars under Extended Accents Color Palette', async function () {
    await element.all(By.xpath("((//div[@class='mat-expansion-panel-body']/child::div[@class='d-flex ng-star-inserted'])[3])//child::div[@class='client__color-block ng-star-inserted']//p[@class='client__Palette-details']")).each(async function (element, index) {
        await  element.getText().then(async function (excolors) {
            expextendedColorPalette.push(excolors);
            //console.log(excolors);
        })
    })
    expect(expextendedColorPalette).to.include.members(actextendedColorPalette);
    

});

Then('User should validate lists of color bars under Status Indicators menu', async function () {
    await clientconfiguration.cptExtendedAccentsList.each(async function (element, index) {
      await element.getText().then(async function (statcolors) {
            expstatusIndicatorColor.push(statcolors);

        })
    })
    
});

When('User should click on tab Neutrals on White', async function () {
    await clientconfiguration.lblColorNeutrals.isDisplayed().then(async function () {
        await clientconfiguration.lblColorNeutrals.click().then(async function () {
            await browser.sleep(2000);
        })
    })
});

When ('User should click on Neutral Color dropdown', async function(){
    await clientconfiguration.btnDDNeutralColor.isDisplayed().then(async function (){
        await clientconfiguration.btnDDNeutralColor.click();
        await browser.sleep(3000);
    })
})

Then('User should validate lists of color bars under Neutrals on White', async function () {
    await browser.sleep(3000);
    await clientconfiguration.cptNeutralsOnWhiteList.each(function (element, index) {
        element.getText().then(async function (neutralscolors) {
            expneutralsOnWhite.push(neutralscolors);
        })
    })
    
    expect(expneutralsOnWhite).to.include.members(actneutralsOnWhite);

});

Then('User should click on Positive logo Drap and Drop option', async function () {
    let filePath = "C:/Users/Administrator/Pictures/BTS/backgroundDefault.jpg";
    let fpath = path.resolve("C:", filePath);
    await clientconfiguration.lnkPositiveLogoBrowse.sendKeys(fpath).then(async function () {
        await browser.sleep(3000);

    })
   
});


Then('User should click on Negative logo Drap and Drop option', async function () {
    let filePath = "C:/Users/Administrator/Pictures/BTS/backgroundDefault.jpg";
    let fpath = path.resolve("C:", filePath);
    await clientconfiguration.lnkNegativeLogoBrowse.sendKeys(fpath).then(async function () {
        await browser.sleep(3000);

    })
    
});
When('User selects any one of the color from Primary colors', async function () {
    let elm = clientconfiguration.cptPrimaryFirstColor;
    await browser.executeScript("arguments[0].setAttribute('value', arguments[1]);", elm, "#17A8AE").then(async function () {
        await browser.sleep(3000);

    });
});

When('User selects any one of the color from Secondary colors', async function () {
    let elm = clientconfiguration.cptSecondaryFirstColor;
    await browser.executeScript("arguments[0].setAttribute('value', arguments[1]);", elm, "#8A638D").then(async function () {
        await browser.sleep(3000);
    });
});


When('User selects any one of the color from Status Indicator colors', async function () {
    let elm = clientconfiguration.cptStatusIndicatorFirstColor;
    await browser.executeScript("arguments[0].setAttribute('value', arguments[1]);", elm, "#8A638D").then(async function () {
        await browser.sleep(3000);
    });
});

When('User selects any one of the color from Neutrals on White', async function () {
    let elm = clientconfiguration.cptNeutralsFirstColor;
    await browser.executeScript("arguments[0].setAttribute('value', arguments[1]);", elm, "#7C7C7C").then(async function () {
        await browser.sleep(3000);
    });
});

Then('User clicks on More Menu from left panel', async function () {
    await clientconfiguration.cptSecondaryFirstColor.isDisplayed().then(async function () {
        await clientconfiguration.cptSecondaryFirstColor.click();

    })
    //await browser.close();
});
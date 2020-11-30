import { Given, Then, When } from "cucumber";
import { browser, By, element, ElementFinder, protractor, WebElement } from "protractor";
import config from "../../StepDefinitions/config.json";
import { AdminLandingPageLocate } from "../../PageObjects/AuthorApp POM/Home Page/AdminLandingPage";
import { ActivityAuthoringPageLocate } from "../../PageObjects/AuthorApp POM/Content/Create/CMSAuthoringPage";
import { MastheadPage } from "../../PageObjects/SanityProjectPages/MastheadPage";
import { CommonLocate } from "../../PageObjects/Common";
import { LoginPageLocate } from "../../PageObjects/AuthorApp POM/Login/LoginPage";
import { AuthorSanityPage } from "../../PageObjects/SanityProjectPages/AuthorSanityPage";
var support = require("protractor-firefox-support");

import chai = require("chai");
var expect = chai.expect;
var EC = protractor.ExpectedConditions;
import { join } from 'path';
import fs from 'fs';
import { DriverProvider } from "protractor/built/driverProviders";



let activityAuthorPage = new ActivityAuthoringPageLocate();
let admloginpage = new LoginPageLocate();
let admlandpage = new AdminLandingPageLocate();
let commonObjects = new CommonLocate();
let mastheadPage = new MastheadPage();
let authorSanityPage = new AuthorSanityPage();

let today: Date = new Date();
let dd: string = String(today.getDate()).padStart(2, '0');
let mm: string = String(today.getMonth() + 1).padStart(2, '0');
let year: number = today.getFullYear();
let hours: number = today.getHours();
//let minutes: number = today.getMinutes();
let minutes: string = today.getMinutes().toString().padStart(2, '0');
let currentDateTime: string = mm + '-' + dd + '-' + year + ' ' + hours + ':' + minutes;

let remote = require("protractor/node_modules/selenium-webdriver/remote");
if (browser.params.browserstackRun) {
    browser.setFileDetector(new remote.FileDetector);
}

When("User clicks on Sanity folder", async function () {
    await commonObjects.sanityFolder.click();
});

// When("User saves the changes made to the content", async function () {
//     await activityAuthorPage.editDoneButton.click().then(async function () {
//         await browser.sleep(2000);
//     })
// });



//---------------------------MASTHEAD BLOCK----------------------------------

When("User navigates to an activity having Masthead Block", async function () {
    await mastheadPage.editMastheadActivity.click();
})

When('User clicks on Edit Masthead button', async function () {
    browser.wait(EC.invisibilityOf(element(By.xpath("//div[contains(@class,'loader_container')]"))), 30 * 1000);
    await mastheadPage.btnEditMasthead.click();
});

When("User selects the Header Type as Full Screen", async function () {
    await mastheadPage.ddHeaderType.click().then(async function () {
        await mastheadPage.headerTypeFullScreen.click();
    })
})
let mastheadAutomationContent: string = "Masthead Automation Content:" + currentDateTime;
let mastheadAutomationHeading: string = "Masthead Automation Heading:" + currentDateTime;

When("User updates Masthead Content and Heading", async function () {
    await browser.executeScript(`arguments[0].innerText = '${mastheadAutomationContent}'`, mastheadPage.mastheadContentLastPara).then(async function () {
        await mastheadPage.mastheadContentLastPara.click().then(async function () {
            browser.sleep(2000);
        })
    });
    await browser.executeScript(`arguments[0].innerText = '${mastheadAutomationHeading}'`, mastheadPage.mastheadHeading).then(async function () {
        await mastheadPage.mastheadHeading.click().then(async function () {
            browser.sleep(2000);
        })
    });

    //mastheadPage.mastheadContentLastPara.sendKeys(mastheadAutomationContent);

});


Then("the edits done to Masthead should get saved", async function () {
    await mastheadPage.editMastheadActivity.click().then(async function () {
        await mastheadPage.mastheadPreviewContentLastPara.getText().then(async function (lastParagrpah) {
            expect(lastParagrpah).to.equal(mastheadAutomationContent);
        });
        await mastheadPage.mastheadPreviewHeading.getText().then(async function (heading) {
            expect(heading).to.equal(mastheadAutomationHeading);
        })
    });
    await activityAuthorPage.exitEditor.click().then(async function () {
        await browser.sleep(2000);
    });

})

// -------------------------VIDEO BLOCK---------------------------------------

let currentFullScreenSetting: string = "";
let currentAutoplaySetting: string = "";
let currentAutoNavigateSetting: string = "";
//let currentSecureSetting: string = "";

When("User changes the settings for Show Full Screen, Autoplay, and Auto Navigation", async function () {
    await activityAuthorPage.showFullScreenCurrentSetting.getAttribute("ng-reflect-model").then(async function (currentSetting1) {
        currentFullScreenSetting = currentSetting1;
        await activityAuthorPage.videoShowFullScreen.click().then(async function () {
            await browser.sleep(1000);
        })
    })

    await activityAuthorPage.autoplayCurrentSetting.getAttribute("ng-reflect-model").then(async function (currentSetting2) {
        currentAutoplaySetting = currentSetting2;
        await activityAuthorPage.videoAutoplay.click().then(async function () {
            await browser.sleep(1000);
        })
    })

    await activityAuthorPage.autonavigateCurrentSetting.getAttribute("ng-reflect-model").then(async function (currentSetting3) {
        currentAutoNavigateSetting = currentSetting3;
        await activityAuthorPage.videoAutonavigate.click().then(async function () {
            await browser.sleep(1000);
        })
    })

    await activityAuthorPage.editDoneButton.click();
    //newVideoURL = await activityAuthorPage.uploadedVideoSource.getAttribute("src");
})

Then('User should be able to preserve the changes done to Show Full Screen, Autoplay,and Auto Navigation', async function () {
    await browser.wait(EC.urlContains('masters'), 3000);
    await activityAuthorPage.sampleContentEditVideo.click();
    await activityAuthorPage.editVideoBtn.click().then(async function () {
        await activityAuthorPage.showFullScreenCurrentSetting.getAttribute("ng-reflect-model").then(async function (latestSetting) {
            if (currentFullScreenSetting == "true") {
                expect(latestSetting).to.equal("false");
            }
            else if (currentFullScreenSetting == "false") {
                expect(latestSetting).to.equal("true");
            }
            else {
                expect(true).to.be.false;
            }
        })

        await activityAuthorPage.autoplayCurrentSetting.getAttribute("ng-reflect-model").then(async function (latestSetting) {
            if (currentAutoplaySetting == "true") {
                expect(latestSetting).to.equal("false");
            }
            else if (currentAutoplaySetting == "false") {
                expect(latestSetting).to.equal("true");
            }
            else {
                expect(true).to.be.false;
            }
        })

        await activityAuthorPage.autonavigateCurrentSetting.getAttribute("ng-reflect-model").then(async function (latestSetting) {
            if (currentAutoNavigateSetting == "true") {
                expect(latestSetting).to.equal("false");
            }
            else if (currentAutoNavigateSetting == "false") {
                expect(latestSetting).to.equal("true");
            }
            else {
                expect(true).to.be.false;
            }
        })

    });
    await authorSanityPage.cancelEdit.click().then(async function () {
        await activityAuthorPage.exitEditor.click().then(async function () {
            await browser.sleep(2000);
        });
    });
});

//-----------------------------------------------------------------------------------------------------------------
//---------------------------------------------TEXT AND IMAGE BLOCK
let latestImageName: string = "";
When('User changes attached image by using BROWSE button', async function () {
    // await activityAuthorPage.chooseImageBtn.sendKeys("C:\\Users\\Administrator\\Desktop\\landscape.jpg").then(function () {
    //     browser.sleep(3000);
    // });
    let imagePath: string = "";
    await authorSanityPage.currentImageFileName.getText().then(function (fileName) {
        if (fileName.includes("cube")) {
            imagePath = join(process.cwd(), 'TestData', 'Bonfire.jpg');
            latestImageName = "Bonfire"
        }
        else {
            imagePath = join(process.cwd(), 'TestData', 'cube-1280.jpg');
            latestImageName = "cube-1280";
        }
    })
    await activityAuthorPage.btnUploadImage.click().then(async function () {
        await activityAuthorPage.browseImageBtn.sendKeys(imagePath).then(async function () {
            await browser.sleep(3000).then(async function () {
                await activityAuthorPage.btnUploadSelectedImage.click();
            })
        });
    })

})

let latestImageDescriptionLastPara: string = 'automation_text_image: ' + currentDateTime;
When('User updates the description of Text and Image Block', async function () {

    await browser.executeScript("arguments[0].innerText = '" + latestImageDescriptionLastPara + "'", authorSanityPage.imageDescriptionLastPara).then(async function () {
        await authorSanityPage.imageDescriptionLastPara.click().then(async function () {
            await browser.sleep(2000);
        })
    })
});

Then("the edits done to Image and Content of Text and Image block should get saved", async function () {
    await activityAuthorPage.editTextImageActivity.click().then(async function () {
        let textAndImageTypeLastPara: string = await authorSanityPage.imageAndTextPreviewLastPara.getText();
        expect(textAndImageTypeLastPara).to.contain(latestImageDescriptionLastPara);
    });
    await activityAuthorPage.editImageAndTextBtn.click().then(async function () {
        await authorSanityPage.currentImageFileName.getText().then(function (currentFileName) {
            expect(currentFileName).to.contain(latestImageName);
        })
    });
    await authorSanityPage.cancelEdit.click().then(async function () {
        await activityAuthorPage.exitEditor.click().then(async function () {
            await browser.sleep(2000);
        });
    });
})

//----------------------------------------------CARDS BLOCK-------------------------------------------------
let currentCardCount: number = null;

When('User clicks on Delete button of first Card', async function () {
    //console.log("Still need to add the delete Block as bug is currently open for the same.");
    await activityAuthorPage.cardFrontContainers.count().then(async function (cardCount) {
        currentCardCount = cardCount;
        authorSanityPage.deleteFirstCardBtn.click().then(async function () {
            await browser.sleep(1000).then(async function () {
                let cardCountLatest: number = await activityAuthorPage.cardFrontContainers.count();
                expect(cardCountLatest).to.equal(cardCount - 1);
            })
        })
    })
});

Then('the first card should get deleted', async function () {
    await activityAuthorPage.editCardBlockActivity.click().then(async function () {
        await activityAuthorPage.editCardsBtn.click().then(async function () {
            await activityAuthorPage.cardFrontContainers.count().then(async function (currentCount) {
                expect(currentCount).to.equal(currentCardCount - 1);
                await activityAuthorPage.cancelEditedContentBtn.click().then(function () {
                    activityAuthorPage.exitEditor.click();
                })
            })
        })
    })
});

//--------------------------------------------------SINGLE-SELECT RADIO---------------

When("User navigates to an activity that has a Single-Select of the type Radio", async function () {
    await authorSanityPage.editActivitySingleSelectRadio_Short.click();
    await browser.getCapabilities().then(async function (caps) {
        if (caps.get('browserName') == 'safari' || caps.get('browserName') == 'Safari') {
            browser.waitForAngularEnabled(false);
            await browser.sleep(30 * 1000);
            browser.waitForAngularEnabled(false);
        }
    })
});

When('User clicks on Edit Single Select button', async function () {
    await browser.wait(EC.invisibilityOf(element(By.xpath("//div[contains(@class,'loader_container')]"))), 30 * 1000);
    await authorSanityPage.btnEditSingleSelect.click();
});

let firstSingleSelectOptionText: string = "";
When("user deletes the first option of Single Select", async function () {
    await authorSanityPage.firstOptionTitle.getText().then(async function (firstOptionText) {
        firstSingleSelectOptionText = firstOptionText;
        await authorSanityPage.btnDeleteFirstOptionSS.click();
    })
});

let newOptionDescription: string = `US$ ${(Math.random() * 50).toFixed(2)} billion`;
When("user adds a new option to Single Select of the type Radio", async function () {
    await authorSanityPage.btnAddNewOption.click().then(async function () {
        await authorSanityPage.newOptionTitle.click().then(async function () {
            await authorSanityPage.newOptionTitle.sendKeys(newOptionDescription);
        })
    })
});

Then("the changes made to Single-Select of the type Radio get saved", async function () {
    await authorSanityPage.editActivitySingleSelectRadio_Short.click().then(async function () {
        await authorSanityPage.newOptionInSSRadio_Preview.getText().then(async function (newOptionText) {
            expect(newOptionText).to.contain(newOptionDescription);
        });
        await authorSanityPage.optionsInSSPreview.each(async function (option) {
            await option.getText().then(function (optionText) {
                expect(optionText).to.not.equal(firstSingleSelectOptionText);
            })
        })
    });
    await activityAuthorPage.exitEditor.click().then(async function () {
        await browser.sleep(2000);
    });
})

//---------------------------------------------------------SINGLE SELECT DROPDOWN----------------------

When("User navigates to an activity that has a Single-Select of the type Dropdown", async function () {
    await authorSanityPage.editActivitySingleSelectDD.click();
    await browser.getCapabilities().then(async function (caps) {
        if (caps.get('browserName') == 'safari' || caps.get('browserName') == 'Safari') {
            browser.waitForAngularEnabled(false);
            await browser.sleep(30 * 1000);
            browser.waitForAngularEnabled(false);
        }
    })
});

let ddNewOptionTitle: string = `${currentDateTime} SS_DD Automation`;
When("user adds a new option to Single Select of the type Dropdown", async function () {
    await authorSanityPage.btnAddNewOption.click().then(async function () {
        await authorSanityPage.newOptionTitle.click().then(async function () {
            await authorSanityPage.newOptionTitle.sendKeys(ddNewOptionTitle);
        })
    })
});

Then("the changes made to Single-Select of the type Dropdown get saved", async function () {
    await authorSanityPage.editActivitySingleSelectDD.click().then(async function () {
        await authorSanityPage.newSingleSelectDDoption_preview.getText().then(async function (newOptionText) {
            expect(newOptionText).to.contain(ddNewOptionTitle);
        });
        await authorSanityPage.optionsInPreviewSingleSelectDD.each(async function (option) {
            await option.getText().then(function (optionText) {
                expect(optionText).to.not.equal(firstSingleSelectOptionText);
            })
        })
    });
    await activityAuthorPage.exitEditor.click().then(async function () {
        await browser.sleep(2000);
    });
});

//----------------------------------------------------------SINGLE SELECT LONG----------------------------------------------------------

When("User navigates to an activity that has a Single-Select of the type Long", async function () {
    await authorSanityPage.editActivitySingleSelectLong.click();
});

let SS_longNewOptionTitle: string = `${currentDateTime} Title_Long Automation`;
let SS_longNewOptionDescription: string = `${currentDateTime} SS_Long Description`;

When("user adds a new option to Single Select of the type Long", async function () {
    await authorSanityPage.btnAddNewOption.click().then(async function () {
        await authorSanityPage.newOptionTitle.click().then(async function () {
            await authorSanityPage.newOptionTitle.sendKeys(SS_longNewOptionTitle);
        });
        await authorSanityPage.newOptionDescription.click().then(async function () {
            await authorSanityPage.newOptionDescription.sendKeys(SS_longNewOptionDescription);
        });
    })
});

Then("the changes made to Single-Select of the type Long get saved", async function () {
    await authorSanityPage.editActivitySingleSelectLong.click().then(async function () {
        await authorSanityPage.newOptionInSSRadio_Preview.getText().then(async function (newOptionText) {
            expect(newOptionText).to.contain(SS_longNewOptionTitle);
        });
        await authorSanityPage.optionsInSSPreview.each(async function (option) {
            await option.getText().then(function (optionText) {
                expect(optionText).to.not.equal(firstSingleSelectOptionText);
            })
        })
    });
    await activityAuthorPage.exitEditor.click().then(async function () {
        await browser.sleep(2000);
    });
});

//-----------------------------------------------MULTI SELECTS--------------------
let multiSelectType: string = "";
let multiSelectNewOptionTitle = "";
let MS_longNewOptionDescription: string = `${currentDateTime} MS_Long Description`;
When("User navigates to an activity that has a Mutli-Select of the type Checkbox", async function () {
    multiSelectType = "Checkbox";
    await authorSanityPage.editActivityMultiSelectCheckbox.click();
});

When("User navigates to an activity that has a Mutli-Select of the type Long", async function () {
    multiSelectType = "Long";
    await authorSanityPage.editActivityMultiSelectLong.click();
});

When("User navigates to an activity that has a Mutli-Select of the type Dropdown", async function () {
    multiSelectType = "Dropdown";
    await authorSanityPage.editActivityMultiSelectDD.click();
});

When('User clicks on Edit Multiple Select button', async function () {
    browser.wait(EC.invisibilityOf(element(By.xpath("//div[contains(@class,'loader_container')]"))), 30 * 1000);
    await authorSanityPage.btnEditMultiSelect.click();
});

let firstMultiSelectOptionText: string = "";
When("user deletes the first option of Multiple Select", async function () {
    await authorSanityPage.firstOptionTitle.getText().then(async function (firstOptionText) {
        firstMultiSelectOptionText = firstOptionText;
        await authorSanityPage.btnDeleteFirstOptionSS.click();
    })
});

When("user adds a new option to Multiple Select", async function () {
    switch (multiSelectType) {
        case "Checkbox": {
            multiSelectNewOptionTitle = `Automation Checkbox: ${currentDateTime}`;
            break;
        }
        case "Long": {
            multiSelectNewOptionTitle = `Automation MS_Long: ${currentDateTime}`;
            break;
        }
        case "Dropdown": {
            multiSelectNewOptionTitle = `Automation MS_DD: ${currentDateTime}`;
            break;
        }
    }


    await authorSanityPage.btnAddNewOption.click().then(async function () {
        await authorSanityPage.newOptionTitle.click().then(async function () {
            await authorSanityPage.newOptionTitle.sendKeys(multiSelectNewOptionTitle);
        });
        if (multiSelectType == "Long") {
            await authorSanityPage.newOptionDescription.click().then(async function () {
                await authorSanityPage.newOptionDescription.sendKeys(SS_longNewOptionDescription);
            });
        }
    })
});

Then("the changes made to Multi-Select of the type checkbox|Long get saved", async function () {
    if (multiSelectType == "Checkbox") {
        await authorSanityPage.editActivityMultiSelectCheckbox.click();
    }
    if (multiSelectType == "Long") {
        await authorSanityPage.editActivityMultiSelectLong.click();
    }
    await authorSanityPage.newOptionInMSPreview.getText().then(async function (newOptionText) {
        expect(newOptionText).to.contain(multiSelectNewOptionTitle);
    });
    await authorSanityPage.optionsInMSPreview.each(async function (option) {
        await option.getText().then(function (optionText) {
            expect(optionText).to.not.equal(firstMultiSelectOptionText);
        })
    })
    await activityAuthorPage.exitEditor.click().then(async function () {
        await browser.sleep(2000);
    })
})



Then("the changes made to Multi-Select of the type Dropdown get saved", async function () {
    await authorSanityPage.editActivityMultiSelectDD.click().then(async function () {
        await authorSanityPage.multiLongPreviewDDArrow.click().then(async function () {
            await authorSanityPage.newMultiSelectDDoption_preview.getText().then(async function (newOptionText) {
                expect(newOptionText).to.contain(multiSelectNewOptionTitle);
            });
            await authorSanityPage.optionsInMultiDDPreview.each(async function (option) {
                await option.getText().then(function (optionText) {
                    expect(optionText).to.not.equal(firstMultiSelectOptionText);
                })
            })
        })
    });
    await browser.executeScript("arguments[0].click()", activityAuthorPage.exitEditor).then(async function () {
        await browser.sleep(2000);
    });
});

//------------------------------------------------------WORDCLOUD--------------------------------------

// When("User navigates to an activity that has a block of the type Wordcloud", async function () {
//     await authorSanityPage.editActivitywordcloud.click();
// })

// When('User clicks on Edit Wordcloud button', async function () {
//     //browser.wait(EC.invisibilityOf(element(By.xpath("//div[contains(@class,'loader_container')]"))), 30 * 1000);
//     await authorSanityPage.btnEditWordcloud.click();
// });

let wordCloudAuthorRun: boolean = false;
let wordcloudNumberOfWords: number = 0;
let latestWordcloudWordFormat = "";

// When("user changes the Wordcase and Number of words to be used to generate Wordcloud", async function () {
//     wordCloudAuthorRun = true;
//     await authorSanityPage.currentNumberOfWords.getAttribute("ng-reflect-model").then(async function (currentNumber) {
//         wordcloudNumberOfWords = Number.parseInt(currentNumber);
//         if (wordcloudNumberOfWords == 10) {
//             while (wordcloudNumberOfWords < 30) {
//                 await authorSanityPage.btnIncreaseNumberOfWords.click().then(async function () {
//                     await authorSanityPage.currentNumberOfWords.getAttribute("ng-reflect-model").then(async function (currentNumber) {
//                         wordcloudNumberOfWords = Number.parseInt(currentNumber);
//                     })
//                 })
//             }
//         }
//         else {
//             while (wordcloudNumberOfWords > 10) {
//                 await authorSanityPage.btnDecreaseNumberOfWords.click().then(async function () {
//                     await authorSanityPage.currentNumberOfWords.getAttribute("ng-reflect-model").then(async function (currentNumber) {
//                         wordcloudNumberOfWords = Number.parseInt(currentNumber);
//                     })
//                 })
//             }
//         }
//     })
//     //WordCase 
//     await authorSanityPage.currentWordFormat.getText().then(async function (currentFormatting) {
//         if (currentFormatting.includes("Uppercase")) {
//             await authorSanityPage.wordFormatLowercase.click().then(async function () {
//                 latestWordcloudWordFormat = "Lowercase"
//             })
//         }
//         else {
//             await authorSanityPage.wordFormatUppercase.click().then(async function () {
//                 latestWordcloudWordFormat = "Uppercase"
//             })
//         }
//     })

// })

// Then("the changes made to the Wordcloud block should get saved", async function () {
//     await authorSanityPage.editActivitywordcloud.click().then(async function () {
//         await authorSanityPage.btnEditWordcloud.click().then(async function () {
//             await authorSanityPage.currentNumberOfWords.getAttribute("ng-reflect-model").then(async function (latestNumber) {
//                 expect(Number.parseInt(latestNumber)).to.equal(wordcloudNumberOfWords);
//             });
//             await authorSanityPage.currentWordFormat.getText().then(async function (latestFormatting) {
//                 expect(latestFormatting).to.equal(latestWordcloudWordFormat);
//             })
//         })
//     });
//     await authorSanityPage.cancelEdit.click().then(async function () {
//         await activityAuthorPage.exitEditor.click().then(async function () {
//             await browser.sleep(2000);
//         });
//     });
// })

//----------------------------------------------------------RESPONSE GRAPH----------------------

When("User navigates to an activity that has a block of the type Response Graph", async function () {
    await authorSanityPage.editActivityResponseGraph.click();
})

When('User clicks on Edit Response Graph button', async function () {
    //browser.wait(EC.invisibilityOf(element(By.xpath("//div[contains(@class,'loader_container')]"))), 30 * 1000);
    await authorSanityPage.btnEditResponseGraph.click();
});

let latestLabelX_axis: string = "X-Axis: " + currentDateTime;
let latestLabelY_axis: string = "Y-Axis: " + currentDateTime;
When("user changes the label of X-Axis and Y-axis on the Response Graph", async function () {
    await authorSanityPage.responseGraphLabelXaxis.click().then(async function () {
        await authorSanityPage.responseGraphLabelXaxis.clear().then(async function () {
            await authorSanityPage.responseGraphLabelXaxis.sendKeys(latestLabelX_axis);
        })
    })
    await authorSanityPage.responseGraphLabelYaxis.click().then(async function () {
        await authorSanityPage.responseGraphLabelYaxis.clear().then(async function () {
            await authorSanityPage.responseGraphLabelYaxis.sendKeys(latestLabelY_axis);
        })
    })
});

Then("the changes made to the Response Graph should get saved", async function () {
    await authorSanityPage.editActivityResponseGraph.click().then(async function () {
        await authorSanityPage.btnEditResponseGraph.click().then(async function () {
            await authorSanityPage.responseGraphLabelXaxis.getAttribute("ng-reflect-model").then(async function (currentVal) {
                expect(currentVal).to.equal(latestLabelX_axis);
            });
            await authorSanityPage.responseGraphLabelYaxis.getAttribute("ng-reflect-model").then(async function (currentVal) {
                expect(currentVal).to.equal(latestLabelY_axis);
            });
        })
    });
    await authorSanityPage.cancelEdit.click().then(async function () {
        await activityAuthorPage.exitEditor.click().then(async function () {
            await browser.sleep(2000);
        });
    });
})

//-----------------------------------------DOWNLOAD BLOCK---------------------------

// When("User navigates to an activity that has a block of the type Download", async function () {
//     await authorSanityPage.editActivityDownload.click();
// })

// When('User clicks on Edit Download button', async function () {
//     //browser.wait(EC.invisibilityOf(element(By.xpath("//div[contains(@class,'loader_container')]"))), 30 * 1000);
//     await authorSanityPage.btnEditDownload.click();
// });

// When("user selects the option Upload Momenta Content Doc and uploads a file", async function () {
//     let downloadFilePath: string = join(process.cwd(), 'TestData', 'SampleReport.pdf');
//     await browser.wait(EC.elementToBeClickable(authorSanityPage.radioBtnMomentaContentDoc), 5000).then(async function () {
//         await authorSanityPage.radioBtnMomentaContentDoc.click().then(async function () {
//             await browser.sleep(1500);
//             await authorSanityPage.uploadedFileName.clear().then(async function () {
//                 await authorSanityPage.uploadFileInputBox.sendKeys(downloadFilePath).then(async function () {
//                     await browser.wait(EC.invisibilityOf(authorSanityPage.loaderContainer), 45 * 1000);
//                 })
//             })
//         })
//     })

// });

// let latestDownloadHeading: string = `Heading: ${currentDateTime}`;
// When("user updates the Heading of Download Block", async function () {
//     //browser.waitForAngularEnabled(false);
//     await authorSanityPage.downloadHeading.click().then(async function () {
//         await authorSanityPage.downloadHeading.clear().then(async function () {
//             await authorSanityPage.downloadHeading.sendKeys(latestDownloadHeading);
//         })
//     });
//     //browser.waitForAngularEnabled(true);
// })

// Then("the file should get uploaded to the Download block", async function () {
//     await authorSanityPage.editActivityDownload.click().then(async function () {
//         await authorSanityPage.btnEditDownload.click().then(async function () {
//             await authorSanityPage.uploadedFileName.getAttribute("ng-reflect-model").then(async function (fileName) {
//                 expect(fileName).to.contain("SampleReport.pdf");
//             })
//         })
//     });
//     await authorSanityPage.cancelEdit.click().then(async function () {
//         await activityAuthorPage.exitEditor.click().then(async function () {
//             await browser.sleep(2000);
//         });
//     });
// });

// //let externalLinks:string[] = ["https://file-examples.com/wp-content/uploads/2017/10/file-sample_150kB.pdf","https://file-examples.com/wp-content/uploads/2017/10/file-example_PDF_500_kB.pdf","https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"];
// let latestURL: string = "";
// let latestURLWebsite = "";
// When("user selects the option External Link and provides a Link", async function () {
//     await browser.wait(EC.elementToBeClickable(authorSanityPage.radioBtnExternalLink), 5000).then(async function () {
//         await authorSanityPage.radioBtnExternalLink.click().then(async function () {
//             await browser.sleep(1500);
//             await authorSanityPage.externalDocumentLink.getAttribute("ng-reflect-value").then(async function (currentLink) {
//                 if (currentLink.includes("adobe")) {
//                     latestURL = "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";
//                     latestURLWebsite = "www.w3.org";
//                 }
//                 else {
//                     latestURL = "https://www.adobe.com/support/products/enterprise/knowledgecenter/media/c4611_sample_explain.pdf";
//                     latestURLWebsite = "www.adobe.com";
//                 }
//             });
//             //browser.waitForAngularEnabled(false);
//             await authorSanityPage.externalDocumentLink.click().then(async function () {
//                 await authorSanityPage.externalDocumentLink.clear().then(async function () {
//                     await authorSanityPage.externalDocumentLink.sendKeys(latestURL);
//                 })
//             })
//             // browser.waitForAngularEnabled(true);
//         })
//     })
// });

// When("User saves the changes made to the Download Block", async function () {
//     // browser.waitForAngularEnabled(false);
//     await activityAuthorPage.editDoneButton.click();
//     //browser.waitForAngularEnabled(true);
// });

// Then("the Heading should get updated and External Link should get added to the Download block", async function () {
//     await authorSanityPage.editActivityDownload.click().then(async function () {
//         await authorSanityPage.btnEditDownload.click().then(async function () {
//             await authorSanityPage.externalDocumentLink.getAttribute("ng-reflect-value").then(async function (currentLink) {
//                 expect(currentLink).to.contain(latestURLWebsite);
//             });
//             await authorSanityPage.downloadHeading.getAttribute("ng-reflect-model").then(async function (currentHeading) {
//                 expect(currentHeading).to.contain(latestDownloadHeading);
//             });
//         })
//     });
//     await authorSanityPage.cancelEdit.click().then(async function () {
//         await activityAuthorPage.exitEditor.click().then(async function () {
//             await browser.sleep(2000);
//         });
//     });
// })

//-----------------------------------SCREEN GRAB----------------------------------------------------------------
let latestScreenGrabFileName = `Petronas: ${currentDateTime}`;

When("User navigates to an activity that has a block of the type Screen Grab", async function () {
    await authorSanityPage.editActivityScreenGrab.click();
})

When('User clicks on Edit Screen Grab button', async function () {
    //browser.wait(EC.invisibilityOf(element(By.xpath("//div[contains(@class,'loader_container')]"))), 30 * 1000);
    await authorSanityPage.btnEditScreenGrab.click();
});

When("User edits the filename of Screen Grab", async function () {
    await authorSanityPage.screenGrabFileName.click().then(async function () {
        await authorSanityPage.screenGrabFileName.clear().then(async function () {
            await authorSanityPage.screenGrabFileName.sendKeys(latestScreenGrabFileName);
        })
    })
})

Then("the updated filename of Screen Grab should get saved", async function () {
    await authorSanityPage.editActivityScreenGrab.click().then(async function () {
        await authorSanityPage.btnEditScreenGrab.click().then(async function () {
            await authorSanityPage.screenGrabFileName.getAttribute("ng-reflect-value").then(function (fileName) {
                expect(fileName).to.equal(latestScreenGrabFileName);
            })
        })
    });
    await authorSanityPage.cancelEdit.click().then(async function () {
        await activityAuthorPage.exitEditor.click().then(async function () {
            await browser.sleep(2000);
        });
    });
});

//--------------------------------------------------------VARIABLE GRID--------------------------------------------------

When("User navigates to an activity that has a block of the type Variable Grid", async function () {
    await authorSanityPage.editActivityVariableGrid.click();
})

When('User clicks on Edit Variable Grid button', async function () {
    //browser.wait(EC.invisibilityOf(element(By.xpath("//div[contains(@class,'loader_container')]"))), 30 * 1000);
    await authorSanityPage.btnEditVariableGrid.click();
});

let firstVarGridOptionText: string = "";
let firstVarGridQuestionText: string = "";
let latestVarGridOptionText: string = `VG_Opt: ${currentDateTime}`;
let latestVarGridQuestionText: string = `VG_Ques: ${currentDateTime}`;

When("user deletes the first option and Question of Variable Grid", async function () {
    await authorSanityPage.firstVarGridOption.getAttribute("ng-reflect-model").then(async function (firstOptionText) {
        firstVarGridOptionText = firstOptionText;
        await authorSanityPage.btnDeleteFirstOptionVG.click();
    });
    await authorSanityPage.firstVarGridQuestion.getAttribute("ng-reflect-model").then(async function (firstQuestionText) {
        firstVarGridQuestionText = firstQuestionText;
        await authorSanityPage.deleteFirstQuestionVG.click();
    })
});

When("user adds a new option and question to Variable Grid", async function () {
    await authorSanityPage.variableGridAddOption.click().then(async function () {
        await authorSanityPage.newVarGridOptionText.click().then(async function () {
            await authorSanityPage.newVarGridOptionText.sendKeys(latestVarGridOptionText);
        })
    });
    await authorSanityPage.variableGridAddQuestion.click().then(async function () {
        await authorSanityPage.newVarGridQuestionTitle.click().then(async function () {
            await authorSanityPage.newVarGridQuestionTitle.sendKeys(latestVarGridQuestionText);
        });
        await authorSanityPage.newVarGridQuestionId.click().then(async function () {
            await authorSanityPage.newVarGridQuestionId.sendKeys(`TQ${Math.floor(Math.random() * 1000000)}`);
        });
    });
});

// When("User saves the changes made to the VG", async function () {
//     await activityAuthorPage.editDoneButton.click();
//     await browser.sleep(5000);
// });

Then("the changes made to Variable Grid should get saved", async function () {
    await authorSanityPage.editActivityVariableGrid.click().then(async function () {
        await authorSanityPage.newOptionInVarGridPreview.getText().then(async function (newOptionText) {
            expect(newOptionText).to.contain(latestVarGridOptionText);
        });
        await authorSanityPage.optionsInVarGridPreview.each(async function (option) {
            await option.getText().then(function (optionText) {
                console.log(optionText);
                expect(optionText).to.not.equal(firstVarGridOptionText);
            })
        });

        await authorSanityPage.newQuestionInVarGridPreview.getAttribute("aria-label").then(async function (newQuestionText) {
            expect(newQuestionText).to.contain(latestVarGridQuestionText);
        });
        await authorSanityPage.questionsInVarGridPreview.each(async function (questionPreview) {
            await questionPreview.getAttribute("aria-label").then(function (questionText) {
                console.log(questionText);
                expect(questionText).to.not.equal(firstVarGridQuestionText);
            })
        });
    });
    await activityAuthorPage.exitEditor.click().then(async function () {
        await browser.sleep(2000);
    });
})

//-------------------------------------------------------PARTICIPANT RESPONSE----------------------------------------

When("User navigates to an activity that has a block of the type Participant Response", async function () {
    await authorSanityPage.editActivityParticipantRes.click();
})

When('User clicks on Edit Participant Response button', async function () {
    //browser.wait(EC.invisibilityOf(element(By.xpath("//div[contains(@class,'loader_container')]"))), 30 * 1000);
    await authorSanityPage.btnEditParticipantRes.click();
});

let latestExerciseLabelSetting: string = "";
When("user changes the setting of Show Exercise Label", async function () {
    await authorSanityPage.toggleSettingShowExerciseLabel.getAttribute("aria-checked").then(async function (currentSetting) {
        console.log(currentSetting);
        if (currentSetting == "true") {
            latestExerciseLabelSetting = "false"
        }
        else {
            latestExerciseLabelSetting = "true"
        }
        await authorSanityPage.toggleShowExerciseLabel.click();
    })
})

Then("the changes made to Participant Response should get saved", async function () {
    await authorSanityPage.editActivityParticipantRes.click().then(async function () {
        await authorSanityPage.btnEditParticipantRes.click().then(async function () {
            await authorSanityPage.toggleSettingShowExerciseLabel.getAttribute("aria-checked").then(async function (currentSetting) {
                expect(currentSetting).to.equal(latestExerciseLabelSetting);
            })
        })
    });
    await authorSanityPage.cancelEdit.click().then(async function () {
        await activityAuthorPage.exitEditor.click().then(async function () {
            await browser.sleep(2000);
        });
    });
})

//--------------------------------------------------NESTED CONTENT--------------------------------

When("User navigates to an activity that has a block of the type Nested Content", async function () {
    await authorSanityPage.editActivityNestedContent.click();
})

When('User clicks on Edit Nested Content button', async function () {
    //browser.wait(EC.invisibilityOf(element(By.xpath("//div[contains(@class,'loader_container')]"))), 30 * 1000);
    await authorSanityPage.btnEditNestedContent.click();
});

When("user deletes the last tab of Nested Content Block", async function () {
    await authorSanityPage.btnDeleteNestedContentLastTab.click();
})

let latestNestedContentTabHeading: string = `TabHeading: ${currentDateTime}`;
let latestNestedContentTabDesc: string = `TabDescripton: ${currentDateTime}`;

When("User adds a new tab to Nested Content Block", async function () {
    await authorSanityPage.btnNestedContentAddItem.click().then(async function () {
        await browser.executeScript(`arguments[0].innerText = '${latestNestedContentTabHeading}'`, authorSanityPage.nestedContentNewTabHeading).then(async function () {
            await authorSanityPage.nestedContentNewTabHeading.click().then(async function () {
                await browser.sleep(2000);
            })
        });
        await browser.executeScript(`arguments[0].innerText = '${latestNestedContentTabDesc}'`, authorSanityPage.nestedContentNewTabDesc).then(async function () {
            await authorSanityPage.nestedContentNewTabDesc.click().then(async function () {
                await browser.sleep(2000);
            })
        });
    })
});

Then("the changes made to Nested Content should get saved", async function () {
    await authorSanityPage.editActivityNestedContent.click().then(async function () {
        await browser.executeScript("arguments[0].click()", authorSanityPage.nestedContentPreviewLastTab).then(async function () {
            // await authorSanityPage.nestedContentPreviewLastTabName.getText().then(function (tabHeading) {
            //     //expect(tabHeading).to.contain(latestNestedContentTabHeading);
            // });
            let tabHeading: string = await browser.executeScript("return arguments[0].innerText", authorSanityPage.nestedContentPreviewLastTabName);
            //console.log(tabHeading);
            expect(tabHeading).to.contain(latestNestedContentTabHeading);

            await authorSanityPage.nestedContentPreviewLastTabDesc.getText().then(function (tabDescription) {
                expect(tabDescription).to.contain(latestNestedContentTabDesc);
            })
        })
    });
    await activityAuthorPage.exitEditor.click().then(async function () {
        await browser.sleep(2000);
    });
})

//-------------------------------------------------------CUSTOM CODE BLOCK-------------------------------

When("User navigates to an activity that has a block of the type Custom Code", async function () {
    await authorSanityPage.editActivityCustomCode.click();
})

When('User clicks on Edit Custom Code button', async function () {
    //browser.wait(EC.invisibilityOf(element(By.xpath("//div[contains(@class,'loader_container')]"))), 30 * 1000);
    await authorSanityPage.btnEditCustomCode.click();
});
let latestCustomCodeText: string = `Custom Code: ${currentDateTime}`;
When("user updates the code under Custom Code block", async function () {
    let customCode: string = `<p class="fr-text-uppercase" style="text-align: center;"><span style="font-size: 30px; color: rgb(240, 115, 0);">${latestCustomCodeText}</span></p> <video controls="" height="260" style="text-align: center;" width="320"><source src="https://www.w3schools.com/tags/movie.mp4" type="video/mp4">&nbsp;Your browser does not support the video tag.</video>`;

    await browser.executeScript(`arguments[0].innerHTML = '${customCode}'`, authorSanityPage.customCodeContainer).then(async function () {
        await authorSanityPage.customCodeContainer.click().then(async function () {
            await browser.sleep(2000);
        })
    })
})

Then("the changes made to Custom Code block should get saved", async function () {
    await authorSanityPage.editActivityCustomCode.click().then(async function () {
        await authorSanityPage.textInCustomCodePreview.getText().then(function (customCodeText) {
            expect(customCodeText).to.be.oneOf([latestCustomCodeText, latestCustomCodeText.toUpperCase()]);
        })
    });
    await activityAuthorPage.exitEditor.click().then(async function () {
        await browser.sleep(2000);
    });
})

//-----------------------------------------------------COHORT RESPONSE-----------------------------------------------

When("User navigates to an activity that has a block of the type Cohort Response", async function () {
    await authorSanityPage.editActivityCohortRes.click();
})

When('User clicks on Edit Cohort Response button', async function () {
    //browser.wait(EC.invisibilityOf(element(By.xpath("//div[contains(@class,'loader_container')]"))), 30 * 1000);
    await authorSanityPage.btnEditCohortRes.click();
});

let latestCohortResTitle: string = `CohortBlock: ${currentDateTime}`;
let latestNextResponseLabel: string = `NextResponse: ${currentDateTime}`;
When("user updates the title and Next Response Label of Cohort Response Block", async function () {
    await authorSanityPage.titleCohortRes.click().then(async function () {
        await authorSanityPage.titleCohortRes.clear().then(async function () {
            await authorSanityPage.titleCohortRes.sendKeys(latestCohortResTitle);
        })
    });
    await authorSanityPage.cohortResNextResponseLabel.click().then(async function () {
        await authorSanityPage.cohortResNextResponseLabel.clear().then(async function () {
            await authorSanityPage.cohortResNextResponseLabel.sendKeys(latestNextResponseLabel);
        })
    });
})

Then("the changes made to Cohort Response Block should get saved", async function () {
    await authorSanityPage.editActivityCohortRes.click().then(async function () {
        await authorSanityPage.cohortResPreviewTitle.getText().then(async function (cohortResTitle) {
            expect(cohortResTitle).to.equal(latestCohortResTitle);
        });
        await authorSanityPage.cohortResPreviewNextResLabel.getText().then(async function (nextResLabel) {
            expect(nextResLabel).to.equal(latestNextResponseLabel);
        })
    });
    await activityAuthorPage.exitEditor.click().then(async function () {
        await browser.sleep(2000);
    });
})

//-----------------------------------------PARTICIPANT CODE--------------------------------------------------
//-----------------------------------------------WORDCLOUD-------------------------------------------------
// When("user navigates to the My Journey page", async function () {
//     browser.waitForAngularEnabled(false);
//     await browser.wait(EC.visibilityOf(commonObjects.myJourneyPage), 10 * 1000);
//     await commonObjects.myJourneyPage.click().then(async function () {
//         await browser.sleep(5000);
//     });
//     browser.waitForAngularEnabled(true);
// })

// When("User navigates to the {string} module and {string} activity", async function (moduleName, activityName) {
//     let moduleXpath: string = `//*[contains(text(),'${moduleName}')]//ancestor::div[contains(@class,'_content')]//button`;
//     let activityXpath: string = `//*[contains(text(),'${activityName}')]//ancestor::div[contains(@class,'module__block')]//button[contains(@name,'start') or contains(@name,'Resume') or contains(@name,'Revisit')]`
//     browser.waitForAngularEnabled(false);
//     await element(By.xpath(moduleXpath)).click().then(async function () {
//         await browser.sleep(5000).then(async function () {
//             await element(By.xpath(activityXpath)).click().then(async function () {
//                 await browser.wait(EC.invisibilityOf(commonObjects.shimmerLoadActivity), 10000).then(async function () {
//                     //await browser.wait(EC.elementToBeClickable(newLeaderboardPage.participantNaviationMenu), 5000);
//                 });
//             })
//         })
//     });
//     browser.waitForAngularEnabled(true);
// });
// //------------Update the below code------------------
// When("User navigates to Word Cloud activity", async function () {
//     browser.waitForAngularEnabled(false);
//     // await commonObjects.myJourneyPage.click().then(async function(){
//     //     await browser.sleep(3000);
//     // })    
//     browser.waitForAngularEnabled(true);
// });

// // let wordPickerUser1:string[]= ["Lorem", "ipsum", "dolor", "sit", "amet,", "consectetur", "adipiscing", "elit", "", "Phasellus", "ut", "fermentum", "nibh,", "vitae", "semper", "sem", "Vivamus", "suscipit", "volutpat", "lorem", "pharetra", "Integer", "aliquam", "nulla", "ultricies", "Praesent", "at", "tincidunt", "metus", "Vestibulum"];
// // let wordPickerUser2:string[] = ["ante", "primis", "in", "faucibus", "orci", "luctus", "et", "ultrices", "posuere", "cubilia", "curae;", "Suspendisse", "a", "enim", "sed", "mauris", "lacinia", "lobortis", "amet", "eget", "odio", "Donec", "sagittis", "pretium", "tellus,", "ullamcorper", "erat", "maximus", "vel"];
// let wordPicker: string[] = ["Lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit", "Phasellus", "ut", "fermentum", "nibh", "vitae", "semper", "sem", "Vivamus", "suscipit", "volutpat", "lorem", "pharetra", "Integer", "aliquam", "nulla", "ultricies", "Praesent", "tincidunt", "metus", "Vestibulum", "ante", "primis", "faucibus", "orci", "luctus", "et", "ultrices", "posuere", "cubilia", "curae", "Suspendisse", "enim", "sed", "mauris", "lacinia", "lobortis", "amet", "eget", "odio", "Donec", "sagittis", "pretium", "tellus", "ullamcorper", "erat", "maximus", "vel"];
// let ignoredWords: string[] = ["the", "a", "an", "and", "any", "as", "am", "by", "but", "is", "was", "on", "or", "this", "that", "which", "he", "she", "it", "they", "them", "there", "their", "so", "to", "too", "my", "mine", "your", "yours", "our", "ours"];

// function inputGenerator(wordArray: string[], wordCount: number): string {
//     let sentence: string = "";
//     for (let i = 1; i <= wordCount; i++) {
//         let wordToBeAdded: string = wordArray[Math.floor(Math.random() * wordArray.length)];
//         while (sentence.includes(wordToBeAdded)) {
//             wordToBeAdded = wordArray[Math.floor(Math.random() * wordArray.length)];
//         }

//         sentence += wordToBeAdded + " ";
//     };
//     return sentence.trim();
// };

// function wordCounter(sentence: string): any {
//     let wordArray = sentence.split(/\s/);
//     let wordObj: any = {};
//     wordArray.forEach(function (word) {
//         word = word.toUpperCase();
//         let flag: boolean = wordObj.hasOwnProperty(word);
//         //console.log(flag);
//         if (flag) {
//             let temp: number = wordObj[word] + 1;
//             wordObj[word] = temp;
//         }
//         else {
//             wordObj[word] = 1;
//         }
//     });
//     return wordObj;
// };
// function isUpperCase(str: string): boolean {
//     return str === str.toUpperCase();
// };

// function isLowerCase(str: string): boolean {
//     return str === str.toLowerCase();
// };

// let defaultWordCount: number = 10;
// let wordCloudCaseParticipant: string = "Uppercase";

// if (wordCloudAuthorRun) {
//     defaultWordCount = wordcloudNumberOfWords;
//     wordCloudCaseParticipant = latestWordcloudWordFormat
// }
// //console.log(defaultWordCount, wordCloudCaseParticipant);

// let ignoredWordsInput = inputGenerator(ignoredWords, 3);
// let countedWordsUserOne = inputGenerator(wordPicker, defaultWordCount + 5);
// let userOneInput: string = `Three Three Three Two Two ${ignoredWordsInput} ${countedWordsUserOne}`;
// let userTwoInput: string = `Two Two ${inputGenerator(ignoredWords, 3)} ${inputGenerator(wordPicker, defaultWordCount + 5)}`;
// let combinedInput: string = userOneInput + " " + userTwoInput;
// // console.log(userOneInput);
// // console.log(userTwoInput);
// // console.log(combinedInput);

// let wordCloudUserCounter: number = 1;

// When("User provides some input into the content activity", async function () {
//     browser.waitForAngularEnabled(false);
//     //await browser.wait(EC.invisibilityOf(commonObjects.shimmerLoadActivity), 10000);
//     // await authorSanityPage.textInputContainer.click().then(async function () {
//     //     await authorSanityPage.textInputContainer.clear().then(async function () {
//     //         await authorSanityPage.textInputContainer.sendKeys(userOneInput);
//     //     })
//     // });
//     let textInputContainer: WebElement = authorSanityPage.textInputContainer.getWebElement();
//     await browser.sleep(3000);
//     if (wordCloudUserCounter == 1) {
//         await browser.executeScript(`arguments[0].innerText = '${userOneInput}'`, textInputContainer).then(async function () {
//             await browser.sleep(2000);
//         });
//     }
//     else {
//         await browser.executeScript(`arguments[0].innerText = '${userTwoInput}'`, textInputContainer).then(async function () {
//             await browser.sleep(2000);
//         });
//     }

//     wordCloudUserCounter = wordCloudUserCounter + 1;
//     browser.waitForAngularEnabled(true);
// });


// When("User clicks on Continue Button", async function () {
//     browser.waitForAngularEnabled(false);
//     await commonObjects.btnContinue.click().then(async function () {
//         await browser.wait(EC.invisibilityOf(commonObjects.shimmerLoadActivity), 10000).then(async function () {
//             await browser.sleep(2000);
//         })
//     });
//     browser.waitForAngularEnabled(true);
// });

// let finalWordCount: any = wordCounter(combinedInput);
// //console.log(finalWordCount);

// Then("the wordcloud should be properly generated from the input provided", async function () {
//     browser.waitForAngularEnabled(false);
//     await browser.sleep(5000);
//     //let elementCounter: number = 1;
//     await authorSanityPage.wordsInWordcloud.count().then(async function (actualWordCount) {
//         expect(actualWordCount).to.be.lte(defaultWordCount);
//     })
//     await authorSanityPage.wordsInWordcloud.each(async function (wordElement) {
//         await wordElement.getText().then(async function (word) {
//             console.log(word);
//             expect(word).to.not.be.oneOf(ignoredWords);
//             expect(word.toUpperCase()).to.be.oneOf(combinedInput.toUpperCase().split(/\s/));
//             if (wordCloudCaseParticipant == "Uppercase") {
//                 expect(isUpperCase(word)).to.be.true;
//             }
//             else {
//                 expect(isLowerCase(word)).to.be.true;
//             }

//             // let selector:string = `*[class*='highcharts-tracker'] *:nth-child(${elementCounter})`;
//             // await browser.executeScript(support.mouseMove,{elementSelector: selector});
//             let currentBrowser: string = (await browser.driver.getCapabilities()).get('browserName');
//             if (currentBrowser == "chrome") {
//                 await browser.actions().mouseMove(wordElement).perform().then(async function () {
//                     await browser.sleep(1000);
//                     await authorSanityPage.selectedWordCount.getText().then(async function (count) {
//                         console.log(word + " " + finalWordCount[word.toUpperCase()]);
//                         // console.log(word + " "+finalWordCount[word.toLowerCase()]);

//                         expect(Number.parseInt(count)).to.be.oneOf([finalWordCount[word.toUpperCase()], finalWordCount[word.toLowerCase()]]);
//                     })
//                 })
//             }
//         })
//     });
//     browser.waitForAngularEnabled(true);
// });

//------------------------------------------------------PARTICIPANT DOWNLOAD------------------------
// let configuredHeading = "TestHeading";
// Then("the Download heading should be correct", async function () {
//     browser.waitForAngularEnabled(false);
//     await authorSanityPage.downloadTitle.getText().then(async function (heading) {
//         console.log(heading);
//         expect(heading).to.equal(configuredHeading);
//     })
//     browser.waitForAngularEnabled(true);
// });

// let downloadDirectory: string = join(process.cwd(), 'DownloadFolder');
// let downloadedFileName = join(process.cwd(), 'DownloadFolder', 'SampleReport.pdf');

// console.log(downloadDirectory);
// //--Below function is to remove all files from the folder before downloading file

// function removeAllFiles(directoryName: string): void {
//     console.log("removing all files from Download Folder");
//     fs.readdir(directoryName, function (err, files) {
//         if (err) throw err;
//         for (let file of files) {
//             fs.unlink(join(directoryName, file), function (err) {
//                 if (err) throw err;
//             })
//         }
//     })
// }

// let testDownloadFlag: boolean = true;

// When("User clicks on Download button to download the file", { timeout: 120 * 1000 }, async function () {
//     removeAllFiles(downloadDirectory);
//     browser.waitForAngularEnabled(false);
//     let currentBrowser: string = (await browser.driver.getCapabilities()).get('browserName');
//     if (currentBrowser == "chrome") {
//         await browser.sleep(5000).then(async function () {
//             await authorSanityPage.downloadBtn.click().then(async function () {
//                 console.log("clicked on Download button");
//                 await browser.sleep(10 * 1000);
//             });
//         })
//     }
//     else {
//         testDownloadFlag = false;
//     }

//     browser.waitForAngularEnabled(true);
// });
// let currentWindowHandle: string = "";
// When("User clicks on ExternalURL button to download the file", { timeout: 120 * 1000 }, async function () {
//     browser.waitForAngularEnabled(false);
//     currentWindowHandle = await browser.getWindowHandle();
//     //console.log(currentWindowHandle);
//     await browser.sleep(3000).then(async function () {
//         await authorSanityPage.downloadBtn.click().then(async function () {
//             console.log("clicked on ExternalURL button");
//             await browser.sleep(10 * 1000);
//         });
//     })
//     //console.log(await browser.getWindowHandle());
//     browser.waitForAngularEnabled(true);
// });

// Then("the file should get downloaded", async function () {
//     if (testDownloadFlag) {
//         let fileDownload: boolean = fs.existsSync(downloadedFileName);
//         if (!fileDownload) {
//             console.log("Cannot find downloaded file");
//         }
//         expect(fileDownload).to.be.true;
//     }
// });

// let configuredURL: string = "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";

// Then("User should be taken to the URL provided in Download block", async function () {
//     browser.waitForAngularEnabled(false);
//     let downloadExternalURL: string = "";
//     await browser.getAllWindowHandles().then(async function (windowhandles) {
//         //console.log(windowhandles);
//         windowhandles.forEach(async function (handle) {
//             if (handle != currentWindowHandle) {
//                 await browser.switchTo().window(handle).then(async function () {
//                     await browser.sleep(2000);
//                     await browser.getCurrentUrl().then(async function (externalURL) {
//                         console.log(externalURL);
//                         downloadExternalURL = externalURL;
//                     })
//                 })
//             }
//         })
//     });
//     expect(downloadExternalURL).to.equal(configuredURL);
//     browser.waitForAngularEnabled(false);
// })
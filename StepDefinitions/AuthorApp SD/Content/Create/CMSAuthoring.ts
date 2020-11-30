import { Given, Then, When } from "cucumber";
import { browser, By, element, ElementFinder, protractor } from "protractor";
import { AdminLandingPageLocate } from "../../../../PageObjects/AuthorApp POM/Home Page/AdminLandingPage";
import { ActivityAuthoringPageLocate } from "../../../../PageObjects/AuthorApp POM/Content/Create/CMSAuthoringPage";
import { CommonLocate } from "../../../../PageObjects/Common";
import { LoginPageLocate } from "../../../../PageObjects/AuthorApp POM/Login/LoginPage";

import chai = require("chai");
import { join } from 'path';
import fs from 'fs';
import { AuthorSanityPage } from "../../../../PageObjects/SanityProjectPages/AuthorSanityPage";
import { CreateAllContentsLocate } from "../../../../PageObjects/SanityProjectPages/CreateAllContentPage";
import request from "request";
import { apiHelperFunctions } from "../../../apiHelperClass";
import { HelperFunctions } from "../../../HelperClass";
import TestData from "../../../../testData.json"

// var remote = require("../../node_modules/protractor/built/selenium-webdriver/remote") ;
// browser.setFileDetector(new remote.setFileDetector());

var dragAndDrop = require('html-dnd').code;
const support = require('protractor-firefox-support');

var expect = chai.expect;
var EC = protractor.ExpectedConditions;
var driver = browser.driver;
let admloginpage = new LoginPageLocate();
let admlandpage = new AdminLandingPageLocate();
let authorSanityPage = new AuthorSanityPage();
let activityAuthorPage = new ActivityAuthoringPageLocate();
let commonObjects = new CommonLocate();
let createAllContentsPage = new CreateAllContentsLocate();

var listExists = true;
let allContentTypeOptions: Array<string> = ['Action', 'Moment', 'Concept', 'Insight', 'Exercise', 'Go-Do', 'Tool', 'Video', 'Image', 'Document', 'MBA Report', 'MBA Team Report', 'Support', 'Registration'];
let uploadedVideoURL: string = '';
let newVideoURL: string = '';
let numberOfContentItems: number;
let imgSrcInContentTypeImage: string = null;
let updatedCardFrontText: string = '';
let updatedCardBackText: string = '';
let newCardFrontText: string = '';
let newCardBackText: string = '';
let currentCardCount: number = null;

let today: Date = new Date();
let dd: string = String(today.getDate()).padStart(2, '0');
let mm: string = String(today.getMonth() + 1).padStart(2, '0');
let year: number = today.getFullYear();
let hours: number = today.getHours();
let minutes: string = today.getMinutes().toString().padStart(2, '0');

let currentDateTime: string = mm + '-' + dd + '-' + year + ' ' + hours + ':' + minutes;
//Added Array of video URLs to test Edit Video Scenario
let videoURLs: string[] = ["http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4"];




Given('User is on CMS - Activity Authoring Editing Page', async function () {
    let currentUrl = await browser.getCurrentUrl();
    if (!currentUrl.includes("contenteditor")) {
        if (currentUrl.includes('home/admin')) {
            await admlandpage.tabClient.isDisplayed().then(async function () {
                await admlandpage.tabClient.click().then(async function () {
                    await admlandpage.colPetronas.click().then(async function () {
                        await browser.sleep(2000);
                    })

                });

            })
        }

        await activityAuthorPage.sampleContent.click().then(function () {
            browser.sleep(2000);
        });

    }
})

Given('User is on CMS - Activity Authoring Editing Page to edit Video', async function () {
    let currentUrl = await browser.getCurrentUrl();
    if (!currentUrl.includes("contenteditor")) {
        if (currentUrl.includes('home/admin')) {
            await admlandpage.tabClient.isDisplayed().then(async function () {
                await admlandpage.tabClient.click().then(async function () {
                    await admlandpage.colCocaCola.click().then(async function () {
                        await browser.sleep(2000);
                    })

                });

            })
        }
        await activityAuthorPage.sampleContentEditVideo.click();
    }
})


Given('User is on CMS - Activity Authoring Editing Page to delete Content', async function () {
    let currentUrl = await browser.getCurrentUrl();
    if (!currentUrl.includes("contenteditor")) {
        if (currentUrl.includes('home/admin')) {
            await admlandpage.tabClient.isDisplayed().then(async function () {
                await admlandpage.tabClient.click().then(async function () {
                    await admlandpage.colPetronas.click().then(async function () {
                        await browser.sleep(2000);
                    })

                });

            })
        }

        await activityAuthorPage.sampleContentDelete.click();
    }
})

Given('User is on CMS - Activity Authoring Editing Page to copy Content', async function () {
    let currentUrl = await browser.getCurrentUrl();
    if (!currentUrl.includes("contenteditor")) {
        if (currentUrl.includes('home/admin')) {
            await admlandpage.tabClient.isDisplayed().then(async function () {
                await admlandpage.tabClient.click().then(async function () {
                    await admlandpage.colCocaCola.click().then(async function () {
                        await browser.sleep(2000);
                    })

                });

            })
        }

        await activityAuthorPage.sampleContentDelete.click();
    }
})

Given('User is on CMS - Activity Authoring Editing Page to Scroll Content', async function () {
    let currentUrl = await browser.getCurrentUrl();
    if (!currentUrl.includes("contenteditor")) {
        if (currentUrl.includes('home/admin')) {
            await admlandpage.tabClient.isDisplayed().then(async function () {
                await admlandpage.tabClient.click().then(async function () {
                    await admlandpage.colCocaCola.click().then(async function () {
                        await browser.sleep(2000);
                    })

                });

            })
        }
        await activityAuthorPage.sampleContentScroll.click();
    }
})

Given('User is on CMS - Activity Authoring Editing Page to Edit Content', async function () {
    let currentUrl = await browser.getCurrentUrl();
    if (!currentUrl.includes("contenteditor")) {
        if (currentUrl.includes('home/admin')) {
            await admlandpage.tabClient.isDisplayed().then(async function () {
                await admlandpage.tabClient.click().then(async function () {
                    await admlandpage.colCocaCola.click().then(async function () {
                        await browser.sleep(2000);
                    })

                });

            })
        }

        await activityAuthorPage.sampleContentUpdate.click().then(function () {
            browser.sleep(2000);
        });
    }
})

When('User clicks on client tab', async function () {
    await admlandpage.tabClient.isDisplayed().then(async function () {
        await admlandpage.tabClient.click();
    });
});

When('User should click on coca-cola folder', async function () {
    await admlandpage.txtClientSearch.sendKeys("coca-cola").then(async function () {
        await admlandpage.colCocaCola.isDisplayed().then(async function () {
            await admlandpage.colCocaCola.click();
        })
    })
});

When("User clicks on Automation folder", async function () {
    await activityAuthorPage.automationFolder.click().then(function () {
        browser.sleep(2000);
    })
})

When("User clicks on Sprint3 folder", async function () {
    await activityAuthorPage.folderSprint3.click().then(function () {
        browser.sleep(2000);
    })
})

When("User navigates to an activity having Content Blocks to delete content", async function () {
    await activityAuthorPage.deleteContentBlockActivity.click();
});

When("User navigates to an activity having Content Blocks to copy content", async function () {
    await activityAuthorPage.deleteContentBlockActivity.click();
});

When("User navigates to an activity having Content Blocks to edit content", async function () {
    await activityAuthorPage.editContentBlockActivity.click();
});

When("User navigates to an activity having video Blocks to edit video", async function () {
    await activityAuthorPage.sampleContentEditVideo.click();
});
When("User navigates to an activity having Text and Image Block", async function () {
    await activityAuthorPage.editTextImageActivity.click();
});

When("User navigates to an activity having Image Block", async function () {
    await activityAuthorPage.editImageBlockActivity.click();
})

When("User navigates to an activity having Card Block", async function () {
    await activityAuthorPage.editCardBlockActivity.click();
});
let helper = new HelperFunctions();
When('User clicks on anyone of the content present under CONTENT section and lands on CMS-Activity Authoring Editor', { timeout: 60 * 10000 }, async function () {
    await activityAuthorPage.sampleContent.click();
    await helper.unlockContent();

});

When('user checks if Momenta logo is present', async function () {
    await commonObjects.momentaLogo.isDisplayed().then(function () {
        console.log("Momenta logo is displayed");
    });
});

When('User clicks on Momenta logo', async function () {
    await commonObjects.momentaLogo.click().then(async function () {
        browser.sleep(3000);
    });


});

Then('User should be redirected to Admin Landing Page with Client as default tab', async function () {
    let navigationSuccess = await admlandpage.btnHamburgerMenuIcon.isDisplayed();
    expect(navigationSuccess).to.be.true;
});

//--------------------------------------------------
When('user validates Enter Title text box and tries to give the title as {string}', async function (title) {
    await activityAuthorPage.activityTitle.clear();
    await activityAuthorPage.activityTitle.click().then(async function () {
        await activityAuthorPage.activityTitle.sendKeys(title);
    })

});

When('User puts description of content under the text box present at right panel as {string}', async function (description) {
    await activityAuthorPage.activityDescription.clear().then(async function () {
        await activityAuthorPage.activityDescription.sendKeys(description);
    })
});

When("User unselects the Content Type", async function () {
    await activityAuthorPage.contentTypeDDArrow.click().then(async function () {
        await element(By.css("select[class*='content-select'] > option:nth-child(1)")).click();
        await browser.sleep(1000);
    })
})

When('User define the content type by selecting one of the value from drodown present under Content Type', async function () {
    await activityAuthorPage.contentTypeDDArrow.click().then(async function () {
        await activityAuthorPage.contentTypeFirstOption.click();
        await browser.sleep(1000);
    })

});
When('User add atleast one content i.e. Video by dragging it to main content body', async function () {
    //  browser.actions().dragAndDrop(activityAuthorPage.addContentVideo,activityAuthorPage.contentDropArea).mouseUp().perform();
    //browser.actions().mouseDown(activityAuthorPage.addContentVideo.getWebElement()).mouseMove(activityAuthorPage.contentDropArea.getWebElement()).mouseUp().perform();
    // browser.sleep(2000);

    // var draggable = activityAuthorPage.addContentVideo;
    // var droppable = activityAuthorPage.contentDropArea;
    // var offsetX = 0;
    // var offsetY = 0;

    // await browser.executeScript(dragAndDrop,draggable,droppable,offsetX,offsetY);
    // browser.sleep(2000);

    //  driver.actions().dragAndDrop(activityAuthorPage.addContentVideo,activityAuthorPage.contentDropArea).perform();
    var dragSelector = "div.block-drag > mat-list > mat-list-item:nth-child(2)";
    var droppable = "div#cdk-drop-list-0";
    const dropPoint = { x: 0, y: 0 };
    return browser.executeScript(support.dragAndDrop, dragSelector, droppable, { dropLocation: dropPoint });
    await browser.sleep(5000);


})

When('User save the title by clicking on SAVE DRAFT', async function () {
    await activityAuthorPage.saveDraftBtn.click();
});

Then('User should be able to give title by using any character and new name should get reflected', async function () {

});

//-----------------------------------------------------------------

When('user clicks on EXIT EDITOR button', async function () {
    await activityAuthorPage.exitEditor.click();
})

Then('User should be redircted to Client Landing Page', async function () {
    await activityAuthorPage.clientCollectionHeader.isDisplayed().then(function (result) {
        expect(result).to.be.true;
    })
})
//----------------------------------------------------------------
When('user clicks on anyone of the CONTENT present at left panel', async function () {
    await activityAuthorPage.contentCollapsableFolder.isDisplayed().then(async function () {
        await activityAuthorPage.samplePublishedContent.click().then(function () {
            browser.sleep(5000);
        })

    });
});

Then('User should be able to see content of the folder clicked', async function () {
    await activityAuthorPage.contentWordCloud.isDisplayed().then(async function (result) {
        expect(result).to.be.true;
        await activityAuthorPage.exitEditor.click();
    });
})

//-------------------------------------------------------------------
When('user checks for the content which is at right side panel', function () {
    console.log('Blank step');
});

Then('User should see all 3 editable menu as Classification,Add Content and Animate in on scroll', async function () {
    await activityAuthorPage.activityDescription.isDisplayed().then(function (result) {
        expect(result).to.be.true;
    });
    await activityAuthorPage.contentTypeDDArrow.isDisplayed().then(function (result) {
        expect(result).to.be.true;
    });
    await activityAuthorPage.animateInToggleBtn.isDisplayed().then(function (result) {
        expect(result).to.be.true;
        console.log('animateInToggleButton displayed');
    })
    await activityAuthorPage.exitEditor.click();
});
//---------------------------------------------------------------------------

When('user clicks on Content type dropdown', async function () {
    await activityAuthorPage.contentTypeDDArrow.click();

})

Then('User can view list of content type options', async function () {
    let contentTypeOptions: Array<string> = [];

    await activityAuthorPage.contentTypeAllOptions.each(async function (element: ElementFinder) {
        let currentOption: string = await element.getText();
        if (!(currentOption == 'Select')) {
            contentTypeOptions.push(currentOption.trim());
        }

    });
    //console.log(contentTypeOptions);
    expect(allContentTypeOptions).to.have.members(contentTypeOptions);
    await activityAuthorPage.contentTypeFirstOption.click();
    await activityAuthorPage.exitEditor.click();

})

//--------------------------------------------------------------------------

When('user click on Animate in on scroll', async function () {
    browser.sleep(1000);

    await activityAuthorPage.animateInToggleBtn.click().then(async function () {
        await activityAuthorPage.animateInToggleBtn.click();
        console.log('Clicked on Toggle button');
        browser.sleep(2000);
    }).catch(function () {
        console.log('Button not clickable');
        expect(false).to.be.true;
    });
})

Then('User should be able to toggle On and Off', async function () {
    await activityAuthorPage.exitEditor.click();
});


//---------------------------------------------------------------------------------

When('user clicks on Edit Video icon of added video content', async function () {
    await activityAuthorPage.editVideoBtn.click().then(function () {

        browser.sleep(2000);
    })

})

Then('User should see editable menu which have optons as size,Upload Video,CANCEL EDIT and DONE', async function () {

    await browser.switchTo().activeElement().then(async function () {
        await activityAuthorPage.videoSizeDD.isDisplayed().then(function (result) {
            expect(result).to.be.true;
        });

        await activityAuthorPage.uploadVideoBtn.isDisplayed().then(function (result) {
            expect(result).to.be.true;
        });

        await activityAuthorPage.cancelEditVideo.isDisplayed().then(function (result) {
            expect(result).to.be.true;
        });

        await activityAuthorPage.editDoneButton.isDisplayed().then(function (result) {
            expect(result).to.be.true;
        });

    });


})
let latestVideoURL: string = "";
When('User changes the Direct video URL for MP4 video but clicks on CANCEL EDIT', async function () {

    uploadedVideoURL = await activityAuthorPage.uploadedVideoSource.getAttribute("src");
    latestVideoURL = uploadedVideoURL;

    while (latestVideoURL == uploadedVideoURL) {
        let len: number = videoURLs.length;
        latestVideoURL = videoURLs[Math.floor((Math.random()) * len)];
    }
    console.log(latestVideoURL);

    // await activityAuthorPage.uploadVideoBtn.sendKeys('C:\Users\Administrator\Videos\dolbycanyon.mp4').then(function () {
    //     browser.sleep(15 * 1000);
    // });
    await activityAuthorPage.directVideoURL.clear().then(async function () {
        await activityAuthorPage.directVideoURL.sendKeys(latestVideoURL).then(function () {
            browser.sleep(3 * 1000);
        })
    });
    await activityAuthorPage.cancelEditVideo.click();
    //uploadedVideoURL = await activityAuthorPage.uploadedVideoSource.getAttribute("src");
    // await activityAuthorPage.saveDraftBtn.click().then(async function () {
    //     await browser.sleep(4000).then(async function () {
    //         await browser.wait(EC.invisibilityOf(activityAuthorPage.toastMessageSuccess), 5000).then(async function () {
    //             await activityAuthorPage.publishBtn.click().then(async function () {
    //                 await browser.sleep(4000).then(async function () {
    //                     await browser.wait(EC.invisibilityOf(activityAuthorPage.toastMessageSuccess), 5000).then(async function () {
    //                         await activityAuthorPage.exitEditor.click().then(async function () {
    //                         })
    //                     })
    //                 })
    //             })
    //         })
    //     })
    // })

});

Then('User should not see the video uploaded', async function () {
    await browser.wait(EC.urlContains('masters'), 3000);
    await activityAuthorPage.sampleContentEditVideo.click();

    let videoURL: string = await activityAuthorPage.uploadedVideoSource.getAttribute("src");
    await activityAuthorPage.exitEditor.click().then(async function () {
        await browser.sleep(2000);
    })
    expect(latestVideoURL).to.not.equal(videoURL);
});


//--------------------------------------------------------------------------

When('User changes the Direct mp4 video URL and clicks on Done', async function () {
    await activityAuthorPage.editVideoBtn.click().then(function () {

        browser.sleep(2000);
    });
    uploadedVideoURL = await activityAuthorPage.uploadedVideoSource.getAttribute("src");
    latestVideoURL = uploadedVideoURL;

    while (latestVideoURL == uploadedVideoURL) {
        let len: number = videoURLs.length;
        latestVideoURL = videoURLs[Math.floor((Math.random()) * len)];
    }
    console.log(latestVideoURL);

    // await activityAuthorPage.uploadVideoBtn.sendKeys('C:\Users\Administrator\Videos\dolbycanyon.mp4').then(function () {
    //     browser.sleep(15 * 1000);
    // });
    await activityAuthorPage.directVideoURL.clear().then(async function () {
        await activityAuthorPage.directVideoURL.sendKeys(latestVideoURL).then(function () {
            browser.sleep(3 * 1000);
        })
    });
    await activityAuthorPage.editDoneButton.click();

    //below block added on 04-22-2020 by Mohit N
    // await activityAuthorPage.saveDraftBtn.click().then(async function () {
    //     await browser.sleep(4000).then(async function () {
    //         await browser.wait(EC.invisibilityOf(activityAuthorPage.toastMessageSuccess), 5000).then(async function () {
    //             await activityAuthorPage.publishBtn.click().then(async function () {
    //                 await browser.sleep(4000).then(async function () {
    //                     await browser.wait(EC.invisibilityOf(activityAuthorPage.toastMessageSuccess), 5000).then(async function () {
    //                         await activityAuthorPage.exitEditor.click().then(async function () {
    //                         })
    //                     })
    //                 })
    //             })
    //         })
    //     })
    // })
});

Then('User should be able to preserve the changes done by clicking on SAVE DRAFT', async function () {
    await browser.wait(EC.urlContains('masters'), 3000);
    await activityAuthorPage.sampleContentEditVideo.click();

    let videoURL: string = await activityAuthorPage.uploadedVideoSource.getAttribute("src");
    expect(latestVideoURL).to.equal(videoURL);
    await activityAuthorPage.exitEditor.click().then(async function () {
        await browser.sleep(2000);
    });

});
//--------------------------------------------------------------------------------

let sourceURLforUploadVideo: string = "";
When('User clicks on Upload Video button and uploads a video file', async function () {

    let filePath: string = join(process.cwd(), 'TestData', 'small.mp4');
    console.log(filePath);
    //await activityAuthorPage.uploadVideoBtn.click();
    // await activityAuthorPage.uploadVideoBtn.sendKeys(filePath).then(async function () {
    //     await browser.sleep(5 * 1000);
    // });
    await activityAuthorPage.directVideoURL.clear().then(async function () {
        await browser.executeScript("document.querySelector(\"#fileInputVideoUpload\").style.display = 'inline';").then(async function () {
            await element(By.css("input[type ='file'][accept ='video/mp4']")).sendKeys(filePath).then(async function () {
                await browser.sleep(5000);
            })
        })
    })

    await activityAuthorPage.editDoneButton.click().then(async function () {
        await browser.sleep(3 * 1000);
    })
    sourceURLforUploadVideo = await activityAuthorPage.uploadedVideoSource.getAttribute("src");

});

Then('the video file should get uploaded', async function () {
    await browser.wait(EC.urlContains('masters'), 3000);
    await activityAuthorPage.sampleContentEditVideo.click().then(async function () {
        let videoURL: string = await activityAuthorPage.uploadedVideoSource.getAttribute("src");
        expect(sourceURLforUploadVideo).to.equal(videoURL);
    });
    await activityAuthorPage.exitEditor.click().then(async function () {
        await browser.sleep(2000);
    });
});

//---------------------------------------------------------------------------------------
let currentFullScreenSetting: string = "";
let currentAutoplaySetting: string = "";
let currentAutoNavigateSetting: string = "";
let currentSecureSetting: string = "";

When("User changes the settings for Show Full Screen, Autoplay, Auto Navigation, isSecure and saves the settings", async function () {
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

    await activityAuthorPage.isSecureCurrentSetting.getAttribute("ng-reflect-model").then(async function (currentSetting4) {
        currentSecureSetting = currentSetting4;
        await activityAuthorPage.videoIsSecure.click().then(async function () {
            await browser.sleep(1000);
        })
    })
    await activityAuthorPage.editDoneButton.click();
    //newVideoURL = await activityAuthorPage.uploadedVideoSource.getAttribute("src");
    // await activityAuthorPage.saveDraftBtn.click().then(async function () {
    //     await browser.sleep(3000);
    // });
    // await activityAuthorPage.exitEditor.click();


})

Then('User should be able to preserve the changes done to Show Full Screen, Autoplay, Auto Navigation, isSecure fields', async function () {
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

        await activityAuthorPage.isSecureCurrentSetting.getAttribute("ng-reflect-model").then(async function (latestSetting) {
            if (currentSecureSetting == "true") {
                expect(latestSetting).to.equal("false");
            }
            else if (currentSecureSetting == "false") {
                expect(latestSetting).to.equal("true");
            }
            else {
                expect(true).to.be.false;
            }
        })

    })
    await activityAuthorPage.cancelEditedContentBtn.click().then(async function () {
        await activityAuthorPage.exitEditor.click().then(async function () {
            await browser.sleep(2000);
        })
    });

});

//--------------------------------------------------------------------------------------------
When('user clicks on Delete icon and selects No from alert message', async function () {
    numberOfContentItems = await activityAuthorPage.contentItems.count();
    console.log(numberOfContentItems);
    await activityAuthorPage.deleteButtonFirstContent.click();
    await browser.sleep(1000);
    await activityAuthorPage.deleteConfirmationNoBtn.click();
    await browser.sleep(2000);


})

Then('respective content should not get deleted', async function () {
    let currentNumberOfItems = await activityAuthorPage.contentItems.count();

    expect(currentNumberOfItems).to.equal(numberOfContentItems);
})

When('user clicks on collapsable arrow present', async function () {
    for(let i:number = 0;i<numberOfContentItems; i++){
        await activityAuthorPage.allCollapsableArrows.get(i).click();
        await browser.sleep(1000);
    }
});

Then('each and every content should get collapsed and expanded', async function () {
    await activityAuthorPage.exitEditor.click().then(async function () {
        await browser.sleep(2000);
    })
});
//-------------------------------------------------------------------------

When('user clicks on Delete icon and selects Yes from alert message', async function () {
    numberOfContentItems = await activityAuthorPage.contentItems.count();
    console.log(numberOfContentItems);
    await activityAuthorPage.deleteButtonFirstContent.click();
    await activityAuthorPage.deleteConfirmationYesBtn.click();
    //await activityAuthorPage.saveDraftBtn.click();
    // await activityAuthorPage.exitEditor.click();

})

Then('respective content should get deleted', async function () {
    await activityAuthorPage.deleteContentBlockActivity.click();
    let currentNumberOfItems = await activityAuthorPage.contentItems.count();
    await activityAuthorPage.exitEditor.click().then(async function () {
        await browser.sleep(2000);
    })
    expect(currentNumberOfItems).to.eql((numberOfContentItems) - 1);
    //console.log(currentNumberOfItems);
})
//----------------------------------------------------------------------

When('user clicks on Copy icon', async function () {

    await activityAuthorPage.copyFirstContentBtn.click();

})

Then('copy of the content should get created at the bottom', async function () {
    let contentText: string = await activityAuthorPage.contentContainerFirstContent.getText();
    let copiedContentText: string = await activityAuthorPage.contentContainerLastContent.getText();
    expect(contentText).to.equal(copiedContentText);

    let browserName: string = "";
    await browser.getCapabilities().then(async function (caps) {
        browserName = caps.get("browserName");
    })
    await activityAuthorPage.saveDraftBtn.click().then(async function () {
        await browser.wait(EC.visibilityOf(activityAuthorPage.toastMessageSuccess), 20000).then(async function () {
            await activityAuthorPage.toastMessageSuccess.click().then(async function () {
                await browser.sleep(2000);
                if (browserName == "Safari" || browserName == "safari") {
                    await browser.executeScript("arguments[0].click()", activityAuthorPage.publishBtn);
                }
                else {
                    await activityAuthorPage.publishBtn.click();
                }
                await browser.wait(EC.visibilityOf(activityAuthorPage.toastMessageSuccess), 20000).then(null, async function (error) {
                    if (error) {
                        return;
                    }
                }).then(async function () {
                    await activityAuthorPage.toastMessageSuccess.click().then(null, async function (error) {
                        if (error) {
                            return;
                        }
                    }).then(async function () {
                        await browser.sleep(2000);
                        await activityAuthorPage.exitEditor.click().then(async function () {
                            await browser.sleep(2000);
                        })
                    })
                })
            })
        })
    })
})

//-----------------------------------------------------------
let updatedContentText: string = `automation_text ${currentDateTime}`;
When('User modified any details of existing content and clicks on EXIT EDITOR', async function () {
    await activityAuthorPage.firstContentEditButton.click();
    browser.wait(EC.elementToBeClickable(activityAuthorPage.backgroundBtn), 5000);
    let script: string = `document.querySelector(" mat-dialog-container div.content-wrapper p").innerText = "${updatedContentText}";`
    await browser.executeScript(script).then(async function () {
        await browser.sleep(2000);
    })
    await activityAuthorPage.editDoneButton.click();
    await activityAuthorPage.exitEditor.click().then(async function () {
        await activityAuthorPage.continueWithoutSaving.click();
        await browser.sleep(2000);
    })
});

Then('modified details should not get saved', async function () {
    await activityAuthorPage.editContentBlockActivity.click();
    let contentText: string = await activityAuthorPage.contentContainerFirstContent.getText();
    await activityAuthorPage.exitEditor.click().then(async function () {
        await browser.sleep(2000);
    })
    console.log(contentText);
    expect(contentText, 'Content Block getting updated even after clicking on Cancel button').to.not.contain(updatedContentText);
})

//---------------------------------------------------------------------------

When('User clicks on Edit Content icon', async function () {
    await activityAuthorPage.firstContentEditButton.click().then(function () {
        browser.wait(EC.elementToBeClickable(activityAuthorPage.backgroundBtn), 5000);
    })
});

When('User selects Number of Columns as 2', async function () {

    //await activityAuthorPage.numberOfColDD.click();
    await activityAuthorPage.contentColValueTwo.click();
})

When('User clicks on Background button', async function () {
    await activityAuthorPage.backgroundBtn.click().then(function () {
        browser.sleep(1000);
    })
})
let chosenColor: string = "";
When('User type the color in text box present as Choose color', async function () {
    let colorArray: string[] = ["blue", "green", "red", "grey", "yellow", "orange"];
    //let selectionPool: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let len: number = colorArray.length;
    // for (let i = 0; i < len; i++) {
    //     chosenColor = colorArray[(Math.floor(Math.random() * len))];
    // };
    chosenColor = colorArray[(Math.floor(Math.random() * len))];
    await activityAuthorPage.backgroundColorContainer.click().then(async function () {
        await activityAuthorPage.chooseColor.click().then(async function () {
            await activityAuthorPage.chooseColor.clear().then(async function () {
                await activityAuthorPage.chooseColor.sendKeys(chosenColor);
            })
        })
    })
})

let latestContentText: string = `AutomationContent: ${currentDateTime}`;
When('User enter some texts in all columns present under editor', async function () {
    let numberOfColumns: number = await activityAuthorPage.columnTextWrappers.count();
    for (let i = 1; i <= numberOfColumns; i++) {
        let columnTextWrapper: ElementFinder = await element(By.xpath(`(//mat-dialog-container//div[contains(@class,'fr-element')])[${i}]`));
        await columnTextWrapper.click().then(async function () {
            await browser.sleep(2000);
        })
        await columnTextWrapper.sendKeys(`${latestContentText}:Col${i}`);
        await columnTextWrapper.click().then(async function () {
            await browser.sleep(2000);
        })
        // let columnTextWrapper: ElementFinder = await element(By.xpath("(//app-block-editor//div[@class='content-wrapper']//app-input//p)[" + i + "]"));
        // console.log(`arguments[0].innerText = '${latestContentText}:Col${i}'`);
        // await browser.executeScript(`arguments[0].innerText = '${latestContentText}:Col${i}'`, columnTextWrapper).then(async function () {
        //     // await columnTextWrapper.click().then(async function () {
        //     //    await browser.sleep(2000);
        //     // })
        //     await element(By.xpath(`//mat-dialog-container//div[contains(@class,'fr-element')][${i}]`)).click().then(async function () {
        //         await browser.sleep(2000);
        //     })
        // })
    }
});

When('user clicks on Cancel Edit so that changes donot get saved', async function () {
    await activityAuthorPage.cancelEditedContentBtn.click();
})

When('user clicks on save Edit and saves Draft and then clicks on Exit Editor', async function () {
    await activityAuthorPage.editDoneButton.click();

})

Then('the edits done to content should not get saved', async function () {
    await activityAuthorPage.editContentBlockActivity.click().then(async function () {
        let columnText: string = await activityAuthorPage.textInFirstContent.getText();
        expect(columnText).to.not.contain(latestContentText);
        await activityAuthorPage.exitEditor.click().then(function () {
            browser.sleep(2000);
        })
    })
})

//---------------------------------------------------------------------------------------------------------------

When('User updates texts in all columns present under editor', async function () {
    let numberOfColumns: number = await activityAuthorPage.columnTextWrappers.count();
    //Below code is to get today's date to update the same in the columns to know if the run was successful
    // let today: Date = new Date();
    // let dd: string = String(today.getDate()).padStart(2, '0');
    // let mm: string = String(today.getMonth() + 1).padStart(2, '0');
    // let year: number = today.getFullYear();

    // let currentDate: string = mm + '-' + dd + '-' + year;
    // let automationText: string = 'automation_text: ' + currentDate;
    // console.log(automationText);

    for (let i = 1; i <= numberOfColumns; i++) {
        let columnTextWrapper: ElementFinder = await element(By.xpath("(//app-block-editor//div[@class='content-wrapper']//app-input//p)[" + i + "]"));
        await browser.executeScript(`arguments[0].innerText = '${latestContentText}:Col${i}'`, columnTextWrapper).then(async function () {
            await activityAuthorPage.columnTextWrappers.get(i - 1).click().then(async function () {
                browser.sleep(2000);
            })

        })
    }
})


When('user clicks on Done and saves Draft and then clicks on Exit Editor', async function () {
    await activityAuthorPage.editDoneButton.click().then(async function () {
        browser.sleep(3000).then(async function () {
            // await activityAuthorPage.saveDraftBtn.click().then(async function () {
            //     await activityAuthorPage.exitEditor.click();
            // })
            await activityAuthorPage.saveDraftBtn.click().then(async function () {
                await browser.wait(EC.visibilityOf(activityAuthorPage.toastMessageSuccess), 20000).then(async function () {
                    await activityAuthorPage.toastMessageSuccess.click().then(async function () {
                        await browser.sleep(2000);
                        await activityAuthorPage.publishBtn.click().then(async function () {
                            await browser.wait(EC.visibilityOf(activityAuthorPage.toastMessageSuccess), 20000).then(null, async function (error) {
                                if (error) {
                                    return;
                                }
                            }).then(async function () {
                                await activityAuthorPage.toastMessageSuccess.click().then(null, async function (error) {
                                    if (error) {
                                        return;
                                    }
                                }).then(async function () {
                                    await browser.sleep(2000);
                                    await activityAuthorPage.exitEditor.click().then(async function () {
                                        await browser.sleep(2000);
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })

})

Then('the edits done to content should get saved', async function () {
    await activityAuthorPage.editContentBlockActivity.click().then(async function () {
        let columnText: string = await activityAuthorPage.textInFirstContent.getText();
        expect(columnText).to.contain(latestContentText);
        await activityAuthorPage.exitEditor.click().then(function () {
            browser.sleep(2000);
        })
    })

})

//-----------------------------------------------------------------------------------------------------------------

When('User clicks on Edit Text & Image icon', async function () {
    await browser.wait(EC.invisibilityOf(element(By.xpath("//div[contains(@class,'loader_container')]"))), 30 * 1000);
    await activityAuthorPage.editImageAndTextBtn.click();
});

When('User selects Image Blocks as float image left', async function () {
    // await activityAuthorPage.imageFloatDD.click().then(async function () {
    //     await activityAuthorPage.imageFloatLeftOption.click();
    // })
    await activityAuthorPage.imageFloatLeftOption.click();
})
let latestImageDescription: String = "";

When('User type some description in text box', async function () {

    //Below code is to get today's date to update the same in the columns to know if the run was successful
    let today: Date = new Date();
    let dd: string = String(today.getDate()).padStart(2, '0');
    let mm: string = String(today.getMonth() + 1).padStart(2, '0');
    let year: number = today.getFullYear();
    let hh: number = today.getHours();
    let min: number = today.getMinutes();

    let currentDate: string = mm + '-' + dd + '-' + year + ' ' + `${hh}:${min}`;
    latestImageDescription = 'automation_text_image: ' + currentDate;
    console.log(latestImageDescription);

    await browser.executeScript("arguments[0].innerText = '" + latestImageDescription + "'", activityAuthorPage.imageDescriptionBox).then(async function () {
        await activityAuthorPage.imageDescriptionBox.click().then(async function () {
            browser.sleep(2000);
        })

    })

})
let imageTitle: string = `Text_Image ${currentDateTime}`;
let altText: string = `Auto_AltText ${Math.floor((Math.random() * 10000))}`;
let currentImageFileName: string = "";

When('User uploads image by using Upload Image button', async function () {
    let imagePath: string = "";
    await authorSanityPage.currentImageFileName.getText().then(function (currentFileName) {
        currentImageFileName = currentFileName;
        if (currentFileName.includes('Bonfire')) {
            imagePath = join(process.cwd(), 'TestData', 'Chessboard.svg');
        }
        else {
            imagePath = join(process.cwd(), 'TestData', 'Bonfire.jpg');
        }

    })

    // await activityAuthorPage.browseImageBtn.sendKeys(imagePath).then(async function () {
    //     await browser.sleep(3000);
    // });
    await activityAuthorPage.btnUploadImage.click().then(async function () {
        await activityAuthorPage.browseImageBtn.sendKeys(imagePath).then(async function () {
            await browser.sleep(5000).then(async function () {
                await activityAuthorPage.imageTitle.sendKeys(imageTitle);
                await activityAuthorPage.imageAltText.sendKeys(altText);
                await activityAuthorPage.btnUploadSelectedImage.click();
                await browser.wait(EC.invisibilityOf(element(By.css("div[aria-label*='Media Object created']"))), 15 * 1000);
                await browser.sleep(2000);
            })
        });
    })


})

Then('the edits done to Image and Text Content should not get saved', async function () {

    await activityAuthorPage.editTextImageActivity.click().then(async function () {
        let textAndImageTypeDescription: string = await activityAuthorPage.imageAndTextTypeInput.getText();
        expect(textAndImageTypeDescription).to.not.contain(latestImageDescription);
    });
})

//------------------------------------------------------------------------------------------------------
let nameOfImageSelected: string = "";
let altTextOfImageSelected: string = "";
let imageCountInMediaFolder: number;
let apiHelper = new apiHelperFunctions();
When("User uploads image by using BROWSE button", async function () {

    await createAllContentsPage.btnBrowseImage.click().then(async function () {
        await createAllContentsPage.mediaFolderInRegSuiteFolder.click().then(async function () {
            await browser.wait(EC.invisibilityOf(element(By.css("div[class*='loader_container']"))), 30 * 1000);
        })
        // await element(By.xpath("//div[contains(@class,'breadcrumb')]//a[contains(text(),'petronas')]")).click().then(async function(){
        //     await browser.wait(EC.invisibilityOf(element(By.css("div[class*='loader_container']"))),30*1000);
        // })
    })
    await createAllContentsPage.imagesInMediaFolder.count().then(async function (imageCount) {
        //expect(imageCount, 'No Images found in Media Folder').to.be.greaterThan(0);
        console.log("Media Object count:", imageCount);
        imageCountInMediaFolder = imageCount
    })
    if (imageCountInMediaFolder > 0) {
        let imagePostionSelected: number = Math.ceil(Math.random() * imageCountInMediaFolder);
        // await element(By.xpath(`(//button[contains(@name,'thumbnail')])[${imagePostionSelected}]`)).getAttribute("aria-describedby").then(async function (imageNameId) {
        //     let imageNameContainer: ElementFinder = await element(By.xpath(`//div[contains(@id,'${imageNameId}')]`));
        //     await browser.executeScript(`return arguments[0].innerText`, imageNameContainer).then(async function (imageName) {
        //         nameOfImageSelected = imageName as string;
        //     })
        // })   
        let token: string = await apiHelper.getToken("narang.mohit@bts.com", "ABab12$", "bts", TestData.apiBuildVersion, true);
        await browser.sleep(2000);

        let url: string = TestData.momentaAuthorAPIBaseUrl + `/cms/api/v1/collection/get-images-for-browse-images/777efae5d275fc1af6d2/cce2422009d84df7951c/${imageCountInMediaFolder}/1`;
        let response: any = await apiHelper.makeGetRequest(url, token, TestData.apiBuildVersion);
        console.log(response);
        let images: any[] = await response.payload.images;
        let imageSelected:any = images[imagePostionSelected - 1];
        nameOfImageSelected = imageSelected.metadata as string;
        console.log(nameOfImageSelected);

        await element(By.xpath(`(//button[contains(@name,'thumbnail')])[${imagePostionSelected}]//img`)).getAttribute("alt").then(async function (altText) {
            altTextOfImageSelected = altText;
        });
        await createAllContentsPage.ddImageSize.click().then(async function(){
            await browser.sleep(1000);
            await createAllContentsPage.imageSizeSecondOption.click();
        });
        await element(By.xpath(`(//button[contains(@name,'thumbnail')])[${imagePostionSelected}]`)).click().then(async function () {
            await createAllContentsPage.btnInsertImage.click();
        })
    }
    else {
        expect(imageCountInMediaFolder, 'No Images found in Media Folder').to.be.greaterThan(0);
    }

})


Then('the edits done to Image and Text Content should get saved', async function () {

    await activityAuthorPage.editTextImageActivity.click().then(async function () {
        let textAndImageTypeDescription: string = await activityAuthorPage.imageAndTextTypeInput.getText();
        expect(textAndImageTypeDescription).to.contain(latestImageDescription);

        await activityAuthorPage.editImageAndTextBtn.click().then(async function () {
            await createAllContentsPage.uploadedImage.getAttribute("cmsimageurl").then(async function (imageURL) {
                expect(imageURL, 'Image URL not found').to.be.not.null;
            })
            await createAllContentsPage.uploadedImageFileName.getText().then(async function (imageName) {
                let imageRegex: RegExp = /.jpg|.jpeg|.png|.gif|.bmp|.tiff/i;
                let relevantName: string = imageName.trim().split("File Name: ")[1];
                expect(nameOfImageSelected, 'Name of Uploaded Image is not correct').to.contain((relevantName.split(imageRegex))[0]);
            })
            await createAllContentsPage.uploadedImageAltText.getAttribute("ng-reflect-value").then(async function (imageAltText) {
                expect(altTextOfImageSelected, 'Image URL not found').to.equal(imageAltText);
            })
        })
        await authorSanityPage.cancelEdit.click().then(async function () {
            await activityAuthorPage.exitEditor.click().then(async function () {
                await browser.sleep(2000);
            });
        });
    });
})

//---------------------------------------------------------------------------------------------
When("User clicks on CHOOSE IMAGE button", { timeout: 300 * 1000 }, async function () {
    await (await element(By.css("button[name*='Browse Image']"))).click().then(async function () {
        await browser.wait(EC.invisibilityOf(element(By.xpath("//div[contains(@class,'loader_container')]"))), 90 * 1000);
    })
})

When("User selects the Petronas Image collection", { timeout: 300 * 1000 }, async function () {
    await activityAuthorPage.petronasImageCollection.click();
})
let imageCountPetronas: number = 0;
Then("the list of images should be displayed", async function () {
    await activityAuthorPage.imageList.count().then(async function (countOfImages) {
        console.log(countOfImages);
        imageCountPetronas = countOfImages;
        if (countOfImages == 0) {
            console.log('There are no images available on clicking on CHOOSE IMAGE. Please confirm whether this is an issue')
        }
        //expect(countOfImages).to.be.greaterThan(0);
        await element(By.css("app-image-chooser button[name*='Close']")).click();
    })
})

When("user selects any random image from the Image Chooser", async function () {
    await activityAuthorPage.imageList.get(Math.floor((Math.random()) * imageCountPetronas)).click();
})
//----------------------------------------------------------------------------------------------------------------

When("User clicks on Edit Image button", async function () {
    await activityAuthorPage.buttonEditImage.click();
})

//----------------------------------------------------------------------------------------------------------------

When('User clicks on Edit Image icon', async function () {
    // await activityAuthorPage.imgInContentTypeImage.getAttribute("src").then(async function (imageSrc) {
    //     imgSrcInContentTypeImage = imageSrc;
    //     console.log(imgSrcInContentTypeImage);
    // })
    await activityAuthorPage.editImageBtn.click().then(async function () {
        await browser.sleep(1000);

    })

})

Then('the edits done to Image Content should not get saved', async function () {

    await activityAuthorPage.editImageBlockActivity.click().then(async function () {
        await element(By.xpath(`//button[contains(text(),'Edit Image')]`)).click().then(async function () {
            await authorSanityPage.currentImageFileName.getText().then(function (currentFileName) {
                expect(currentFileName).to.contain(currentImageFileName);
            })
        })
    })
    await authorSanityPage.cancelEdit.click().then(async function () {
        await activityAuthorPage.exitEditor.click().then(async function () {
            await browser.sleep(2000);
        });
    });

})
//-----------------------------------------------------------------------------------------------------


Then('the edits done to Image Content should get saved', async function () {
    await activityAuthorPage.editImageBlockActivity.click().then(async function () {
        // await activityAuthorPage.imgInContentTypeImage.getAttribute("src").then(async function (currentImgSrc) {
        //     console.log(currentImgSrc);
        //     expect(currentImgSrc).to.not.equal(imgSrcInContentTypeImage);
        // })
        await element(By.xpath(`//button[contains(text(),'Edit Image')]`)).click().then(async function () {
            await authorSanityPage.currentImageFileName.getText().then(function (currentFileName) {
                if (currentImageFileName.includes('Bonfire')) {
                    expect(currentFileName).to.contain("Chessboard.svg");
                }
                else {
                    expect(currentFileName).to.contain("Bonfire.jpg");
                }
            })
            await activityAuthorPage.imageAltTextOnEditDialog.getAttribute("ng-reflect-value").then(async function (textOnEditPopUp) {
                expect(altText).to.contain(textOnEditPopUp.trim());
            })
            await activityAuthorPage.imageAltTextOnEditDialog.getAttribute("src").then(async function (imgSrc) {
                expect(imgSrc).to.be.not.null;
            })
        })
    })
    await authorSanityPage.cancelEdit.click().then(async function () {
        await activityAuthorPage.exitEditor.click().then(async function () {
            await browser.sleep(2000);
        });
    });
})




//-----------------------------------------------------------------------------------------------------------------

When('User clicks on Edit Cards icon', async function () {
    await activityAuthorPage.editCardsBtn.click();
});

When('User selects the card size out as Small', async function () {
    // await activityAuthorPage.cardSizeDD.click().then(async function () {

    // })
    await activityAuthorPage.cardSizeSmall.click();
})

When('User selects CARD BACK VERTICAL ALIGNMENT as Center', async function () {
    // await activityAuthorPage.cardAlignmentDD.click().then(async function () {

    // })
    await activityAuthorPage.cardAlignmentCenter.click();
})

When('User put text in Card Front content and Card Back Content', async function () {

    //Below code is to get today's date to update the same in the columns to know if the run was successful
    // let today: Date = new Date();
    // let dd: string = String(today.getDate()).padStart(2, '0');
    // let mm: string = String(today.getMonth() + 1).padStart(2, '0');
    // let year: number = today.getFullYear();
    // let hours: number = today.getHours();
    // let minutes: number = today.getMinutes();

    // let currentDateTime: string = mm + '-' + dd + '-' + year + ' ' + hours + ':' + minutes;
    let cardFrontText: string = 'automation_text_cardFront: ' + currentDateTime;
    console.log(cardFrontText);
    updatedCardFrontText = cardFrontText;
    let cardBackText: string = 'automation_text_cardBack: ' + currentDateTime;
    console.log(cardBackText);
    updatedCardBackText = cardBackText;

    await browser.executeScript("arguments[0].innerText = '" + cardFrontText + "'", activityAuthorPage.cardFrontTextInput).then(async function () {
        await activityAuthorPage.cardFrontTextInput.click().then(async function () {
            browser.sleep(2000);
        })

    })

    await browser.executeScript("arguments[0].innerText = '" + cardBackText + "'", activityAuthorPage.cardBackTextInput).then(async function () {
        await activityAuthorPage.cardBackTextInput.click().then(async function () {
            browser.sleep(2000);
        })

    })


})



Then('the edits done to Card should not get saved', async function () {
    await activityAuthorPage.editCardBlockActivity.click().then(async function () {
        await activityAuthorPage.cardSizeElement.getAttribute("class").then(async function (cardSize) {
            console.log(cardSize);
            await activityAuthorPage.cardFrontText.getText().then(async function (frontText) {
                //console.log(frontText, updatedCardFrontText);

                expect(frontText).to.not.equal(updatedCardFrontText);
                await activityAuthorPage.cardFlipBtn.click().then(async function () {
                    await browser.sleep(1500).then(async function () {
                        await activityAuthorPage.cardBackText.getText().then(async function (backText) {
                            expect(backText).to.not.equal(updatedCardBackText);
                        })
                    })

                })
            })
        })
    })
    await activityAuthorPage.exitEditor.click().then(async function () {
        await browser.sleep(2000);
    })
})

//--------------------------------------------------------------------------------------------------------

Then('the edits done to Card should get saved', async function () {

    await activityAuthorPage.editCardBlockActivity.click().then(async function () {
        await activityAuthorPage.cardSizeElement.getAttribute("class").then(async function (cardSize) {
            expect(cardSize).to.contain('small');
            console.log(cardSize);
            await activityAuthorPage.cardFrontText.getText().then(async function (frontText) {
                expect(frontText).to.equal(updatedCardFrontText);
                await activityAuthorPage.cardFlipBtn.click().then(async function () {
                    browser.sleep(1500).then(async function () {
                        await activityAuthorPage.cardBackText.getText().then(async function (backText) {
                            expect(backText).to.equal(updatedCardBackText);
                        })
                    })

                })
            })
        })
    })
    await activityAuthorPage.exitEditor.click().then(async function () {
        await browser.sleep(2000);
    })

})

//------------------------------------------------------------------------------------------------------------

When('User clicks on ADD CARD button and validates if new card is added to editable menu', async function () {

    await activityAuthorPage.cardFrontContainers.count().then(async function (cardCount) {
        currentCardCount = cardCount;
        activityAuthorPage.addCardBtn.click().then(async function () {
            await browser.sleep(1000).then(async function () {
                let cardCountLatest: number = await activityAuthorPage.cardFrontContainers.count();
                expect(cardCountLatest).to.equal(cardCount + 1);
            })
        })
    })

});

When('User put text in new Card Front content and Back Content', async function () {

    //Below code is to get today's date to update the same in the columns to know if the run was successful

    let cardFrontText: string = 'automation_text_newCardFront: ' + currentDateTime;
    console.log(cardFrontText);
    let cardBackText: string = 'automation_text_newCardBack: ' + currentDateTime;
    console.log(cardBackText);

    await browser.executeScript("arguments[0].innerText = '" + cardFrontText + "'", activityAuthorPage.newCardFrontInput).then(async function () {
        await activityAuthorPage.newCardFrontInput.click().then(async function () {
            browser.sleep(2000);
        })

    })

    await browser.executeScript("arguments[0].innerText = '" + cardBackText + "'", activityAuthorPage.newCardBackInput).then(async function () {
        await activityAuthorPage.newCardBackInput.click().then(async function () {
            browser.sleep(2000);
        })

    })

})

Then('the card should not get added', async function () {
    await activityAuthorPage.editCardBlockActivity.click().then(async function () {
        await activityAuthorPage.editCardsBtn.click().then(async function () {
            await activityAuthorPage.cardFrontContainers.count().then(async function (currentCount) {
                expect(currentCount).to.equal(currentCardCount);
                await activityAuthorPage.cancelEditedContentBtn.click().then(async function () {
                    await activityAuthorPage.exitEditor.click().then(async function () {
                        await browser.sleep(2000);
                    })
                });
            })
        })
    })
})

Then('the card should get added', async function () {
    await activityAuthorPage.editCardBlockActivity.click().then(async function () {
        await activityAuthorPage.editCardsBtn.click().then(async function () {
            await activityAuthorPage.cardFrontContainers.count().then(async function (currentCount) {
                expect(currentCount).to.equal(currentCardCount + 1);
                await activityAuthorPage.cancelEditedContentBtn.click().then(async function () {
                    await activityAuthorPage.exitEditor.click().then(async function () {
                        await browser.sleep(2000);
                    })
                });
            })
        })
    })
})

//------------------------------------------------------------------------------------------------

Then('Save Draft and Publish buttons should be disabled', async function () {
    await activityAuthorPage.saveDraftBtn.isEnabled().then(async function (saveDraftBtnStatus) {
        expect(saveDraftBtnStatus).to.be.false;

        await activityAuthorPage.publishBtn.isEnabled().then(async function (publishBtnStatus) {
            expect(publishBtnStatus).to.be.false;
            //await activityAuthorPage.exitEditor.click();
        });

    });

})

Then('Save Draft and Publish buttons should be enabled', async function () {
    await activityAuthorPage.saveDraftBtn.isEnabled().then(async function (saveDraftBtnStatus) {
        expect(saveDraftBtnStatus).to.be.true;

        await activityAuthorPage.publishBtn.isEnabled().then(async function (publishBtnStatus) {
            expect(publishBtnStatus).to.be.true;
            await activityAuthorPage.exitEditor.click();
        });

    });

})

//--------------------------------------------------------------------------------------------------------

When('User clicks on Delete Card button', async function () {
    //console.log("Still need to add the delete Block as bug is currently open for the same.");
    await activityAuthorPage.cardFrontContainers.count().then(async function (cardCount) {
        currentCardCount = cardCount;
        activityAuthorPage.deleteLastCard.click().then(async function () {
            await browser.sleep(1000).then(async function () {
                let cardCountLatest: number = await activityAuthorPage.cardFrontContainers.count();
                expect(cardCountLatest).to.equal(cardCount - 1);
            })
        })
    })
});

Then('the card should get deleted', async function () {
    await activityAuthorPage.editCardBlockActivity.click().then(async function () {
        await activityAuthorPage.editCardsBtn.click().then(async function () {
            await activityAuthorPage.cardFrontContainers.count().then(async function (currentCount) {
                expect(currentCount).to.equal(currentCardCount - 1);
                await activityAuthorPage.cancelEditedContentBtn.click().then(function () {
                    activityAuthorPage.exitEditor.click();
                });
            })
        })
    })
});

Then('this is a blank step', async function () {
    console.log(join(process.cwd(), 'TestData', 'dummyFile.txt'));
    fs.readFile(join(process.cwd(), 'TestData', 'dummyFile.txt'), 'utf8', function (error, data) {
        console.log(data);
    })
})


// When('User add atleast one content i.e. Video by dragging it to main content body', async function () {
//     var fromEle=element(By.deepCss('div.mat-list-item-content'))
// var toEle=element(By.deepCss('div#cdk-drop-list-0.blocks-container.edit-area.cdk-drop-list'));
//     browser.actions().mouseMove(fromEle).perform();
// browser.sleep(6000);
// browser.actions().mouseDown(fromEle).perform();
// browser.sleep(6000);
// browser.actions().mouseMove(toEle).perform();
// browser.sleep(6000);
// browser.actions().mouseUp(toEle).perform();
// browser.sleep(6000);
// })

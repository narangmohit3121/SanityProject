import {When, Then} from "cucumber";
import { AuthoringDownloadPDFPageLocate } from "../../../../PageObjects/AuthorApp POM/Content/Create/AuthoringDownloadPDF";
let authoringdownloadpdf = new AuthoringDownloadPDFPageLocate();


When('User should click on Screen Grab Content', async function () {
    await authoringdownloadpdf.cntScreenGrab.isDisplayed().then(async function(){
        await authoringdownloadpdf.cntScreenGrab.click();
    })
  });

  Then('User should check Screen Grab block is present under CMS', async function () {
    await authoringdownloadpdf.blkScreenGrab.isDisplayed().then(async function(){
        await authoringdownloadpdf.blkScreenGrab.getText().then(async function(txt){
            console.log(txt)
        })
    })
  });
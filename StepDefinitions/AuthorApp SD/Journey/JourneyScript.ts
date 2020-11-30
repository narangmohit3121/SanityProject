import {When, Then} from "cucumber";
import { JourneyScriptPageLocate } from "../../../PageObjects/AuthorApp POM/Journey/JourneyScript";
import { browser,element, By } from "protractor";
import chai = require('chai');
import { RegistrationFlowPageLocate } from "../../../PageObjects/UserApp POM/Home/RegistrationFlowPage";
var expect = chai.expect;
let journeyscript = new JourneyScriptPageLocate();
let expModuletxt = 'J1 Module1';

When('User click on Journey Script folder', async function () {
    await journeyscript.fldJourneyScript.isDisplayed().then(async function(){
      await journeyscript.fldJourneyScript.click().then(async function(){
        await browser.sleep(3000);
      })
    })
  });

//Journey One

When('User click on Journey Script One', async function () {
    await journeyscript.jrnJourneyScriptOne.isDisplayed().then(async function(){
      await journeyscript.jrnJourneyScriptOne.click();
    })
});

When('User click on three dots of Stage One of Journey One', async function () {
    await journeyscript.threedotsJ1EditStage1.isDisplayed().then(async function(){
      await journeyscript.threedotsJ1EditStage1.click();
    })
});

When('User click on Edit button of Stage One of Journey One', async function () {
    await journeyscript.btnEdit.isDisplayed().then(async function(){
      await journeyscript.btnEdit.click();
    })
});

When('User enter Script to hide under Edit Stage of Stage One of Journey One as {string}', async function (string) {
    await journeyscript.txtScriptEditStageActivity.isDisplayed().then(async function(){
      await journeyscript.txtScriptEditStageActivity.sendKeys(string);
    })
});

When('User click on Done Journey Script', async function () {
    await journeyscript.btnDone.isDisplayed().then(async function(){
      await journeyscript.btnDone.click();
    })
});



When('User click on three dots of Stage Two Module Two of Journey One', async function () {
    await journeyscript.threedotsJ1EditModule2.isDisplayed().then(async function(){
      await journeyscript.threedotsJ1EditModule2.click();
    })
});

When('User click on Edit button of Stage Two Module Two of Journey One', async function () {
  await journeyscript.btnEdit.isDisplayed().then(async function(){
    await journeyscript.btnEdit.click();
  })
});

When('User enter Script to hide under Edit Module of Stage Two Module Two of Journey One as {string}', async function (string) {
    await journeyscript.txtScriptEditModule.isDisplayed().then(async function(){
      await journeyscript.txtScriptEditModule.sendKeys(string);
    })
});



When('User click on three dots of Stage Two Module Three of Journey One', async function () {
    await journeyscript.threedotsJ1EditModule3.isDisplayed().then(async function(){
      await journeyscript.threedotsJ1EditModule3.click();
    })
});

When('User click on Edit button of Stage Two Module Three of Journey One', async function () {
  await journeyscript.btnEdit.isDisplayed().then(async function(){
    await journeyscript.btnEdit.click();
  })
});

When('User enter Script to revisit under Edit Module of Stage Two Module Three of Journey One as {string}', async function (string) {
    await journeyscript.txtScriptEditModule.isDisplayed().then(async function(){
      await journeyscript.txtScriptEditModule.sendKeys(string);
    })
});



When('User click on three dots of Stage Three Activity Four of Journey One', async function () {
    await journeyscript.threedotsJ1EditActivity4.isDisplayed().then(async function(){
      await journeyscript.threedotsJ1EditActivity4.click();
    })
});

When('User click on Edit button of Stage Three Activity Four of Journey One', async function () {
  await journeyscript.btnEdit.isDisplayed().then(async function(){
    await journeyscript.btnEdit.click();
  })
});

When('User enter Script to hide under Edit Activity of Stage Three Activity Four of Journey One as {string}', async function (string) {
    await journeyscript.txtScriptEditStageActivity.isDisplayed().then(async function(){
      await journeyscript.txtScriptEditStageActivity.sendKeys(string);
    })
});



When('User click on three dots of Stage Three Activity Five of Journey One', async function () {
    await journeyscript.threedotsJ1EditActivity5.isDisplayed().then(async function(){
      await journeyscript.threedotsJ1EditActivity5.click();
    })
});

When('User click on Edit button of Stage Three Activity Five of Journey One', async function () {
  await journeyscript.btnEdit.isDisplayed().then(async function(){
    await journeyscript.btnEdit.click();
  })
});

When('User enter Script to revisit under Edit Activity of Stage Three Activity Five of Journey One as {string}', async function (string) {
  await journeyscript.txtScriptEditStageActivity.isDisplayed().then(async function(){
    await journeyscript.txtScriptEditStageActivity.sendKeys(string);
  })    
});


//Journey Two

When('User click on Journey Script Two', async function () {
  await journeyscript.jrnJourneyScriptTwo.isDisplayed().then(async function(){
    await journeyscript.jrnJourneyScriptTwo.click();
  })
});

When('User click on three dots of Stage One of Journey Two', async function () {
  await journeyscript.threedotsJ2EditStage1.isDisplayed().then(async function(){
    await journeyscript.threedotsJ2EditStage1.click();
  })
});

When('User click on Edit button of Stage One of Journey Two', async function () {
  await journeyscript.btnEdit.isDisplayed().then(async function(){
    await journeyscript.btnEdit.click();
  })
});

When('User enter Script to hide under Edit Stage of Stage One of Journey Two as {string}', async function (string) {
  await journeyscript.txtScriptEditStageActivity.isDisplayed().then(async function(){
    await journeyscript.txtScriptEditStageActivity.sendKeys(string);
  })
});

// When('User click on Done Journey Script', async function () {
//   await journeyscript.btnDone.isDisplayed().then(async function(){
//     await journeyscript.btnDone.click();
//   })
// });



When('User click on three dots of Stage Two Module Two of Journey Two', async function () {
  await journeyscript.threedotsJ2EditModule2.isDisplayed().then(async function(){
    await journeyscript.threedotsJ2EditModule2.click();
  })
});

When('User click on Edit button of Stage Two Module Two of Journey Two', async function () {
await journeyscript.btnEdit.isDisplayed().then(async function(){
  await journeyscript.btnEdit.click();
})
});

When('User enter Script to hide under Edit Module of Stage Two Module Two of Journey Two as {string}', async function (string) {
  await journeyscript.txtScriptEditModule.isDisplayed().then(async function(){
    await journeyscript.txtScriptEditModule.sendKeys(string);
  })
});



When('User click on three dots of Stage Two Module Three of Journey Two', async function () {
  await journeyscript.threedotsJ2EditModule3.isDisplayed().then(async function(){
    await journeyscript.threedotsJ2EditModule3.click();
  })
});

When('User click on Edit button of Stage Two Module Three of Journey Two', async function () {
await journeyscript.btnEdit.isDisplayed().then(async function(){
  await journeyscript.btnEdit.click();
})
});

When('User enter Script to revisit under Edit Module of Stage Two Module Three of Journey Two as {string}', async function (string) {
  await journeyscript.txtScriptEditModule.isDisplayed().then(async function(){
    await journeyscript.txtScriptEditModule.sendKeys(string);
  })
});



When('User click on three dots of Stage Three Activity Four of Journey Two', async function () {
  await journeyscript.threedotsJ2EditActivity4.isDisplayed().then(async function(){
    await journeyscript.threedotsJ2EditActivity4.click();
  })
});

When('User click on Edit button of Stage Three Activity Four of Journey Two', async function () {
await journeyscript.btnEdit.isDisplayed().then(async function(){
  await journeyscript.btnEdit.click();
})
});

When('User enter Script to hide under Edit Activity of Stage Three Activity Four of Journey Two as {string}', async function (string) {
  await journeyscript.txtScriptEditStageActivity.isDisplayed().then(async function(){
    await journeyscript.txtScriptEditStageActivity.sendKeys(string);
  })
});



When('User click on three dots of Stage Three Activity Five of Journey Two', async function () {
  await journeyscript.threedotsJ2EditActivity5.isDisplayed().then(async function(){
    await journeyscript.threedotsJ2EditActivity5.click();
  })
});

When('User click on Edit button of Stage Three Activity Five of Journey Two', async function () {
await journeyscript.btnEdit.isDisplayed().then(async function(){
  await journeyscript.btnEdit.click();
})
});

When('User enter Script to revisit under Edit Activity of Stage Three Activity Five of Journey Two as {string}', async function (string) {
await journeyscript.txtScriptEditStageActivity.isDisplayed().then(async function(){
  await journeyscript.txtScriptEditStageActivity.sendKeys(string);
})    
});

When('Participant validates Module title and clicks on Start button of first Journey first Activity', async function () {
     await journeyscript.ttlJ1Module1.isDisplayed().then(async function(){
       await journeyscript.ttlJ1Module1.getText().then(async function(actModuletxt){
         expect(actModuletxt).to.eql(expModuletxt);
       })
     })
     await journeyscript.btnStartJ1Act1.isDisplayed().then(async function(){
       await journeyscript.btnStartJ1Act1.click();
     })
  });

  When('Participant completes first Activity', async function () {
    await journeyscript.rdbtnMumbai.isDisplayed().then(async function(){
      await journeyscript.rdbtnMumbai.click();
    })
 });
import { Config } from "protractor";
import { browser } from 'protractor';
const { join } = require('path');
var reporter = require('cucumber-html-reporter');
export let config: Config = {
  framework: 'custom', //set to "custom" instead of cucumber
  frameworkPath: require.resolve('protractor-cucumber-framework'), //path relative to the current config file
  //seleniumAddress: 'http://localhost:4444/wd/hub', // Address form running selenium server
  directConnect: true,

  /*Capabilities to be passed to the webdriver instance
  multiCapabilities :[  
  {browserName: 'firefox'},
  {browserName: 'InternetExplorer'},
  {browserName: 'MicrosoftEdge'},
  chromeOptions:{
    args: ["--headless", "--window-size=800x600"]
    }
  */

  // capabilities:
  // {
  //   browserName: 'firefox',
  //   loggingPrefs: {
  //     driver: 'WARNING',
  //     server: 'WARNING',
  //     browser: 'INFO'
  //   }
  // },
  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {
      'args': ['--headless','--no-sandbox','--disable-dev-shm-usage']
    }
  },

  specs: ['../Features/Sprint 7/TextEntry.feature'], // accepts a glob

  cucumberOpts: {
    tags: "@TextEntry2",
    format: 'json:./cucumberReportGenerate.json',
    require: ['./stepDefinitions/Sprint*/?*.js','./stepDefinitions/timeOuts.js','./stepDefinitions/hooks.js}'] // accepts a glob
  },

  plugins: [
    {
        // The module name
        package: 'protractor-image-comparison',
        // Some options, see the docs for more
        options: {
            baselineFolder: join(process.cwd(), './baseline/'),
            formatImageName: `{tag}-{logName}-{width}x{height}`,
            screenshotPath: join(process.cwd(), '.tmp/'),
            savePerInstance: true,
            // ... more options
        },
    },
],

  getPageTimeout: 120000,
  allScriptsTimeout: 120000,
  onPrepare: function () {
  }
/**const protractorImageComparison =require('protractor-image-comparison');
  browser.protractorImageComparison = new protractorImageComparison({
  baselineFolder: 'C:/Users/Administrator/Desktop/Protractor/Response_Graph_Image.png',
  screenshotPath: './Screenshots/fullpage.png',
  autoSaveBaseline: true
}),
    
  browser.waitForAngularEnabled(true);
  browser.ignoreSynchronization = false;
  browser.manage().window().maximize();
  browser.manage().window().setSize(1690, 1000);
}*/,

onComplete: () => {
   browser.waitForAngularEnabled(false);
     var options = {
       theme: 'bootstrap',
       jsonFile: './cucumberReportGenerate.json',
       output: './cucumberReportGenerate.html',
       reportSuiteAsScenarios: true,
       launchReport: true,
       metadata: {
         "App Version": "0.3.2",
         "Test Environment": "TEST",
         "Browser": "Chrome  75.0",
         "Platform": "Windows 10",
         "Parallel": "Scenarios",
         "Executed": "Local"
          }
      }
     reporter.generate(options)
    }
};
import { Config } from "protractor";
import { browser } from 'protractor';
const { join } = require('path');
var reporter = require('cucumber-html-reporter');
export let config: Config = {
  seleniumAddress: 'http://hub-cloud.browserstack.com/wd/hub',
  framework: 'custom', //set to "custom" instead of cucumber
  frameworkPath: require.resolve('protractor-cucumber-framework'), //path relative to the current config file
  //seleniumAddress: 'http://localhost:4444/wd/hub', // Address form running selenium server

  multiCapabilities: [{
    "os": "Windows",
    "os_version": "10",
    "browserName": "Chrome",
    "browser_version": "latest",
    "browserstack.local": "false",
    "browserstack.user": "mohitnarang1",
    "browserstack.key": "kudxHb4LdzhP9zg5xpwz",
    "browserstack.idleTimeout": "240"
  },
  {
    "os": "Windows",
    "os_version": "10",
    "browserName": "Firefox",
    "browser_version": "latest",
    "browserstack.local": "false",
    "browserstack.user": "mohitnarang1",
    "browserstack.key": "kudxHb4LdzhP9zg5xpwz",
    "browserstack.idleTimeout": "240"
  }
  ],

  // capabilities: {
  //   'browserName': 'chrome',
  //   'chromeOptions':{
  //     'args': ['--disable-web-security'],
  //     prefs:{
  //       'download': {
  //         'prompt_for_download': false,
  //         'default_directory': join(process.cwd(),'DownloadFolder'),
  //         'directory_upgrade': true
  //       }
  //     }
  //   }
  // },

  specs: ['../Features/SanityProject/CreateAllContents.feature'], // accepts a glob

  cucumberOpts: {
    tags: "@CreateCustomCode01",
    format: 'json:./cucumberReportGenerate.json',
    require: ['./stepDefinitions/**/*.js', './Utils/*.js'] // accepts a glob
    //['./stepDefinitions/Sprint*/?*.js', './Utils/timeOuts.js', './Utils/hooks.js','./stepDefinitions/*.js']
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

  getPageTimeout: 240000,
  allScriptsTimeout: 240000,
  onPrepare: function () {
    browser.manage().window().maximize();
    browser.manage().timeouts().implicitlyWait(30 * 1000);
  },

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
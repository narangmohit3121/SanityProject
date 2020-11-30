import { Config } from "protractor";
import { browser } from 'protractor';
const { join } = require('path');
var reporter = require('cucumber-html-reporter');
export let config: Config = {
  framework: 'custom', //set to "custom" instead of cucumber
  frameworkPath: require.resolve('protractor-cucumber-framework'), //path relative to the current config file
  //seleniumAddress: 'http://localhost:4444/wd/hub', // Address form running selenium server
  directConnect: true,

  //'args': ['--headless','--disable-web-security',"--log-level=2"],
  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {
      'args': ['--headless','--window-size=1920,1080','--disable-web-security', '--disable-dev-shm-usage', '--no-sandbox','--log-level=2'],
      prefs: {
        'download': {
          'prompt_for_download': false,
          'default_directory': join(process.cwd(), 'DownloadFolder'),
          'directory_upgrade': true
        }
      }
    }
  },
  suites:{
    E2E_CohortUsers_Test:['../Features/AuthorApp/Cohort-Users/*.feature'],
    E2E_ClientPage_Test:['../Features/AuthorApp/Client Page/*.feature'],
    E2E_Login_Test:['../Features/AuthorApp/Login/*.feature'],
    E2E_Create_Content:['../Features/AuthorApp/Content/**/*.feature'],
    E2E_Author_Journey:['../Features/AuthorApp/Journey/*.feature']
  },

  specs: [
    '../Features/AuthorApp/Cohort-Users/AssignTeamLead.feature',
    '../Features/AuthorApp/Cohort-Users/AuthoringAddUser.feature',
    '../Features/AuthorApp/Cohort-Users/AuthoringCohortListing.feature',
    '../Features/AuthorApp/Cohort-Users/AuthoringCreateCohort.feature',
    '../Features/AuthorApp/Cohort-Users/AuthoringUserListing.feature',
    '../Features/AuthorApp/Cohort-Users/BulkUserUpload.feature',
    '../Features/AuthorApp/Cohort-Users/CreateTeams.feature',
    '../Features/AuthorApp/Cohort-Users/CreateUser.feature',
    '../Features/AuthorApp/Cohort-Users/EditCohort.feature',
    '../Features/AuthorApp/Cohort-Users/EditUser.feature',
    '../Features/AuthorApp/Cohort-Users/MoveUser.feature',
    '../Features/AuthorApp/Cohort-Users/ResetJourney.feature',
    '../Features/AuthorApp/Cohort-Users/ResetJourneyUser.feature',
    '../Features/AuthorApp/Cohort-Users/UserMapping.feature',


    
    '../Features/AuthorApp/Client Page/ClientConfiguration.feature',
   '../Features/AuthorApp/Client Page/CRUDTheme.feature', 
   '../Features/AuthorApp/Client Page/EditMessaging.feature',
   '../Features/AuthorApp/Client Page/UpdateClientConfiguration.feature',
   '../Features/AuthorApp/Login/Login.feature',
   '../Features/AuthorApp/Login/SSO.feature'], 
  //accepts a glob

  cucumberOpts: {
   
    tags: "@E2ECohortUsers or @E2ETest_ClientPage or @E2ETest_Login or @E2ETest_CMS or @E2EAuthor_Journey",
    format: 'json:./cucumberReportGenerate.json',
    require: ['./StepDefinitions/**/*.js', './Utils/*.js','./JSFiles/StepDefinitions/**/*.js', './JSFiles/Utils/*.js'],
    dryRun: true
    // accepts a glob
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

  getPageTimeout: 250000,
  allScriptsTimeout: 250000,
  params: {
    browserstackRun: false,
    prodSanityRun:false
  },
  onPrepare: async function () {
    browser.manage().window().maximize();
    await browser.manage().timeouts().implicitlyWait(30 * 1000);
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
        "App Version": "1.1.14",
        "Environment": "QA",
        "Browser": "Chrome Version 84",
        "Platform": "Windows 10",
        "Parallel": "False",
        "Executed": "Via Jenkins Server"
      }
    }
    reporter.generate(options)
  }
};
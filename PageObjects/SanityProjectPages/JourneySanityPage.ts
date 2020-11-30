import { ElementFinder, ElementArrayFinder, By, element } from "protractor";

export class JourneySanityPageObjects {
    tglShowFullJourneyName: ElementFinder;
    tglDirectLaunchActivity: ElementFinder;
    tglSideMenuCollapsed: ElementFinder;
    tglUseAzurePlayer: ElementFinder;
    tglSkipJourneyDetailScreen: ElementFinder;
    tglShowLeaderboardMetrics: ElementFinder;
    tglShowCompletedActivitiesSection: ElementFinder;
    tglHasEntryPage: ElementFinder;
    tglDisableLocks: ElementFinder;
    tglDisableNotifications: ElementFinder;
    tglHideLeaderboard: ElementFinder;
    tglAllowContentSharing: ElementFinder;
    tglShowSupportLinkAsPopUp: ElementFinder;
    tglShowSubMenuNavigationInJourney: ElementFinder;
    tglShowCompletionStatusOnModuleBar: ElementFinder;
    journeyConfigTab: ElementFinder;
    generalTabJourneyConfig: ElementFinder;
    tglStatusShowFullJourneyName: ElementFinder;
    tglStatusDirectLaunchActivity: ElementFinder;
    tglStatusSideMenuCollapsed: ElementFinder;
    tglStatusUseAzurePlayer: ElementFinder;
    tglStatusSkipJourneyDetailScreen: ElementFinder;
    tglStatusShowLeaderboardMetrics: ElementFinder;
    tglStatusShowCompletedActivitiesSection: ElementFinder;
    tglStatusHasEntryPage: ElementFinder;
    tglStatusDisableLocks: ElementFinder;
    tglStatusDisableNotifications: ElementFinder;
    tglStatusHideLeaderboard: ElementFinder;
    tglStatusAllowContentSharing: ElementFinder;
    tglStatusShowSupportLinkAsPopUp: ElementFinder;
    tglStatusShowSubMenuNavigationInJourney: ElementFinder;
    tglStatusShowCompletionStatusOnModuleBar: ElementFinder;
    tglDisableVideoForwarding: ElementFinder;
    tglStatusDisableVideoForwarding: ElementFinder;
    btnCreateNewJourney: ElementFinder;
    btnCreateNewJourneyOptionInMenu: ElementFinder;
    newJourneyTitle: ElementFinder;
    cohort_UsersTab: ElementFinder;
    fiterJourneys: ElementFinder;
    btnCreateCohort: ElementFinder;
    cohortTitle: ElementFinder;
    cohortStartDate: ElementFinder;
    cohortEndDate: ElementFinder;
    tglEnableCohort: ElementFinder;
    saveCohort: ElementFinder;
    openNewlyAddedCohort: ElementFinder;
    btnCreateUser: ElementFinder;
    btnCreateNewUser: ElementFinder;
    newUserFName: ElementFinder;
    newUserLName: ElementFinder;
    newUserEmail: ElementFinder;
    newUserPassword: ElementFinder;
    btnSaveJourney: ElementFinder;
    linkedActivityNames: ElementArrayFinder;
    btnCohortFunctions: ElementFinder;
    tglMyCoaching: ElementFinder;
    navigationTabJourneyConfig: ElementFinder;
    tglStatusMyCoaching: ElementFinder;

    constructor(){
        this.journeyConfigTab = element(By.xpath("//div[contains(text(),' Journey Configuration')]"));
        this.generalTabJourneyConfig = element(By.xpath("//div[contains(text(),'General')]"));
        this.navigationTabJourneyConfig = element(By.xpath("//div[contains(text(),'Navigation')]"));

        this.tglShowFullJourneyName = element(By.css("mat-slide-toggle[name='showFullJourneyName'] label"));
        this.tglDirectLaunchActivity = element(By.css("mat-slide-toggle[name='directRedirectIntoActivity'] label"));
        this.tglSideMenuCollapsed = element(By.css("mat-slide-toggle[name='sideMenuCollapsedDuringActivity'] label"));
        this.tglUseAzurePlayer = element(By.css("mat-slide-toggle[name='useAzureMediaPlayer'] label"));
        this.tglSkipJourneyDetailScreen = element(By.css("mat-slide-toggle[name='skipJourneyDetailScreen'] label"));
        this.tglShowLeaderboardMetrics = element(By.css("mat-slide-toggle[name='showLeaderBoardMetricsBelowDiveBackIn'] label div[class*='-bar']"));
        this.tglShowCompletedActivitiesSection = element(By.css("mat-slide-toggle[name='showCompletedActivitiesInSeperateSection'] label"));
        this.tglHasEntryPage =  element(By.css("mat-slide-toggle[name='hasEntryPage'] label"));
        this.tglDisableLocks = element(By.css("mat-slide-toggle[name='disableLocks'] label"));
        this.tglDisableNotifications = element(By.css("mat-slide-toggle[name='disableNotifications'] label"));
        this.tglDisableVideoForwarding = element(By.css("mat-slide-toggle[name='disableVideoForwarding'] label"));
        this.tglHideLeaderboard = element(By.css("mat-slide-toggle[name='hideLeaderBoard'] label"));
        this.tglAllowContentSharing = element(By.css("mat-slide-toggle[name='contentSharing'] label"));
        this.tglShowSupportLinkAsPopUp = element(By.css("mat-slide-toggle[name='showSupportLinkAsPopUp'] label"));
        this.tglShowSubMenuNavigationInJourney = element(By.css("mat-slide-toggle[name='showSubMenuNavigationForJourney'] label"));
        this.tglShowCompletionStatusOnModuleBar = element(By.css("mat-slide-toggle[name='showCompletionStatusOnModuleBar'] label"));
        
        this.tglStatusShowFullJourneyName = element(By.css("mat-slide-toggle[name='showFullJourneyName']"));
        this.tglStatusDirectLaunchActivity = element(By.css("mat-slide-toggle[name='directRedirectIntoActivity']"));
        this.tglStatusSideMenuCollapsed = element(By.css("mat-slide-toggle[name='sideMenuCollapsedDuringActivity']"));
        this.tglStatusUseAzurePlayer = element(By.css("mat-slide-toggle[name='useAzureMediaPlayer']"));
        this.tglStatusSkipJourneyDetailScreen = element(By.css("mat-slide-toggle[name='skipJourneyDetailScreen']"));
        this.tglStatusShowLeaderboardMetrics = element(By.css("mat-slide-toggle[name='showLeaderBoardMetricsBelowDiveBackIn']"));
        this.tglStatusShowCompletedActivitiesSection = element(By.css("mat-slide-toggle[name='showCompletedActivitiesInSeperateSection']"));
        this.tglStatusHasEntryPage =  element(By.css("mat-slide-toggle[name='hasEntryPage']"));
        this.tglStatusDisableLocks = element(By.css("mat-slide-toggle[name='disableLocks']"));
        this.tglStatusDisableNotifications = element(By.css("mat-slide-toggle[name='disableNotifications']"));
        this.tglStatusDisableVideoForwarding = element(By.css("mat-slide-toggle[name='disableVideoForwarding']"));
        this.tglStatusHideLeaderboard = element(By.css("mat-slide-toggle[name='hideLeaderBoard']"));
        this.tglStatusAllowContentSharing = element(By.css("mat-slide-toggle[name='contentSharing']"));
        this.tglStatusShowSupportLinkAsPopUp = element(By.css("mat-slide-toggle[name='showSupportLinkAsPopUp']"));
        this.tglStatusShowSubMenuNavigationInJourney = element(By.css("mat-slide-toggle[name='showSubMenuNavigationForJourney']"));
        this.tglStatusShowCompletionStatusOnModuleBar = element(By.css("mat-slide-toggle[name='showCompletionStatusOnModuleBar']")); 

        this.linkedActivityNames = element.all(By.css("p[class*='subtitle'] span"));
        
        this.btnCreateNewJourney = element(By.css("button[name='journey']"));
        this.btnCreateNewJourneyOptionInMenu = element(By.xpath("//span[contains(text(),'New Journey')]/.."));
        this.newJourneyTitle = element(By.css("input[placeholder*='Journey Title']"));
        this.btnSaveJourney = element(By.css("mat-dialog-container button[name*='save']"));
        
        this.cohort_UsersTab = element(By.css("div[class*='mat-tab-labels'] div[role*='tab']:nth-child(2)"));
        this.fiterJourneys = element(By.css("div[class*='mat-tab-labels'] div[role*='tab']:nth-child(2)"));
        //span[contains(text(),'4454')]/..;
        this.btnCreateCohort = element(By.css("button[name*='Create Cohort']"));
        this.cohortTitle = element(By.css("input[name*='Cohort Title' ]"));
        this.cohortStartDate = element(By.css("input[placeholder*='Start Date' ]"));
        this.cohortEndDate = element(By.css("input[placeholder*='End Date' ]"));
        this.tglEnableCohort = element(By.xpath("//mat-label[contains(text(),'Enabled')]/following-sibling::mat-slide-toggle//label"));
        this.saveCohort = element(By.css("button[name='Save']"));
        this.openNewlyAddedCohort = element(By.css("button[name*='Cohort Title']"));
        this.btnCohortFunctions = element(By.css("button[class*='cohortFunctions']"));
        this.btnCreateNewUser = element(By.css("button[name*='Create User']"));
        this.newUserFName = element(By.css("input[name*='First Name']"));
        this.newUserLName = element(By.css("input[name*='Last Name']"));
        this.newUserEmail = element(By.css("input[name*='Email']"));
        this.newUserPassword = element(By.css("input[name*='Password']"));
        this.btnCreateUser = element(By.css("mat-dialog-container button[name*='Create']"));

        //JourneyConfig Navigation Tab
        this.tglMyCoaching = element(By.xpath("//span[contains(text(),'Coaching')]/ancestor::div[contains(@class,'notify-list')]//label"));
        this.tglStatusMyCoaching = element(By.css("//span[contains(text(),'Coaching')]/ancestor::div[contains(@class,'notify-list')]//mat-slide-toggle"));
    }
    
}
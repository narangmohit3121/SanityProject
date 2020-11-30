import { ElementFinder, element, by, browser } from "protractor";


export class notificationPage {

  public users: ElementFinder;
  public journey: ElementFinder;
  public cohort: ElementFinder;
  public createUser: ElementFinder;
  public userAdded: ElementFinder;
  public createBtn: ElementFinder;
  public firstName: ElementFinder;
  public lastName: ElementFinder;
  public email: ElementFinder;
  public password: ElementFinder;
  public msgAdd: ElementFinder;
  public msgTextbox: ElementFinder;
  public msgCancel: ElementFinder;
  public msgSave: ElementFinder;
  public editIcon: ElementFinder;
  public notificationTab:ElementFinder;
  public selectDateTime:ElementFinder;
  public arrowAddMinute:ElementFinder;
  public btnSetDateTime:ElementFinder;
  public content:ElementFinder;
  public actions: ElementFinder;
  public selectCohort:ElementFinder;
  public sendNotification:ElementFinder;
  public sucMessage:ElementFinder;
  public saveBtn:ElementFinder;
  public clickOK:ElementFinder;
  public cancelBtn:ElementFinder; 
  public userSelect:ElementFinder;
  emailField:ElementFinder;
  pwdField:ElementFinder;
  loginBtn:ElementFinder;
  clickOnNotification:ElementFinder;
  getNotificationMessage : ElementFinder;
  notificationCount:ElementFinder;






  constructor() {
    this.users = element(by.xpath('(//div[@class="mat-tab-label-content"])[2]'));
    this.journey = element(by.xpath('//span[contains(text(),"Notification Journey")]'));
    this.cohort = element(by.xpath('//button[@name="Cohort Title"]'));
    this.createUser = element(by.xpath('//button[@aria-label="Create User"]'));
    this.userAdded = element(by.xpath('//td[contains(text(),"bts")]'));
    this.createBtn = element(by.xpath('//button[contains(text(),"CREATE")]'));
    this.firstName = element(by.xpath('//input[@placeholder="First Name"]'));
    this.lastName = element(by.xpath('//input[@placeholder="Last Name"]'));
    this.email = element(by.xpath('//input[@placeholder="Email"]'));
    this.password = element(by.xpath('//input[@placeholder="Password"]'));
    this.msgAdd = element(by.xpath('//span[@class="author-icon icon-plus"]'));
    this.msgTextbox = element(by.xpath('//div[@class="fr-element fr-view"]//p'));
    this.msgCancel = element(by.xpath('//div[@class="block-submit"]//button[@name="Cancel"][contains(text(),"CANCEL")]'));
    this.msgSave = element(by.xpath('//button[contains(text(),"SAVE")]'));
    this.editIcon = element(by.xpath('//p[contains(text(),"Test Notification Title1")]/parent::div//a[@href="javascript:;"]'));
    this.notificationTab = element(by.xpath('//div[contains(text(),"Notifications")]'));
    this.selectDateTime=element(by.xpath('//input[@placeholder="Select Date Time"]'));
    this.arrowAddMinute=element(by.xpath('//button[@aria-label="Add a minute"]//span'));
    this.btnSetDateTime=element(by.xpath('//span[contains(text(),"Set")]'));
    this.content=element(by.xpath('//div[@class="mat-tab-label-content"][contains(normalize-space(),"Content")]'));
    this.actions = element(by.xpath('//select[@ng-reflect-model="Actions"]'));
    this.selectCohort = element(by.xpath('//*[@ng-reflect-aria-label="select row Cohort1"]'));
    this.sendNotification = element(by.xpath('//option[@value="sendNotification"]'));
    this.sucMessage = element(by.xpath('//div[@id="toast-container"]'));
    this.saveBtn = element(by.xpath('//div[@class="block-submit"]//button[@name="Save"][contains(text(),"Save")]'));
    this.clickOK = element(by.xpath('//button[contains(normalize-space(),"OK")]'));
    this.cancelBtn = element(by.xpath('//button[@name="Cancle"]'));
    this.userSelect = element(by.xpath('//div[@class="mat-checkbox-inner-container mat-checkbox-inner-container-no-side-margin"]'));
    this.emailField= element(by.xpath('//input[@id="userEmail"]'));
    this.pwdField= element(by.xpath('//input[@id="password"]'));
    this.loginBtn= element(by.xpath('//button[@id="btnLogin"]'));
    this.clickOnNotification = element(by.xpath('//span[contains(normalize-space(),"Notifications")]'));
    this.getNotificationMessage = element(by.xpath('//div[contains(text(),"Test Notification Message")]'));
    this.notificationCount = element(by.xpath('//a[@ng-reflect-ng-class="notifications"][@data-notificationcount="1"]'));



  }
}

export class BeforeMail {
  public async openPageInNewTab(url: string) {
    await this.createNewBrowserTab();
    await this.switchToTabNumber(1);
    await browser.get(url);
    await element(by.xpath('//input[@id="addOverlay"]')).click();
    await browser.sleep(1000);
    await element(by.xpath('//input[@id="addOverlay"]')).sendKeys("btstester.2020");
    await browser.sleep(1000);
    await element(by.xpath('//button[@id="go-to-public"]')).click();
    await browser.sleep(1000);
    await element(by.xpath('//*[@id="inbox_page_title"]/div[3]/div/div')).getText();
    await browser.sleep(2000);
    await this.switchToTabNumber(0);
    await browser.sleep(1000);
  }

  public createNewBrowserTab() {
    browser.executeScript('window.open()');
  }

  public async switchToTabNumber(number: number) {
    return browser.getAllWindowHandles().then(function (handles) {
      const newWindowHandle = handles[number];
      browser.switchTo().window(newWindowHandle);
    })
  }
}


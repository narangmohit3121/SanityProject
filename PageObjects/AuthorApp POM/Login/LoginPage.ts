import { ElementFinder, By, element } from "protractor";

export class LoginPageLocate {

    //Login Fields
    txtEmail: ElementFinder;
    btnNextPwd: ElementFinder;
    txtPassword: ElementFinder;
    btnLogin: ElementFinder;

    //Validations
    toastErrorMsg: ElementFinder;
    invalidLoginMsg: ElementFinder;
    invalidLoginMsg2: ElementFinder;
    invalidErrorMsg: ElementFinder;
    blankErrorMsg: ElementFinder;
    invalidmsgstr: ElementFinder;
    blankPasswordToastmsg:ElementFinder;


    constructor() {

        //Login Fields
        this.txtEmail = element(By.xpath("//input[contains(@id,'mat-input') and @type = 'email']"));
        this.btnNextPwd = element(By.buttonText('Next'));
        this.txtPassword = element(By.xpath("//input[@id='password__field']"));
        this.btnLogin = element(By.buttonText('Login'));

        //Validations
        this.toastErrorMsg = element(By.className("toast-top-right toast-container"));
        //this.invalidLoginMsg = element(By.xpath("/html/body/app-root/app-login/div/div/div[1]/mat-card/mat-card-content/div"));
        this.invalidLoginMsg=element(By.xpath("//div[contains(@class,'login-errorMessage--show')]"));
        this.invalidLoginMsg2=element(By.xpath("//div[contains(@class,'login-errorMessage--show')]"));
        this.invalidErrorMsg = element(By.xpath("//div[@aria-label='Check email failed']"));
        this.blankErrorMsg = element(By.className('toast-message ng-star-inserted'));
        this.blankPasswordToastmsg=element(By.xpath("//div[@aria-label='Password is mandatory.']"));
    }
}
import { ElementFinder, By, element } from "protractor";

export class LoginPageLocate {

    //Login Fields
    txtEmail: ElementFinder;
    btnNextPwd: ElementFinder;
    txtPassword: ElementFinder;
    btnLogin: ElementFinder;

    //Validations
    invalidErrorMsg: ElementFinder;
    blankErrorMsg: ElementFinder;
    invalidmsgstr: ElementFinder;


    constructor() {

        //Login Fields
        this.txtEmail = element(By.xpath("//input[contains(@id,'mat-input') and @type = 'email']"));
        this.btnNextPwd = element(By.buttonText('Next'));
        this.txtPassword = element(By.id('password__field'));
        this.btnLogin = element(By.buttonText('Login'));

        //Validations
        this.invalidErrorMsg = element(By.xpath("//div[@aria-label='Check email failed']"));
        this.blankErrorMsg = element(By.className('toast-message ng-star-inserted'));
    }
}
import {commonMethods} from "../common/CommonMethods";
import {login} from "../data/selectors/Login";
import {homepage} from "../data/selectors/Homepage";
import {account} from "../data/selectors/Account";
import {commonUrls} from "../data/constants/CommonData";

const LOGOUT_TEXT = "Logout";
const INVALID_EMAIL_FORMAT_ERROR = "*email is not valid"
const INVALID_PASSWORD_ERROR = "*password must be more than 5 characters"
const AUTHENTICATION_ERROR = "Incorrect email or password."

export class LoginPage {

    clickOnAccountIcon() {
        commonMethods.clickOnElement(homepage.ACCOUNT_ICON);
    };

    assertIfUserIsLoggedIn() {
        commonMethods.assertElementContainsExpectedText(account.LOGOUT_BUTTON, LOGOUT_TEXT);
    };

    assertUserIsRedirectedToAccountLoginPage() {
        commonMethods.assertUserIsRedirectedToExpectedPage(commonUrls.ACCOUNT_LOGIN_PAGE);
    };

    //this method will type user's email
    typeEmail(text) {
        commonMethods.typeTextIntoElement(login.EMAIL_FIELD, text);
    };

    //this method will click on sign in button
    clickOnSignInButton() {
        commonMethods.clickOnElementForceTrue(login.SIGN_IN_BUTTON);
    };

    //this method will type user's password
    typePassword(text) {
        commonMethods.typeTextIntoElement(login.PASSWORD_FIELD, text);
    };

    //this method will click outside of the login fields in order to trigger validations for them
    clickOutsideOfLoginFields() {
        commonMethods.clickOnElementForceTrue(login.PROMO_BAR);
    };

    //this method will verify that email invalid email error is properly displayed
    assertEmailErrorIsDisplayedProperly() {
        commonMethods.assertElementContainsExpectedText(login.EMAIL_FIELD_ERROR, INVALID_EMAIL_FORMAT_ERROR);
    };

    //this method will verify that 5chars error is properly displayed
    assert5CharsPasswordError() {
        commonMethods.assertElementContainsExpectedText(login.PASSWORD_FIELD_ERROR, INVALID_PASSWORD_ERROR);
    };

    //this method will verify that authentication error is properly displayed
    assertIncorrectEmailOrPasswordError() {
        commonMethods.assertElementContainsExpectedText(login.AUTHENTICATION_ERROR, AUTHENTICATION_ERROR);
    };
};

export const loginPage = new LoginPage();

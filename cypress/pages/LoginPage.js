import {commonMethods} from "../common/CommonMethods";
import {login} from "../data/selectors/Login";
import {homepage} from "../data/selectors/Homepage";
import {account} from "../data/selectors/Account";
import {commonUrls} from "../data/constants/CommonData";

const LOGOUT_TEXT = "Logout";

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
    }

    //this method will type user's password
    typePassword(text) {
        commonMethods.typeTextIntoElement(login.PASSWORD_FIELD, text);
    };
}

export const loginPage = new LoginPage();

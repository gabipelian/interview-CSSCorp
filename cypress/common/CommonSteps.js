import {loginPage} from "../pages/LoginPage";
import {commonMethods} from "./CommonMethods";
import {commonData} from "../data/constants/CommonData";

export class CommonSteps {
    //used editThisCookie to find out what cookies we need
    setCookies() {
        commonMethods.setOptanonAlertBoxClosedCookie();
        commonMethods.setKlFormsModal();
        commonMethods.setOptanonConsentCookie();
        commonMethods.setCrossOriginUncaughtErrorFalse();
        commonMethods.setGlobalEWelcomeData();
    };

    insertCredentials(email, password) {
        loginPage.typeEmail(email);
        loginPage.typePassword(password);
        loginPage.clickOutsideOfLoginFields();
    }

    assertErrors(password, email, fourCharsPass, invalidEmail, testAutomationEmail, testUserEmail, fiftyCharsEmail) {
        if (password === fourCharsPass) {
            loginPage.assert5CharsPasswordError();
        } else if (email == testAutomationEmail) {
            loginPage.clickOnSignInButton();
            loginPage.assertIncorrectEmailOrPasswordError();
        } else if (email == invalidEmail) {
            loginPage.assertEmailErrorIsDisplayedProperly();
        } else if (email == testUserEmail) {
            loginPage.clickOnSignInButton();
            loginPage.assertIncorrectEmailOrPasswordError();
        } else if (email == testUserEmail) {
            loginPage.clickOnSignInButton();
            loginPage.assertIncorrectEmailOrPasswordError();
        } else if (email == fiftyCharsEmail) {
            loginPage.clickOnSignInButton();
            loginPage.assertEmailErrorIsDisplayedProperly();
        }
    }
};

export const commonSteps = new CommonSteps();
import {cookies} from "../data/constants/CommonData.js";

export class CommonMethods {
    //this method visits any page inserted as parameter
    visitPage(pageURL) {
        cy.visit(pageURL)
    };

    //this method will wait and click on any web element inserted as parameter
    clickOnElement(webElement) {
        cy.get(webElement).should('be.visible').click();
    };

    //this method wll click on an element by text
    clickOnElementByText(webElement, text) {
        cy.get(webElement).should('be.visible').contains(text, {timeout: 20000}).click({force: true});
    };

    //this method will click on any web element inserted as parameter, with force true
    clickOnElementForceTrue(webElement) {
        cy.get(webElement).click({force: true});
    };

    //this method will type any text into an input web element that is inserted as parameter
    typeTextIntoElement(webElement, text) {
        cy.get(webElement).should('be.visible').focus().type(text, {force: true});
    };

    //this method gets and checks if a URL contains the specific string inserted as parameter
    assertUserIsRedirectedToExpectedPage(string) {
        cy.url().should('include', string);
    };

    //this method gets and checks inside of a web element if it contains the specific text inserted as parameter
    assertElementContainsExpectedText(webElement, text) {
        cy.get(webElement).should('be.visible').contains(text);
    };

    //this method opens the PROD homepage of our project
    openHomepage() {
        commonMethods.visitPage('https://www.fentybeauty.com', {timeout: 30000});
    };

    //this method is setting optanon_alert_box cookie
    setOptanonAlertBoxClosedCookie() {
        cy.setCookie(cookies.OPTANON_COOKIE, cookies.OPTANON_COOKIE_VALUE);
    };

    //this method sets kl_forms_modal cookie
    setKlFormsModal() {
        cy.setCookie(cookies.FORMS_MODAL_COOKIE, cookies.FORMS_MODAL_COOKIE_VALUE);
    };

    //this method sets optanon_consent_cookie
    setOptanonConsentCookie() {
        cy.setCookie(cookies.OPTANON_CONSENT_COOKIE, cookies.OPTANON_CONSENT_COOKIE_VALUE);
    };

    setGlobalEWelcomeData() {
        cy.setCookie(cookies.GLOBAL_E_WELCOME_DATA_COOKIE, cookies.GLOBAL_E_WELCOME_DATA_COOKIE_VALUE)
    }

    clickOnElementByIndexThatHasValue(webElement, index, value) {
        cy.get(webElement).eq(index).should('contain', value).click({force: true});
    }

    scrollIntoView(webElement) {
        cy.get(webElement).scrollIntoView();
    }

    //this method is needed in order to be able to run tests without getting cross origin error
    setCrossOriginUncaughtErrorFalse() {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
    }
}

export const commonMethods = new CommonMethods();
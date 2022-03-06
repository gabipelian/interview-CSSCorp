import {commonSteps} from "../common/CommonSteps";
import {commonMethods} from "../common/CommonMethods";
import {homepage} from "../data/selectors/Homepage";

export class HomePage {

    navigateToHomepageUS() {
        commonSteps.setCookies();
        commonMethods.openHomepage();
        homePage.clickOnFlagToSelectCountry();
        homePage.selectCountryFromDropDown("United States", "US");
    };

    clickOnFlagToSelectCountry() {
        commonMethods.clickOnElement("#ge_ss1023_0");
    };

    selectCountryFromDropDown(name, value) {
        cy.log(name)
        cy.get("#gle_selectedCountry").select(name).should('have.value', value)
        commonMethods.clickOnElement('[data-action="SaveAndClose"]');
    };
};


export const homePage = new HomePage();

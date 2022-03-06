const {homePage} = require("../../pages/Homepage");
const {loginPage} = require("../../pages/LoginPage");

const VALID_EMAIL = 'testautomation@gmail.com'
const VALID_PASSWORD = 'Lasamaodata1@'

beforeEach(() => {
    homePage.navigateToHomepageUS();
});

describe('Verify user can login with valid credentials', () => {
    it('User SHOULD be able to login', () => {
        loginPage.clickOnAccountIcon();
        loginPage.assertUserIsRedirectedToAccountLoginPage();
        loginPage.typeEmail(VALID_EMAIL);
        loginPage.typePassword(VALID_PASSWORD);
        loginPage.clickOnSignInButton();
        loginPage.assertIfUserIsLoggedIn();
    });
});

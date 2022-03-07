const {homePage} = require("../../pages/Homepage");
const {loginPage} = require("../../pages/LoginPage");
const {commonSteps} = require("../../common/CommonSteps");
const {commonData} = require("../../data/constants/CommonData");

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

const testData = [
    {
        //valid email
        email: "testautomation@gmail.com",
        //invalid password
        password: "invalidPassword"
    },
    {
        //valid email
        email: "test@gmail.com",
        //shorter than 5 chars password
        password: "qwer"
    },
    {
        //invalid email
        email: "invalidEmail",
        //valid password
        password: "Lasamaodata1@"
    },
    {
        //valid email with "_" symbol
        email: "testuser_0264@gmail.com",
        //valid password
        password: "Lasamaodata1@"
    },
    {
        //valid email with "." symbol
        email: "testuser.0264@gmail.com",
        //valid password
        password: "Lasamaodata1@"
    },
    {
        //email with more than 50 chars
        email: "asd!@#123~12345678910123456789101234567891050CHARACTERS",
        //valid password
        password: "Lasamaodata1@"
    },
]

//scenarios: Invalid email & Invalid password, Valid email & Invalid password
describe('Verify login validations are properly working', () => {
    testData.forEach((credentials) => {
        it(`Attempt to LOGIN using '${credentials.email}' EMAIL and '${credentials.password}' PASSWORD`, () => {
            loginPage.clickOnAccountIcon();
            loginPage.assertUserIsRedirectedToAccountLoginPage();
            commonSteps.insertCredentials(credentials.email, credentials.password);

            //this method will assert errors for each case found up above
            commonSteps.assertErrors(
                credentials.password,
                credentials.email,
                commonData.FOUR_CHARS_PASS,
                commonData.INVALID_EMAIL,
                VALID_EMAIL,
                commonData.TEST_USER_EMAIL,
                commonData.FIFTY_CHARS_EMAIL);
        })
    });
});
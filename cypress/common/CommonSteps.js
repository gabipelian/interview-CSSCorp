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
    }
};

export const commonSteps = new CommonSteps();

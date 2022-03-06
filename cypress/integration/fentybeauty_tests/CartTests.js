import {cartPage} from "../../pages/CartPage";
import {homePage} from "../../pages/Homepage";

beforeEach(() => {
    homePage.navigateToHomepageUS();
});

describe('Mini-Cart should work properly', () => {
    it("Assert two products are properly added to 'CART'", () => {
        cartPage.addProductToCart();
        cartPage.addSecondProductToCart();
        cartPage.increaseProductQuantity();
        cartPage.assertFirstProductQuantityIsIncreased();
    })
});

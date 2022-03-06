import {checkOutPage} from "./CheckoutPage";
import {commonMethods} from "../common/CommonMethods";
import {miniCartData} from "../data/constants/MiniCartData";
import {miniCart} from "../data/selectors/MiniCart";

export class CartPage {
    addProductToCart() {
        commonMethods.scrollIntoView(".featured-products__cta");
        commonMethods.clickOnElementByText(miniCart.FIRST_PRODUCT, miniCartData.FIRST_PRODUCT_TEXT);
        checkOutPage.clickOnAddToCart();
        cartPage.assertProductIsAddedToCart();
    };

    addSecondProductToCart() {
        commonMethods.clickOnElementForceTrue(".store-switcher__link.store-switcher__link--beauty.active");
        commonMethods.scrollIntoView(".featured-products__cta");
        commonMethods.clickOnElementByText(miniCart.SECOND_PRODUCT, miniCartData.SECOND_PRODUCT_TEXT);
        checkOutPage.clickOnAddToCart();
        cartPage.assertSecondProductIsAddedToCart();
    };

    openMiniCart() {
        commonMethods.clickOnElementForceTrue(miniCart.CART_HEADER_MENU_ICON);
    };

    assertProductIsAddedToCart() {
        commonMethods.assertElementContainsExpectedText(miniCart.CART_SUBTOTAL_DETAILS, miniCartData.ONE_ITEM);
    };

    assertSecondProductIsAddedToCart() {
        commonMethods.assertElementContainsExpectedText(miniCart.CART_SUBTOTAL_DETAILS, miniCartData.TWO_ITEMS);
    };

    increaseProductQuantity() {
        commonMethods.clickOnElementByIndexThatHasValue(miniCart.INCREASE_PRODUCT_NUMBER, 1, "+");
    };

    assertFirstProductQuantityIsIncreased() {
        cartPage.openMiniCart();
        commonMethods.assertElementContainsExpectedText(miniCart.PRODUCT_QUANTITY, 2);
    };
};

export const cartPage = new CartPage();

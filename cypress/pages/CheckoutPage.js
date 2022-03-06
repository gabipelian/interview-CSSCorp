import {commonMethods} from "../common/CommonMethods";
import {miniCart} from "../data/selectors/MiniCart";

export class CheckoutPage {
    //this method will click on add to cart button of 'FULL-BODIED FOUNDATION BRUSH 110'
    clickOnAddToCart() {
        commonMethods.clickOnElementForceTrue(miniCart.ADD_TO_CART);
    };
};

export const checkOutPage = new CheckoutPage();

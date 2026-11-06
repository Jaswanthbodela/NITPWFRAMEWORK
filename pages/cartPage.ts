// perform checkout
import { Locator,Page } from "@playwright/test";

export class checkoutPage{

    page:Page
    checkoutButton:Locator
    cartProductName:Locator

    constructor(page:Page){
        this.page=page;
        this.checkoutButton=this.page.getByText('Checkout');
        this.cartProductName=this.page.locator('.cartSection h3');
    }
    async verifyProductInCart(productName:string){
        await this.cartProductName.waitFor();
        const ProductText = await this.cartProductName.textContent();
        return ProductText?.trim().toLowerCase()===productName.toLowerCase();
    }
    async proceedToCheckout(){
        await this.checkoutButton.click();
        //await this.page.waitForTimeout(2000);
        await this.page.waitForTimeout(2000);
    }

}





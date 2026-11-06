//perform after clicking checkout from cartpage
import { expect, Locator,Page } from "@playwright/test";


export class paymentPage{
    page:Page
    creditcardNumber:Locator
    expiryMonth:Locator
    expiryDay:Locator
    cvvCode:Locator
    nameOnCard:Locator
    couponEnter:Locator
    applyCouponButton:Locator
    countryInput:Locator
    placeOrderButton:Locator
    email:Locator
    orderSuccessMessage:Locator

    //https://rahulshettyacademy.com/client/#/auth/login     
    constructor(page:Page){
        this.page=page;
        this.creditcardNumber=this.page.locator('.input.txt.text-validated').first();
        this.expiryMonth=this.page.locator('.input.ddl').first();
        this.expiryDay=this.page.locator('.input.ddl').last();
        this.cvvCode=this.page.locator('.input.txt').nth(1);
        this.nameOnCard=this.page.locator('.input.txt').nth(2);
        this.couponEnter=this.page.locator('input[name="coupon"]');//.input.txt.ng-valid.ng-dirty.ng-touched
        this.applyCouponButton=this.page.locator('.btn.btn-primary.mt-1');
        this.countryInput=this.page.getByPlaceholder('Select Country');
        this.placeOrderButton=this.page.locator('a.btnn.action__submit.ng-star-inserted');
        this.email=this.page.getByRole('textbox').nth(4);
        this.orderSuccessMessage=this.page.getByText('Order Placed Successfully');
    }

    async verifyAutofilled(creditcardNumber:string,email:string){
        await expect(this.creditcardNumber).toHaveValue(creditcardNumber);
        await expect(this.email).toHaveValue(email);
    }

    async expiryDate(expiryMonth:string,expiryDay:string){
        await this.expiryMonth.selectOption(expiryMonth);
        await this.expiryDay.selectOption(expiryDay);
    }

    async enterCardDetails(cvvCode: string, nameOnCard: string) {
        await this.cvvCode.fill(cvvCode);
        await this.nameOnCard.fill(nameOnCard);
    }

    async selectCountry(countryInput:string){
        await this.countryInput.pressSequentially(countryInput);
        const countryoption = this.page.getByText(countryInput,{exact:true}).last();
        //await countryoption.waitFor({state:"visible"});
        await countryoption.click();
    }

    // async selectCountry(countryName: string) {
    // await this.countryInput.pressSequentially(countryName);
    // await this.page.locator(`:text-is("${countryName}")`).click();
    // await expect(this.countryInput).toHaveValue(countryName);
    // }

    async ApplyCoupon(couponEnter:string){
        await this.couponEnter.fill(couponEnter);
        await this.applyCouponButton.click();
    }

    async orderPlace(){
        await this.placeOrderButton.click();
    }

    //  await initplaywright has text in the form of reorder for the same 


}


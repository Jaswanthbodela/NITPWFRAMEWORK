import { Locator, Page } from "@playwright/test";
// in java script we wont wrte any thing
export class PageLogin{
    // class consists of properties :: locators and methods
    // locators when passed inside the class will be acting as properties of an object
    // create all the properties of the page inside the class

    // page property will definitely provide page as a property (targeting to url)
     
    // username - yivek45656@leafflip.com
    // password - 789@testuserI

        constructor(Page){
            this.page=Page
            this.email=this.page.locator('#userEmail');
            this.password = this.page.getByPlaceholder('enter your passsword');
            this.loginButton=this.page.locator('#login');
            this.errorMessage=this.page.locator('#toast-container');
            this.homePageIdentifier=this.page.locator('[routerlink="/dashboard/"]');
        }
        // create the methods::
        // launch the url and
        // loginIntoApplication

        async launchUrl(url){
            await this.page.goto(url)
        }
        async loginIntoApplication(username,password){
            await this.email.fill(username);
            await this.password.fill(password);
            await this.loginButton.click()
        }


}

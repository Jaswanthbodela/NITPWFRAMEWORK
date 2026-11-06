// any thing that you write outside the testfolder will not have '.spec.ts' extension because it is present for the file which has to be executed

// Page Layer -- what all things will be present inside the page

/*
Locators and methods should be present inside this layer.

structure -> class >> page properties >> constructor >> methods


*/
//in pages no test,expect will not come because it is part of test folder
import { Locator, Page } from "@playwright/test";

export class LoginPage{
    // class consists of properties :: locators and methods
    // locators when passed inside the class will be acting as properties of an object
    // create all the properties of the page inside the class

    // page property will definitely provide page as a property (targeting to url)
    page: Page
    email: Locator
    password: Locator
    loginButton: Locator
    errorMessage: Locator
    homePageIdentifier: Locator
    // username - yivek45656@leafflip.com
    // password - 789@testuserI

        constructor(page:Page){
            this.page=page
            this.email=this.page.locator('#userEmail');
            this.password = this.page.getByPlaceholder('enter your passsword');
            this.loginButton=this.page.locator('#login');
            this.errorMessage=this.page.locator('#toast-container');
            this.homePageIdentifier=this.page.locator('[routerlink="/dashboard/"]');
        }
        // create the methods::
        // launch the url and
        // loginIntoApplication

        async launchUrl(url:string){
            await this.page.goto(url)
        }
        async loginIntoApplication(username:string,password:string){
            await this.email.fill(username);
            await this.password.fill(password);
            await this.loginButton.click()
        }


}

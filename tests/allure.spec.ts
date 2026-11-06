//watch 3/11vid
// Allure reports configurations
/*
    it is not inbuilt we have to take third party dependency
    we have to run 2 commands 1 in commandline 1 in terminal
    
    1. npm install --save-dev allure-commandline
    2. npm install --save-dev allure-playwright
    3. add the allure report inside the playwright config file.
        [['html'],['allure-playwright']] in config file
    ** Allure folder will automatically get created when we run the test case for the first time.

    Execute the file atlest for one time 
    post execution allure result folder will be created
    open the allure report using below command

    npx allure serve allure-results (npx allure serve - followed by folder name)

    run the below command inside the terminal
    npx allure generate allure-results -- clean-o allure-report

    once the allure result folder is created, 
    copy the history from allure-report and paste it in allure result folder


*/
















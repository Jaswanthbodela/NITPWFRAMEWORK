
// hooks in Playwright:

/*
hooks : it's a special method used to perform the setup(setup the application) and teardown process(closing ceremony(we have done with every thing)). 

// Different types of hooks present in playwright::
    1. test.beforeAll() -- it will get executed before any of the testcase
    (when you have more than 100 cases it will perfoem before staring the testases means it will run first then performs testcases)
        if you have 10 testcases then before all will execute for one time.
        ex: db connection.

    2. test.beforeEach() -- it will get executed before every testcase
        if you have 10 testcases, it will get executed for 10 times.
        ex: launch url (precondition) will run after every test case

    3. test.afterEach() -- it will get executed after every testcase
        ex: logout, closig the browser

    4. test.afterAll() -- it will get executed after all the testcases is completed.
        ex: report generation, db closer.
    
    => beforeAll, beforeEach is setup process
    => afterAll, afterEach is teardown preocess
    
    execution steps are as below:
    1 2 3 4

*/

import {test, expect} from '@playwright/test';
import { beforeEach } from 'node:test';

test.afterEach(async()=>{
    console.log("afterEach");
})
test.beforeAll(async()=>{
    console.log("before All");
})
test.afterAll(async()=>{
    console.log("after all");
})
test.beforeEach(async()=>{
    console.log("before each");
})

test("test 1",async()=>{
    console.log('testcase 1');
})
test('test 2',async()=>{
    console.log('testcase2');
})
test('test 3',async()=>{
    console.log('testcase3');
})










































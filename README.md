# Lab8_Starter

Names: Shanqing Wang

Test Screenshot: [here](tests_ss.png)

## Check your understanding q's (FILL OUT)
1. In your own words: Where would you fit your automated tests in your Bujo project development pipeline? (just write the letter)

1

2. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

Depending on the implementation, you probably can. If you are able to create two users and check if one recieves a message the other sends you can. It might be hard if the implementation does not allow that to happen, and you must launch two instances of your application.

3. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters

Yes, this should be pretty straightforward. You can try to input a message string with more than 80 characters to make sure it gets rejected properly.

4. What do you expect to happen if we run our puppeteer tests with the field “headless” set to true?

The tests will run, but no browser view shows up. 

5. What would your beforeAll callback look like if you wanted to start from the settings page before every test case?

beforeAll(async () => {
    await page.goto('http://127.0.0.1:5500');
    await page.click('img[alt="settings"]');
    await page.waitForTimeout(500);
  });


const { Builder, Browser, By, Key, until } = require("selenium-webdriver");

let driver;

beforeAll(async () => {
  driver = new Builder().forBrowser(Browser.CHROME).build();
});

afterAll(async () => {
  await driver.quit();
});

test("can search Google for 'automation'", async () => {

  await driver.wait(until.titleIs("automation - Google Search"), 1000);
});

test("can search Google twice", async () => {

});
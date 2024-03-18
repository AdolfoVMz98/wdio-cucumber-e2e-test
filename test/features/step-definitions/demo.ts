import { Given, When, Then } from "@wdio/cucumber-framework";
import { expect } from "chai";

Given(/^Google page is opened$/, async function(){
    await browser.url("https://www.google.com");
});

When(/^Search with (.*)$/, async (searchItem)=>{
    console.log(`searchItem ${searchItem}`);
    const txtSearch = await $(`[name=q]`);
    await txtSearch.setValue(searchItem);
    await browser.keys("Enter");
});

Then(/^Click on the first search result$/, async () =>{
    const searchResult = await $(`<h3>`);
    await searchResult.click();
});

Then(/^URL should match (.*)$/, async (expectedURL)=>{
    console.log(expectedURL);
    const url = await browser.getUrl();
    await expect(url).to.equal(expectedURL);
});
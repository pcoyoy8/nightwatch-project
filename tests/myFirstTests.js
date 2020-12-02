const nameInput = 'input[data-test="name"]';
const dobInput = 'input[data-test="dob-field"]';
const greetingInput = 'input[data-test="greeting"';
const jokeButton = 'button[data-test="joke-button"]';
const jokeText = 'textarea[data-test="joke-text"]';
const name = 'Joe Doe';

describe('Nightwatch tests', () => {
  test('My first e2e test', (browser) => {
    browser
      .url('http://localhost:3000/')
      .waitForElementVisible('body');

    browser
      .assert.visible(nameInput)
      .setValue(nameInput, name)
      .assert.value(nameInput, name)
      .assert.visible(dobInput)
      .click(dobInput)
      .waitForElementVisible('div[class="v-date-picker-title"]');

    for (let index = 0; index <= 216; index += 1) {
      browser
        .click('button[aria-label="Previous month"]');
    }

    browser
      .useXpath()
      .waitForElementVisible('//div[normalize-space(text())="16"]')
      .click('//div[normalize-space(text())="16"]')
      .pause(999);

    browser
      .useCss()
      .waitForElementVisible(greetingInput)
      .assert.value(greetingInput, `Welcome ${name}, ahh! You are 18 years old, so you can see a joke`)
      .assert.visible(jokeButton)
      .click(jokeButton)
      .assert.visible(jokeText)
      .assert.not.value(jokeText, '');

    browser.end();
  });
});

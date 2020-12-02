const moment = require('moment');

const nameInput = 'input[data-test=name]';
const dobInput = 'input[data-test=dob]';

describe('Nightwatch tests', () => {
  test('My first e2e test', (browser) => {
    browser
      .url('http://localhost:3000/')
      .waitForElementVisible('body');

    const name = 'Mario Josue';
    const date = moment().toDate();

    browser
      .assert.visible(nameInput)
      .setValue(nameInput, name)
      .assert.value(nameInput, name)
      .assert.visible(dobInput)
      .setValue(dobInput, date)
      .assert.value(dobInput, date);

    browser.end();
  });
});

import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';


Given('I open the website', () => {

  cy.visit('https://www.saucedemo.com/'); 

});

When('I enter my username {string} and password {string}', (username, password) => {

  cy.get('#user-name').type(username);

  cy.get('input[name="password"]').type(password);

});

And('I click the login button', () => {

  cy.get('#login-button').click();

});

Then('I should be logged in', () => {

  cy.url().should('eq', 'https://www.saucedemo.com/inventory.html'); 


});
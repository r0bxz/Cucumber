import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';


Given('I open the website', () => {

  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'); 

});

When('I enter my username {string} and password {string}', (username, password) => {

  cy.get('.oxd-input').eq(0).type(username);

  cy.get('.oxd-input').eq(1).type(password);

});

And('I click the login button', () => {

  cy.get('.oxd-button').click();

});

Then('I should be logged in', () => {

  cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index'); 


});
import { Given, When, Then , And} from 'cypress-cucumber-preprocessor/steps';
import jobTitlesPage from '../../pages/Admin/jobTitlesPage';
let jobTitle = ` New Job title ${Math.floor(Math.random() * 1000)}`;

Given('I am logged in with username {string} and password {string}', (username, password) => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'); 
    cy.get('.oxd-input').eq(0).type(username);
    cy.get('.oxd-input').eq(1).type(password);
    cy.get('.oxd-button').click();
    cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
});

And('I navigate to the {string} section', (section) => {
  cy.contains('.oxd-main-menu-item', section).click(); 
});

And('I click on {string} menu item', (menuItem) => {
  cy.contains('.oxd-topbar-body-nav-tab-item',menuItem).click(); 
});

And('I click on {string} dropdown item', (dropItem) => {
    cy.contains('.oxd-topbar-body-nav-tab-link',dropItem).click(); 
  });

When('I click on the {string} button', (buttonText) => {
  cy.contains('.oxd-button', buttonText).click();
});

And('I enter a new job title', () => {
  jobTitlesPage.enterJobTitle(jobTitle);
});

And('I enter the job description {string}', (description) => {
  jobTitlesPage.enterJobDescription(description);
});


And('I click the {string} button', (buttonText) => {
  cy.contains('.oxd-button', buttonText).click();
});

Then('I should see the new job title in the list', () => {
  jobTitlesPage.verifyJobTitleInTable(jobTitle);
});

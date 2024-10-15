import { Given, When, Then,Before} from 'cypress-cucumber-preprocessor/steps';
import jobTitlesPage from '../../pages/Admin/jobTitlesPage';
let jobTitle
let editedJobTitle
Before(() => {
  cy.session('login', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/');
    cy.get('.oxd-input').eq(0).type('Admin');
    cy.get('.oxd-input').eq(1).type('admin123');
    cy.get('.oxd-button').click();
  });
  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewJobTitleList');
});

Given('I am logged in with username "Admin" and password "admin123"', () => {
});

And('I am navigated to the job title page',()=>{});

When('I click on the {string} button', (buttonText) => {
  cy.contains('.oxd-button', buttonText).click();
});

And('I enter a new job title', () => {
  jobTitle = `Job title ${Math.floor(Math.random() * 1000)}`; 
  jobTitlesPage.enterJobTitle(jobTitle);
});

And('I enter the job description {string}', (description) => {
  jobTitlesPage.enterJobDescription(description);
});


And('I click the "Save" button', () => {
  jobTitlesPage.clickSave();
});

When('I edit the job title New Job title to the Edited title job title', () => {
  editedJobTitle=`Edited job title${Math.floor(Math.random() * 1000)}`;
  jobTitlesPage.editJobTitle(jobTitle, editedJobTitle);
});

When('I delete the edited job title', () => {
  jobTitlesPage.deleteJobTitle(editedJobTitle);
});

Then('I should see the new job title in the list', () => {
  jobTitlesPage.verifyJobTitleInTable(jobTitle);
});

Then('I should see the edited job title in the list', () => {
  jobTitlesPage.verifyJobTitleInTable(editedJobTitle);
});

Then('I should not see the edited job title in the list', () => {
  cy.contains('.oxd-table-row', editedJobTitle).should('not.exist');
});

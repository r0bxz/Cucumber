Feature: Job Title
  BeforeAll:
    
  Background: 
    Given I am logged in with username "Admin" and password "admin123"
    And I am navigated to the job title page
    
  Scenario: Add a new job title and verify it in the list
    When I click on the "Add" button
    And I enter a new job title
    And I enter the job description "This is a test job description."
    And I click the "Save" button
    Then I should see the new job title in the list

  Scenario: Edit an existing job title and verify the changes
    When I edit the job title New Job title to the Edited title job title
    And I click the "Save" button
    Then I should see the edited job title in the list

  Scenario: Delete a job title and verify it is removed
    When I delete the edited job title 
    Then I should not see the edited job title in the list

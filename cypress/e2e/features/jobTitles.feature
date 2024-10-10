Feature: Job Title 

  Scenario: Log in, navigate to Job Titles, add a new job title, and verify it in the list
    Given I am logged in with username "Admin" and password "admin123"
    And I navigate to the "Admin" section
    And I click on "Job" menu item
    And I click on "Job Titles" dropdown item
    When I click on the "Add" button
    And I enter a new job title
    And I enter the job description "This is a test job description."
    And I click the "Save" button
    Then I should see the new job title in the list

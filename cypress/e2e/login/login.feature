Feature: Login to a website

  Scenario: Successful login

    Given I open the website

    When I enter my username "Admin" and password "admin123"

    And I click the login button

    Then I should be logged in
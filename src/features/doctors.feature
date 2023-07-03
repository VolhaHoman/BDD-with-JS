Feature: Doctors


Scenario: Dashboard page should have "Appointment Planner - Syncfusion Angular Components Showcase App" title
    Given I open "Dashboard" page
    Then Page title should "be equal to" "Appointment Planner - Syncfusion Angular Components Showcase App"


Scenario: It should be possible to open a modal window
    When I open "Dashboard" page
    And I click "Doctors" link from the side menu
    And I click add new doctor button from list header
    Then modal window should be displayed


Scenario Outline: Fill in all the necessary fields and save changes
    When I fill in "<name>" Doctor name in the modal window
    When I fill in "<phone>" Doctor mobile number
    When I enter "<email>" Doctor email
    When I enter "<education>" Doctor education
    When I enter "<designation>" Doctor designation
    When I click "save" button in modal window
    Then card with a new doctor should be displayed on the page 
    Examples:
        | name        | phone       | email           | education | designation |
        | Doctor Dre  | 3333333333  | dr.dre@test.com | High      | Intern      |


# Scenario: Close the modal window
#     When I click "close" button in modal window
#     Then modal window should not be displayed
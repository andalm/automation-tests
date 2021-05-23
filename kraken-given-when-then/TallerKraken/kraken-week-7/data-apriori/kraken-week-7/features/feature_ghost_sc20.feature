Feature: Login and invite staff with email field, two emails separated with comma
        @user1 @web
        Scenario: Invitar un nuevo usuario ingresando en el campo email dos correos separados por coma
                Given I navigate to page "<LOGIN>"
                When I enter "<USER>" into input field having id "ember8"
                And I enter "<PASSWORD>" into input field having id "ember10"
                And I click on element having id "ember12"
                And I navigate to page "<STAFF>"
                And I click on element having css selector ".gh-btn-green"
                And I enter "<two_emails_separate_comma>" into input field having id "new-user-email"
                And I click on element having css selector ".modal-footer"
                Then I should see text "Invalid Email." 

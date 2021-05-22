Feature: Login and invite staff
        @user1 @web
        Scenario: invitar un nuevo usuario ingresando el campo email vacio
                Given I navigate to page "<LOGIN>"
                When I enter "<USER>" into input field having id "ember8"
                And I enter "<PASSWORD>" into input field having id "ember10"
                And I click on element having id "ember12"
                And I navigate to page "<STAFF>"
                And I click on element having css selector ".gh-btn-green"
                And I click on element having css selector ".modal-footer"
                Then I should see text "Please enter an email."

Feature: Login and invite staff
        @user1 @web
        Scenario: invitar un nuevo usuario ingresando el campo email vacio
                Given I navigate to page "<LOGIN>"
                When I enter "<USER>" into input field having id "ember8"
                And I enter "<PASSWORD>" into input field having id "ember10"
                And I click on element having id "ember12"
                And I navigate to page "<STAFF>"
                And I click on element having css selector ".gh-btn-green"
                And I enter "<email_special_characters>" into input field having id "new-user-email"
                Then I click on element having css selector ".modal-footer"

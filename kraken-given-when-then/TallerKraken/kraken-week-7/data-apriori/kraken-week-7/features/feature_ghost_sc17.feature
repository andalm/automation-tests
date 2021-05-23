Feature: Login invalid, email with special characters y password
        @user1 @web
        Scenario: Ingresar usuario con caracteres especiales y password
                Given I navigate to page "<LOGIN>"
                When I enter "<email_special_characters>" into input field having id "ember8"
		And I enter "<PASSWORD>" into input field having id "ember10"
                And I click on element having id "ember12"
                Then I should see text "Your password is incorrect."

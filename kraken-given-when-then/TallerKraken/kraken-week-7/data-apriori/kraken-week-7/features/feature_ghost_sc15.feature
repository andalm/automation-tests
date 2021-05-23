Feature: Login invalid, email without domain and password
        @user1 @web
        Scenario: ingresar con correo separado con espacios el usuario y el dominio y password
                Given I navigate to page "<LOGIN>"
                When I enter "<email_spaces>" into input field having id "ember8"
		And I enter "<PASSWORD>" into input field having id "ember10"
                And I click on element having id "ember12"
                Then I should see text "Please fill out the form to sign in."

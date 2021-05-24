Feature: Login with numbers in email and password
        @user1 @web
        Scenario: Ingresar con numeros en correo y texto en password
                Given I navigate to page "<LOGIN>"
                When I enter random into input field having id "ember8"
		And I enter "<PASSWORD>" into input field having id "ember10"
		And I click on element having id "ember12"
		Then I should see text "Please fill out the form to sign in." 

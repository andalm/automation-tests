Feature: Login and update staff
        @user1 @web
        Scenario: ingresar con numeros en correo y sin password
                Given I navigate to page "<LOGIN>"
                When I enter random into input field having id "ember8"
		And I click on element having id "ember12"
		Then I should see text "Please fill out the form to sign in." 

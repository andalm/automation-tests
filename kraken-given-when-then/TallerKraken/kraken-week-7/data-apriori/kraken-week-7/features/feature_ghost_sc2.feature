Feature: Login
        @user1 @web
        Scenario: ingresar texto sin dominio en correo y password vacio
                Given I navigate to page "<LOGIN>"
                When I enter "<email_spaces>" into input field having id "ember8"
                And I click on element having id "ember12"
                Then I should see text "Please fill out the form to sign in."

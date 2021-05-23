Feature: Login and update staff, edit password with pass old valid
        @user1 @web
        Scenario: Editar staff ingresar editar contraseña ingresando contraseña valida y uno de los campos nuevos vacio
                Given I navigate to page "<LOGIN>"
                When I enter "<USER>" into input field having id "ember8"
                And I enter "<PASSWORD>" into input field having id "ember10"
                And I click on element having id "ember12"
                And I navigate to page "<STAFF>"
                And I click on element having css selector ".gh-badge.owner"
                And I enter "<PASSWORD>" into input field having id "user-password-old"
		And I enter "empty_text" into input field having id "user-password-new" 
                Then I click on element having css selector ".gh-btn-red"

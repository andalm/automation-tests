Feature: Login and update staff, edit password
        @user1 @web
        Scenario: Editar staff ingresar editar contraseña ingresando contraseña valida y uno de los campos nuevos vacio
                Given I navigate to page "<LOGIN>"
                When I enter "<USER>" into input field having id "ember8"
                And I enter "<PASSWORD>" into input field having id "ember10"
                And I click on element having id "ember12"
                And I navigate to page "<STAFF>"
                And I click on element having css selector ".user-list-item-figure"
		And I enter "empty_text" into input field having id "user-new-password-verification" 
                Then I click on element having css selector ".gh-btn-red"

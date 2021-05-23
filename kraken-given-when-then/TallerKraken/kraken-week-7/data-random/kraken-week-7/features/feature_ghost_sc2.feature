Feature: login and update staff
        @user1 @web
        Scenario: editar staff ingresar editar contraseña ingresando contraseña valida y los campos de nuevo password vacios
                Given I navigate to page "<LOGIN>"
                When I enter "<USER>" into input field having id "ember8"
                And I enter "<PASSWORD>" into input field having id "ember10"
                And I click on element having id "ember12"
                And I navigate to page "<STAFF>"
                And I click on element having css selector ".user-list-item-figure"
                And I enter "$name_1" into input field having id "user-website"
                And I click on element having css selector ".gh-btn-blue"
                Then I should see text "Website is not a valid url" 




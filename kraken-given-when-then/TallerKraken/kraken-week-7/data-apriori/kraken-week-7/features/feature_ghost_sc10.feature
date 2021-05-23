Feature: login and update staff
        @user1 @web
        Scenario: editar staff ingresar en correo electronico el usuario con caracteres especiales
                Given I navigate to page "<LOGIN>"
                When I enter "<USER>" into input field having id "ember8"
                And I enter "<PASSWORD>" into input field having id "ember10"
                And I click on element having id "ember12"
                And I navigate to page "<STAFF>"
                And I click on element having css selector ".user-list-item-figure"
                And I clear text having id "user-email"
                And I enter "<email_special_characters>" into input field having id "user-email"
                Then I click on element having css selector ".gh-btn-blue"

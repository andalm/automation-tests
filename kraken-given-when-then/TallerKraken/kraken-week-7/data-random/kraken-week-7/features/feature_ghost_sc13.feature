Feature: Login and update staff
        @user1 @web
        Scenario: Editar staff ingresar caracteres especiales en nombre completo
                Given I navigate to page "<LOGIN>"
                When I enter "<USER>" into input field having id "ember8"
                And I enter "<PASSWORD>" into input field having id "ember10"
                And I click on element having id "ember12"
                And I navigate to page "<STAFF>"
                And I click on element having css selector ".user-list-item-figure"
                And I enter "$name_1" into input field having id "user-name"
                And I enter "'',&*" into input field having id "user-name"
                Then I click on element having css selector ".gh-btn-blue"

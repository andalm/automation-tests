Feature: Login and update, numbers in website
        @user1 @web
        Scenario: Editar staff ingresar numeros en website
                Given I navigate to page "<LOGIN>"
                When I enter "<USER>" into input field having id "ember8"
                And I enter "<PASSWORD>" into input field having id "ember10"
                And I click on element having id "ember12"
                And I navigate to page "<STAFF>"
                And I click on element having css selector ".user-list-item-figure"
                And I clear text having id "user-website"
                And I enter random into input field having id "user-website"
                Then I click on element having css selector ".gh-btn-blue"

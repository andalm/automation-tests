Feature: Login and update staff with bio more 500 characters
        @user1 @web
        Scenario: Editar staff ingresar en bio mas de 500 caracteres
                Given I navigate to page "<LOGIN>"
                When I enter "<USER>" into input field having id "ember8"
                And I enter "<PASSWORD>" into input field having id "ember10"
                And I click on element having id "ember12"
                And I navigate to page "<STAFF>"
                And I click on element having css selector ".user-list-item-figure"
                And I clear text having id "user-bio"
                And I enter "<BIG_TITLE>" into input field having id "user-bio"
                Then I click on element having css selector ".gh-btn-blue"

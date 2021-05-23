Feature: Login and update staff with url invalid in field Facebook profile
        @user1 @web
        Scenario: Editar staff ingresar en el campo Facebook Profile url que no corresponde a facebook
                Given I navigate to page "<LOGIN>"
                When I enter "<USER>" into input field having id "ember8"
                And I enter "<PASSWORD>" into input field having id "ember10"
                And I click on element having id "ember12"
                And I navigate to page "<STAFF>"
                And I click on element having css selector ".user-list-item-figure"
                And I clear text having id "user-facebook"
                And I enter "<url>" into input field having id "user-facebook"
                Then I click on element having css selector ".gh-btn-blue"

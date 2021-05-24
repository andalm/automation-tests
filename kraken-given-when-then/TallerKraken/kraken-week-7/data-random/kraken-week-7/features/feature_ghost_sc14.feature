Feature: Login and update staff
        @user1 @web
        Scenario: Editar staff ingresar dos url separadas con espacios en website
                Given I navigate to page "<LOGIN>"
                When I enter "<USER>" into input field having id "ember8"
                And I enter "<PASSWORD>" into input field having id "ember10"
                And I click on element having id "ember12"
                And I navigate to page "<STAFF>"
                And I click on element having css selector ".user-list-item-figure"
		And I enter "http://" into input field having id "user-website"
                And I enter "$name1" into input field having id "user-website"
                And I enter ".com " into input field having id "user-website"
		And I enter "http://" into input field having id "user-website"
                And I enter "$name_1" into input field having id "user-website"
		And I enter ".org" into input field having id "user-website"
                And I click on element having css selector ".gh-btn-blue"
                Then I should see text "Website is not a valid url" 

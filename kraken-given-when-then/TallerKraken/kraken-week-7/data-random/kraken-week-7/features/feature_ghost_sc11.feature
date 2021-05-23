Feature: login and update staff
        @user1 @web
        Scenario: crear un tag con slug alfanumerico
                Given I navigate to page "<LOGIN>"
                When I enter "<USER>" into input field having id "ember8"
                And I enter "<PASSWORD>" into input field having id "ember10"
                And I click on element having id "ember12"
                And I navigate to page "<TAGS>"
                And I click on element having css selector ".gh-btn-green"
                And I enter "$name_1" into input field having id "tag-slug"
                And I enter "$number_1" into input field having id "tag-slug"
                And I enter "$name_1" into input field having id "tag-slug"
                And I enter "$number_1" into input field having id "tag-slug"
                And I enter "$name_1" into input field having id "tag-slug"
                And I enter "$number_1" into input field having id "tag-slug"
                Then I click on element having css selector ".gh-btn-blue"

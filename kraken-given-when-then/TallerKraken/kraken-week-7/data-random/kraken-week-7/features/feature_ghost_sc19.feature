Feature: Login and create post with title and description with numbers
        @user1 @web
        Scenario: Crear un nuevo post con titulo y descripcion con valores numericos
                Given I navigate to page "<LOGIN>"
                When I enter "<USER>" into input field having id "ember8"
                And I enter "<PASSWORD>" into input field having id "ember10"
                And I click on element having id "ember12"
                And I navigate to page "<POST_CREATOR>"
                And I click on element having css selector ".gh-editor-title"
                And I enter "$number_1" into input field having css selector "textarea"
                And I enter "$number_1" into input field having css selector "p"
                Then I click on element having css selector ".br--left"

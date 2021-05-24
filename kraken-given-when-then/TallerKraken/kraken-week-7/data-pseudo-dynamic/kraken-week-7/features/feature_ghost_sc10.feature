Feature: Login, create post with title empty and description with numbers
        @user1 @web
        Scenario: Crear un nuevo post con titulo vacio y descripcion con numeros
                Given I navigate to page "<LOGIN>"
                When I enter "<USER>" into input field having id "ember8"
                And I enter "<PASSWORD>" into input field having id "ember10"
                And I click on element having id "ember12"
                And I navigate to page "<LIST_POST>"
                And I navigate to page "<POST_CREATOR>"
                And I click on element having css selector ".gh-editor-title"
                And I enter random into input field having css selector "p"
                Then I click on element having css selector ".br--left"

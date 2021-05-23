Feature: Login, list post, and create post
        @user1 @web
        Scenario: Ingresar con cuenta válida, Listar Posts, Crear Post, Listar Posts, Crear Post, Listar Post
                Given I navigate to page "<LOGIN>"
                When I enter "<USER>" into input field having id "ember8"
                And I enter "<PASSWORD>" into input field having id "ember10"
                And I click on element having id "ember12"
                And I navigate to page "<LIST_POST>"
                And I navigate to page "<POST_CREATOR>"
                And I enter "$name_1" into input field having css selector "p"
                And I enter "$name_1" into input field having css selector "p"
                And I enter "$name_1" into input field having css selector "p"
                And I enter "$name_1" into input field having css selector "p"
                And I enter "$name_1" into input field having css selector "p"
                And I enter "$name_1" into input field having css selector "p"
                Then I click on element having css selector ".br--left"

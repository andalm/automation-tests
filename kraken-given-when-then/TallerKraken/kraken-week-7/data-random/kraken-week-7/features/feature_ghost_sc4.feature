Feature: Login, list post, and create post
        @user1 @web
        Scenario: Ingresar con cuenta válida, Listar Posts, Crear Post, Listar Posts, Crear Post, Listar Post
                Given I navigate to page "<LOGIN>"
                Then I enter "<USER>" into input field having id "ember8"
                Then I enter "<PASSWORD>" into input field having id "ember10"
                Then I click on element having id "ember12"
                Then I navigate to page "<LIST_POST>"
                Then I navigate to page "<POST_CREATOR>"
                Then I click on element having css selector ".gh-editor-title"
                Then I enter "$name_1" into input field having css selector "textarea"
                Then I enter "$number_1" into input field having css selector "textarea"
                Then I enter "$name_1" into input field having css selector "textarea"
                Then I enter "$number_1" into input field having css selector "textarea"
                Then I click on element having css selector ".br--left"

Feature: Login error, login sucess, list post, create and list post
        @user1 @web
        Scenario: Ingresar con cuenta inválida, Ingresar con cuenta valida, Listar Posts, Crear Post, Listar Posts
                Given I navigate to page "<LOGIN>"
                Then I enter "" into input field having id "ember8"
                Then I enter "" into input field having id "ember10"
		Then I click on element having id "ember12"
		Then I enter "" into input field having id "ember8"
                Then I enter "" into input field having id "ember10"

                Then I enter "<USER>" into input field having id "ember8"
                Then I enter "<PASSWORD>" into input field having id "ember10"
                Then I click on element having id "ember12"
                Then I navigate to page "<LIST_POST>"
                Then I navigate to page "<POST_CREATOR>"
                Then I click on element having css selector ".gh-editor-title"
                Then I enter "<TITLE_POST>" into input field having css selector "textarea"
		Then I enter "<DESCRIPTION_POST>" into input field having css selector "p"
		Then I navigate to page "<RELOAD_POST>"

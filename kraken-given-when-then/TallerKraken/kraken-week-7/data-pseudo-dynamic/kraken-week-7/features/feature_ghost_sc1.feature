Feature: Login, list post, and create post
        @user1 @web
        Scenario: Ingresar con cuenta válida, Listar Posts, Crear Post, Listar Posts
                Given I navigate to page "<LOGIN>"
                Then I enter random into input field having id "ember8"
                Then I enter "<PASSWORD>" into input field having id "ember10"
		#Then I click on element having id "ember12"

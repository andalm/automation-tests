Feature: Login and update staff, edit password with verication fields different
        @user1 @web
        Scenario: Editar staff ingresar editar contraseña ingresando contraseña valida y los campos de verificacion diferentes
                Given I navigate to page "<LOGIN>"
                When I enter "<USER>" into input field having id "ember8"
                And I enter "<PASSWORD>" into input field having id "ember10"
                And I click on element having id "ember12"
                And I navigate to page "<STAFF>"
                And I click on element having css selector ".gh-badge.owner"
		And I enter "<PASSWORD>" into input field having id "user-password-old"
		And I enter "<text>" into input field having id "user-password-new"
                And I enter "<text2>" into input field having id "user-new-password-verification"
                Then I click on element having css selector ".gh-btn-red"

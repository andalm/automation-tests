Feature: Login, list post, edit and delete post
        @user1 @web
        Scenario: As a web master I want to update and delete a post after login in ghost
                Given I navigate to page "<LOGIN>"
                Then I enter "<USER>" into input field having id "ember8"
                Then I enter "<PASSWORD>" into input field having id "ember10"
                Then I click on element having id "ember12"
                Then I navigate to page "<LIST_POST>"
                Then I click on element having css selector ".gh-posts-list-item"
		Then I click on element having css selector ".post-settings"
		Then I click on element having css selector ".settings-menu-delete-button"
		Then I click on element having css selector ".gh-btn-red"
		Then I navigate to page "<RELOAD_POST>" 

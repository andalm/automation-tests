Feature: Login, list post, and create post
        @user1 @web
        Scenario: As a web master I want to create a post after login in ghost
                Given I navigate to page "<LOGIN>"
                Then I enter "<USER>" into input field having id "ember8"
                Then I enter "<PASSWORD>" into input field having id "ember10"
                Then I click on element having id "ember12"
                Then I navigate to page "<LIST_POST>"
                Then I navigate to page "<POST_CREATOR>"
                Then I click on element having css selector ".gh-editor-title"
                Then I enter "<TITLE_POST>" into input field having css selector "textarea"
		Then I enter "<DESCRIPTION_POST>" into input field having css selector "p"
		Then I navigate to page "<RELOAD_POST>"
		Then I click on element having css selector ".gh-posts-list-item"
		Then I click on element having css selector ".gh-editor-title"
                Then I enter "<TITLE_POST_EDITED_2>" into input field having css selector "textarea"
                Then I enter "<DESCRIPTION_POST_EDITED_2>" into input field having css selector "p"
		Then I click on element having css selector ".br--left"
		#Then I navigate to page "<POST_RELOAD_2>"

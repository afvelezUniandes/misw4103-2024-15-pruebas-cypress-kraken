Feature: Ver sitio desde el dashboard

  @user1 @web
  Scenario: P020 - Ver sitio desde dashboard
    Given I navigate to page "<BASE_URL>"
    When I click on the link with text "View Site"
    Then I should be redirected to the live site "<URL_SITE>"

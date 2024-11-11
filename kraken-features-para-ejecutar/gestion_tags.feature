Feature: Gestión de Tags

  @user1 @web
  Scenario: P011 - Creación de tags
    Given I navigate to page "<URL_DASHBOARD>"
    And I navigate to page "<URL_TAGS>"
    When I click on the link with text "New tag"
    And I enter tag name "Nuevo Tag"
    Then the tag "Nuevo Tag" should be present in the tag list

  @user2 @web
  Scenario: P012 - Modificación de tags
    Given I navigate to page "<URL_DASHBOARD>"
    And I navigate to page "<URL_TAGS>"
    When I click on the link with text "Edit Tag"
    And I enter tag name "Tag Modificado"
    Then the tag "Tag Modificado" should be present in the tag list

  @user3 @web
  Scenario: P013 - Eliminación de tags
    Given I navigate to page "<URL_DASHBOARD>"
    And I navigate to page "<URL_TAGS>"
    When I click on the link with text "Delete Tag"
    Then the tag should not be present in the tag list

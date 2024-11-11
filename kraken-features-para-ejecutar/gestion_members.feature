Feature: Gestión de Miembros

  @user1 @web
  Scenario: P017 - Creación de miembros
    Given I navigate to page "<URL_DASHBOARD>"
    And I navigate to page "<URL_MEMBERS>"
    When I click on the link with text "New Member"
    And I enter member name "Nuevo Miembro"
    Then the member "Nuevo Miembro" should be present in the member list

  @user2 @web
  Scenario: P018 - Modificación de miembros
    Given I navigate to page "<URL_DASHBOARD>"
    And I navigate to page "<URL_MEMBERS>"
    When I click on the link with text "Edit Member"
    And I enter member name "Miembro Modificado"
    Then the member "Miembro Modificado" should be present in the member list

  @user3 @web
  Scenario: P019 - Eliminación de miembros
    Given I navigate to page "<URL_DASHBOARD>"
    And I navigate to page "<URL_MEMBERS>"
    When I click on the link with text "Delete Member"
    Then the member should not be present in the member list

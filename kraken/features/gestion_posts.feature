  
  Feature: Gestión de Posts
  
  @user1 @web
  Scenario: Creación de nuevo post
    Given I navigate to page "<URL_DASHBOARD>"
    And I wait for 1 seconds
    And I enter email "<USERNAME>"
    And I enter password "<PASSWORD>"
    And I click next
    And I wait for 1 seconds
    And I navigate to page "<URL_DASHBOARD>"
    And I wait for 1 seconds
    And I click on the link with text "Posts"
    And I wait for 1 seconds
    When I click on the link with text "New post"
    And I wait for 1 seconds
    And I enter post name "Nuevo post"
    And I enter post description "Esto es una prueba de un post"
    And I click on the link with text "Publish"
    And I wait for 2 seconds
    And I click on the link with text "Continue, final review"
    And I click on the link with text "Publish post, right now"
    And I navigate to page "<URL_POSTS_PUBLISH>"
    And I wait for 2 seconds
    Then the post "Nuevo post" should be present in the post list
    And I wait for 2 seconds 
  
  @user2 @web
  Scenario: Edición de un post existente
    Given I navigate to page "<URL_DASHBOARD>"
    And I wait for 1 seconds
    And I enter email "<USERNAME>"
    And I enter password "<PASSWORD>"
    And I click next
    And I wait for 1 seconds
    And I navigate to page "<URL_DASHBOARD>"
    And I wait for 1 seconds
    And I click on the link with text "Posts"
    And I wait for 1 seconds
    When I click on the link with text "obtener primer post"
    And I wait for 1 seconds
    And I enter post name "Edición de post"
    And I enter post description "Esto es una prueba de una edición de un post"
    And I click on the link with text "Update"
    And I wait for 1 seconds
    And I navigate to page "<URL_POSTS_PUBLISH>"
    And I wait for 2 seconds
    Then the post "Edición de post" should be present in the post list
    And I wait for 2 seconds

  @user3 @web
  Scenario: Eliminación de un post existente
    Given I navigate to page "<URL_DASHBOARD>"
    And I wait for 1 seconds
    And I enter email "<USERNAME>"
    And I enter password "<PASSWORD>"
    And I click next
    And I wait for 1 seconds
    And I navigate to page "<URL_DASHBOARD>"
    And I wait for 1 seconds
    And I click on the link with text "Posts"
    And I wait for 1 seconds
    When I click on the link with text "obtener primer post"
    And I wait for 1 seconds
    When I click on the link with text "opciones posts"
    And I wait for 1 seconds
    When I click on the link with text "eliminar post modal"
    And I wait for 1 seconds
    When I click on the link with text "eliminar post"
    And I wait for 2 seconds
    Then the post "Edición de post" should not be present in the post list
    And I wait for 1 seconds

  @user4 @web
  Scenario: Guardar post como borrador
    Given I navigate to page "<URL_DASHBOARD>"
    And I wait for 1 seconds
    And I enter email "<USERNAME>"
    And I enter password "<PASSWORD>"
    And I click next
    And I wait for 1 seconds
    And I navigate to page "<URL_DASHBOARD>"
    And I wait for 1 seconds
    And I click on the link with text "Posts"
    And I wait for 1 seconds
    When I click on the link with text "New post"
    And I wait for 1 seconds
    And I enter post name "Nuevo post draft"
    And I enter post description "Esto es una prueba de un post draft"
    And I wait for 1 seconds
    And I click on the link with text "Publish"
    And I wait for 1 seconds
    And I click on the link with text " Editor"
    And I wait for 1 seconds
    And I navigate to page "<URL_POST_DRAFTS>"
    And I wait for 2 seconds
    Then the post "Nuevo post draft" should be present in the post list
    And I wait for 1 seconds

  @user5 @web
  Scenario: Cambiar estado de borrador a publicado
    Given I navigate to page "<URL_DASHBOARD>"
    And I wait for 1 seconds
    And I enter email "<USERNAME>"
    And I enter password "<PASSWORD>"
    And I click next
    And I wait for 1 seconds
    And I navigate to page "<URL_DASHBOARD>"
    And I wait for 1 seconds
    And I click on the link with text "Posts"
    And I wait for 1 seconds
    And I navigate to page "<URL_POST_DRAFTS>"
    And I wait for 2 seconds
    When I click on the link with text "obtener primer draft"
    And I wait for 1 seconds
    And I click on the link with text "Publish"
    And I wait for 2 seconds
    And I click on the link with text "Continue, final review"
    And I click on the link with text "Publish post, right now"
    And I navigate to page "<URL_POSTS_PUBLISH>"
    And I wait for 2 seconds
    Then the post "Nuevo post draft" should be present in the post list
    And I wait for 2 seconds

  @user6 @web
  Scenario: Previsualización de un post
    Given I navigate to page "<URL_DASHBOARD>"
    And I wait for 1 seconds
    And I enter email "<USERNAME>"
    And I enter password "<PASSWORD>"
    And I click next
    And I wait for 1 seconds
    And I navigate to page "<URL_DASHBOARD>"
    And I wait for 1 seconds
    And I click on the link with text "Posts"
    And I wait for 1 seconds
    When I click on the link with text "New post"
    And I wait for 1 seconds
    And I enter post name "Esto es un post para probar el preview del mismo"
    And I enter post description "Esto es una prueba de un post"
    And I click on the link with text "Ver preview post"
    And I wait for 2 seconds
    Then I should see the preview title "Esto es un post para probar el preview del mismo"
    And I wait for 1 seconds

  
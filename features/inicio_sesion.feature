Feature: Pruebas de inicio de sesión
  
  @user1 @web
  Scenario: Inicio de sesión inválido
    Given Abro Ghost 
    When Inicio de sesión inválido
    Then Debo ver mensaje "There is no user with that email address."

  @user2 @web
  Scenario: Inicio de sesión válido
    Given Abro Ghost 
    When Inicio de sesión válido
    Then Debo ver el dashboard

  @user3 @web
  Scenario: Logout de sesión válido
    Given Abro Ghost
    When Inicio de sesión válido
    And Salgo de la sesión
    Then Debo ver página de login


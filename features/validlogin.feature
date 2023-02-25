Feature: Kasir Demo Belajar QA

  Scenario Outline: Login With Valid Login
    Given I am on the login page
    When I login with <username> and <password>
    When I click a button login
    Then I should see a dashboard url

    Examples:
      | username                    | password                 |
      | ghalasudana24@gmail.com     | Ghala2022                | 
    

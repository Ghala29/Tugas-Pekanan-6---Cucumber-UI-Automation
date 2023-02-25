Feature: Kasir Demo Belajar QA

  Scenario Outline: Login With invalid Login
    Given I am on the login page
    When I login with <username> and <password>
    When I click a button login
    Then I should see a<message>

    Examples:
      | username                    | password              | message                            |
      | ghalasudana24123@gmail.com  | Ghala2022             | Kredensial yang Anda berikan salah |
      | ghalasudana24@gmail.com     | Ghala2023             | Kredensial yang Anda berikan salah |
      | ghalasudana24               | Ghala2023             | "email" must be a valid email      |
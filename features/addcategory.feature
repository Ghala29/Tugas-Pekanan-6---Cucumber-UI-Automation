Feature: Kasir Demo Belajar QA

  Scenario Outline: Login With Valid Login
    Given I am on the login page
    When I login with <username> and <password>
    When I click a button login
    When I see a dashboard url
    When I click category button
    When I click tambah 
    When I Input <nama> and <deskripsi>
    When I click button simpan
    Then I should see a<message>


    Examples:
      | username                    | password   | nama               | deskripsi       | message          |
      | ghalasudana24@gmail.com     | Ghala2022  | test Add category  | test deskripsi  | item ditambahkan |
    

# Tugas-Pekanan-6-Cucumber-UI-Automation
By Ghala Sudana

## Scenario Test 
Feature: Kasir Demo Belajar QA

  Scenario Outline: Login With Valid Login
  
    Given I am on the login page
    When I login with <username> and <password>
    When I click a button login
    Then I should see a dashboard url

    Examples:
      | username                    | password |
      | ghalasudana24@gmail.com     | Ghala2022| 


Feature: Kasir Demo Belajar QA

  Scenario Outline: Login With invalid Login
  
    Given I am on the login page
    When I login with <username> and <password>
    When I click a button login
    Then I should see a<message>

  Feature: Kasir Demo Belajar QA

  Scenario Outline: Add Category
  
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
     


## How to run
```bash
npm install
```
### Ganti wdio.conf setiap ingin menjalankan test pada specs and cucumberopts

Ganti Specs jika ingin login
```bash
'./features/validlogin.feature'
```

Ganti CucumberOpts jika ingin login
```bash
'./features/step-definitions/validlogin.js'
```

Ganti Specs jika ingin invalid login
```bash
'./features/invalidlogin.feature'
```

Ganti CucumberOpts jika ingin invalid login
```bash
'./features/step-definitions/invalidlogin.js'
```

Ganti Specs jika ingin add category
```bash
'./features/addcategory.feature'
```

Ganti CucumberOpts jika ingin add category
```bash
'./features/step-definitions/addcategory.js'
```

Run test
```bash
npm run wdio
```

Generate Result
```bash
allure generate allure-results
```

Open Generate Report
```bash
allure open allure-report
```
## Hasil Running

#### Valid Login

![ValidLogin](https://user-images.githubusercontent.com/85092513/221366590-8d912fc9-1874-4fcd-84c1-c2cd2b7fbe99.gif)

#### Invalid Login

![emailsalah](https://user-images.githubusercontent.com/85092513/221366825-d2b9db09-bfba-4988-a9bf-0d9e291b2926.gif)

![emailsalahsyntax](https://user-images.githubusercontent.com/85092513/221366870-1751e8ba-d55b-4294-9662-0687f6342c54.gif)

![emailsalahsyntax](https://user-images.githubusercontent.com/85092513/221366886-f36d7ec9-cb91-4e82-8994-72f90622abde.gif)

#### Add Category

![Add Category](https://user-images.githubusercontent.com/85092513/221366965-0c234b4a-f877-4cbb-bcb9-9b585c97cb17.gif)

## Link Video
```bash
(https://github.com/Ghala29/Tugas-Pekanan-6---Cucumber-UI-Automation/tree/main/_results_)
```




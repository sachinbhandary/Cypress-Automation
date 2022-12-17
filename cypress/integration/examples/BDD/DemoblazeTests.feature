Feature: End to end demoblaze validation

    Application Regretion

    Scenario: Ecomerce product delivery
    Given I open Demoblaze webpage and login with credentials and Validate login
    When I add two items to cart and Validate items present in the cart and total price and place order
    Then Enter delivery details submit and verify Thank You and click OK
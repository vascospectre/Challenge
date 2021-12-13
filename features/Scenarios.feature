Feature: GoContact Challenge in Fnac WebPage

  Scenario: Search for George in the Fnac page
    Given I am on the homepage
    When I search by "George"
    And I change the view 
    And That "Fascism and Democracy" appear in the results and has "word" in description 
 
  Scenario: Search for 1984 book and verify characteristics
    Given I am on the homepage
    When I search by "1984"
    Then I choose the book "1984" in the results
    And I validate that the author is "George Orwell"
    And I validate that the ISBN "9789726081890"
    And I validate that the number of pages are "314"
    And I validate that the book dimensions are "13 x 21 cm"

  Scenario: Search for 1984 book and verify the comments
    Given I am on the homepage
    When I search by "1984"
    Then I choose the book "1984" in the results
    And I validate that theres no classifications with one star
    And I validate that the first comment is from "22 Ago 2018"

  Scenario: Search for 1984 book and verify the author biography
    Given I am on the homepage
    When I search by "1984"
    Then I choose the book "1984" in the results
    And I choose the author biography
    And I check if "Animal farm" is from the author
  
  Scenario: Search for Fascism and Democracy book and check the price
    Given I am on the homepage
    When I search by "Fascism and Democracy"
    Then I choose the book "Fascism and Democracy" in the results
    And I add the book to the shopping cart
    And I check if the number of items are one
    And I check if the value is the price of the book plus shipping

  Scenario: Search for a shop in Lisbon 
    Given I am on the homepage
    When I choose the modal and write "Lisboa"
    Then I choose the Almada store
    And I verify if the postal code is "2810-354"
    And I verify that the store is schedule is from ten to eleven

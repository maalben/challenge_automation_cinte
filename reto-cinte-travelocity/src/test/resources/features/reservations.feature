#Author: Mario Alejandro Benítez Orozco

@Regression
Feature: As a user I want to make bookings in travelocity

@BookingsHotelSuccessful
Scenario: Successful hotel booking in travelocity
Given I wants to access platform the travelocity
When I make the hotel reservation on the page
|     destination       |   initialReservationDate   |    finalReservationDate    |   adults  |   children  |   ageChild  |
|   Poblado medellín    |       2021-02-20           |        2021-02-25          |     5     |       1     |       5     |
Then I verify that the hotel exists "Apartamento Calle 8"


@BookingsHotelNoExists
Scenario: Search hotel booking in travelocity not exists
  Given I wants to access platform the travelocity
  When I make the hotel reservation on the page
    |     destination       |   initialReservationDate   |    finalReservationDate    |   adults  |   children  |   ageChild  |
    |   Poblado medellín    |       2021-02-25           |        2021-02-28          |     1     |       1     |       3     |
  Then I verify that the hotel no exists "Apartamento Calle 9"


@BookingsHotelWithReservationDateMore28days
Scenario: Reservation date hotel with more 28 days
  Given I wants to access platform the travelocity
  When I make the hotel reservation on the page
    |     destination       |   initialReservationDate   |    finalReservationDate    |   adults  |   children  |   ageChild  |
    |   Poblado medellín    |       2021-03-01           |        2021-03-30          |     1     |       1     |       3     |
  Then I verify that the message error "Dates must be no more than 28 days apart" is expected


@BookingsHotelWithoutToSpecifyPlace
Scenario: Reservation hotel without specify place
  Given I wants to access platform the travelocity
  When I make the hotel reservation on the page without specify place
    |   initialReservationDate   |    finalReservationDate    |   adults  |   children  |   ageChild  |
    |       2021-03-01           |        2021-03-30          |     1     |       1     |       3     |
  Then I verify that the message error expected in the text place is "Please select a destination"


@SendTextMessageDownloadApp
Scenario: Send text message for download App success
  Given I wants to access platform the travelocity
  When I fill in the data to download the app
    |   countryCode    |    phoneNumber    |
    |   Colombia +57   |    3000000003     |
  Then I verify that the message "We’ve sent you a text message with a link to download the app." appear


@SendTextMessageDownloadAppWithAlreadyUsedPhoneNumber
Scenario: Send text message with phone number already used
  Given I wants to access platform the travelocity
  When I fill in the data to download the app
    |   countryCode    |    phoneNumber    |
    |   Colombia +57   |    3000000001     |
  Then I verify that the text "We’ve sent you a text message with a link to download the app. Please check the phone number you provided, or try again by entering a different phone number." is as expected


@SendTextMessageWithoutSpecifyPhoneNumber
Scenario: Send text message without specify phone number
  Given I wants to access platform the travelocity
  When I press button to get the app
  Then I should see the message "Please enter a valid phone number."


#@manual-result:failed
  @FirstStageManual
  @Manual
  @manual-result:passed
  Scenario: Search flights successfully
    Given Enter the page https://www.travelocity.com
    When Click on the Flights option
    And Click on Roundtrip
    And Click on the Leaving from field
    And Write Medellín
    And Click on the Medellín option (MDE - Jose Maria Cordova Intl)
    And Click on the Going to field
    And Write Bogotá
    And Click on the Bogota option (BOG - El Dorado Intl.)
    And Click on the Departing field
    And Click on the 1st of March
    And Click on the Done button
    And Click on the Returning field
    And Click on the 30th of March
    And Click on the Done button
    And Click on the Search button
    Then I should see a list of flight schedules taking into account the selected origin and destination.
    And I should see a list of flight costs taking into account the selected origin and destination.
    And I should see a list of travel time taking into account the origin and destination.
    And I should see a list of available airlines taking into account the origin and destination.

  @SecondStageManual
  @Manual
  @manual-result:passed
  Scenario: Search for flights without selecting origin or destination
    Given Enter the page https://www.travelocity.com
    When Click on the Flights option
    And Click on Roundtrip
    And Click on the Search button
    Then I should see the error message Please select an origin in red below the Leaving from text field.
    And I should see a red Please select a destination error message below the Going to text field

  @ThirdStageManual
  @Manual
  @manual-result:passed
  Scenario: Search for flights without selecting origin or destination
    Given Enter the page https://www.travelocity.com
    When Click on the Flights option
    And Click on Roundtrip
    And Click on the Search button
    Then I should see the error message Please select an origin in red below the Leaving from text field.
    And I should see a red Please select a destination error message below the Going to text field

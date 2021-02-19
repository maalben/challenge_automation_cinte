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


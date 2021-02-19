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
    |   Colombia +57   |    3000000004     |
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
    Then I should see a list of flight schedules taking into account the selected origin and destination
    And I should see a list of flight costs taking into account the selected origin and destination
    And I should see a list of travel time taking into account the origin and destination
    And I should see a list of available airlines taking into account the origin and destination

  @SecondStageManual
  @Manual
  @manual-result:passed
  Scenario: Search for flights without selecting origin or destination
    Given Enter the page https://www.travelocity.com
    When Click on the Flights option
    And Click on Roundtrip
    And Click on the Search button
    Then I should see the error message Please select an origin in red below the Leaving from text field
    And I should see a red Please select a destination error message below the Going to text field

  @ThirdStageManual
  @Manual
  @manual-result:passed
  Scenario: Search for flights without selecting origin or destination
    Given Enter the page https://www.travelocity.com
    When Click on the Flights option
    And Click on Roundtrip
    And Write Medellín
    And Click on the Medellín option (MDE - Jose Maria Cordova Intl)
    And Click on the Going to field
    And Write Medellín
    And Click on the Medellín option (MDE - Jose Maria Cordova Intl)
    And Click on the Search button
    Then I should see a red Please choose a different destination from origin error message below the Going to text field

  @FourthStageManual
  @Manual
  @manual-result:passed
  Scenario: Search multiple flights without selecting any kind of information
    Given Enter the page https://www.travelocity.com
    When Click on the Flights option
    And Click on Multi-city
    And Under Flight 1, click in the Leaving from field
    And Write Medellín
    And Click on the Medellín option (MDE - Jose Maria Cordova Intl)
    And Under Flight 1, click the Going to field
    And Write Bogota
    And Click on the Bogota option (BOG - El Dorado Intl.)
    And Under Flight 1, Click on the Departing field
    And Click on the 10th of the month of March
    And Click on the Done button
    And Under Flight 2, click on the Going to field
    And Write Medellín
    And Click on the Medellín option (MDE - Jose Maria Cordova Intl)
    And Under Flight 2, Click on the Departing field
    And Click on the 15th of March
    And Click on the Done button
    And Click on the Search button
    Then I should see a list of flight schedules taking into account the selected origin and destination
    And I should see a list of flight costs taking into account the selected origin and destination
    And I should see a list of travel time taking into account the origin and destination
    And I should see a list of available airlines taking into account the origin and destination

  @FifthStageManual
  @Manual
  @manual-result:passed
  Scenario: Search vehicle to rent successfully
    Given Enter the page https://www.travelocity.com
    When Click on the Cars option
    And Click on Rental cars
    And Click on the Pick-up field
    And Write Town
    And Click on the El Poblado option
    And Click on the Same as pick-up field
    And Write Envigado
    And Click on the Ayura Station option
    And Click on the Pick-up date field
    And Click on the 7th of the month of March
    And Click on the Done button
    And Click on the Drop-off date field
    And Click on the 10th of the month of March
    And Click on the Done button
    And Click on the Pick-up time field
    And In the drop-down list, click 08:00
    And Click on the Drop-off time field
    And In the drop-down list, click 17:00
    And Click on the Search button
    And I should see a list of the type of vehicle
    And I should see the make of the vehicle ready
    And I should see a list of the cost of the vehicle rental
    And I should see button list to reserve
    And I should see mileage list
    And I should see cleaning list
    Then I should see a list of flight schedules taking into account the selected origin and destination
    And I should see a list of flight costs taking into account the selected origin and destination
    And I should see a list of travel time taking into account the origin and destination
    And I should see a list of available airlines taking into account the origin and destination

  @SixthStageManual
  @Manual
  @manual-result:passed
  Scenario: Search vehicle to rent without checking any option
    Given Enter the page https://www.travelocity.com
    When Click on the Cars option
    And Click on Rental cars
    And Click on the Search button
    Then I should see a red Please select an origin error message below the Pick-up text field
    And I should see a red Please select a destination error message below the Same as pick-up text field

  @SeventhStageManual
  @Manual
  @manual-result:passed
  Scenario: Find transportation to the airport with wrong information
    Given Enter the page https://www.travelocity.com
    When Click on the Cars option
    And Click on Airport transportation
    And Click on the Airport field
    And Write Medellín
    And Click on the Medellín option (MDE - Jose Maria Cordova Intl)
    And Click on the Hotel name field
    And Write Town
    And Click on the option Hotel Poblado Plaza
    And Click on the Flight arrival date field
    And Click on the 10th of the month of March
    And Click on the Done button
    And Click on the Flight arrival time field
    And In the drop-down field, click 00:00
    And Click on the Search button
    Then I should see the message Sorry, we're unable to find any Ground Transportation for your search. Please try a different search

  @EighthStageManual
  @Manual
  @manual-result:passed
  Scenario: Make package reservation by selecting Hotels and Flights
    Given Enter the page https://www.travelocity.com
    When Click on the Packages option
    And Click on the Hotels option and on the Flights option. Verify that only those 2 options remain selected or colored blue.
    And Click on the Leaving from field
    And Write Medellín
    And Click on the Medellín option (MDE - Jose Maria Cordova Intl)
    And Click on the Going to field
    And Write Bogotá
    And Click on the Bogota option (BOG - El Dorado Intl.)
    And Click on the Departing field
    And Click on the 7th of the month of March
    And Click on the Done button
    And Click on the Returning field
    And Click on the 10th of the month of March
    And Click on the Done button
    And Click on the Search button
    Then I should see a list of names for each hotel
    And I should see a description list of each hotel
    And I should see a list of the cost of each hotel
    And I should see a list of images for each hotel
    And You should see rating list of each hotel

  @NinethStageManual
  @Manual
  @manual-result:passed
  Scenario: Make package reservation by selecting Hotels and Cars
    Given Enter the page https://www.travelocity.com
    When Click on the Packages option
    And Click on the Hotels option and on the Cars option. Verify that only those 2 options remain selected or colored blue
    And Click on the Going to field
    And Write Bogotá
    And Click on the Bogota option (BOG - El Dorado Intl.)
    And Click on the Check-in field
    And Click on the 7th of the month of March
    And Click on the Done button
    And Click on the Check-out field
    And Click on the 10th of the month of March
    And Click on the Done button
    And Click on the Search button
    Then I should see a list of names for each hotel
    And I should see a description list of each hotel
    And I should see a list of the cost of each hotel
    And I should see a list of images for each hotel
    And I should see rating list of each hotel

  @TenthStageManual
  @Manual
  @manual-result:passed
  Scenario: Make package reservation by selecting Flights and Cars
    Given Enter the page https://www.travelocity.com
    When Click on the Packages option
    And Click on the Flights option and on the Cars option. Verify that only those 2 options remain selected or colored blue
    And Click on the Leaving from field
    And Write Medellín
    And Click on the Medellín option (MDE - Jose Maria Cordova Intl)
    And Click on the Going to field
    And Write Bogotá
    And Click on the Bogota option (BOG - El Dorado Intl.)
    And Click on the Departing field
    And Click on the 7th of the month of March
    And Click on the Done button
    And Click on the Returning field
    And Click on the 10th of the month of March
    And Click on the Done button
    And Click on the Search button
    Then I should see a list of flight schedules taking into account the selected origin and destination
    And I should see a list of flight costs taking into account the selected origin and destination
    And I should see a list of travel time taking into account the origin and destination
    And I should see a list of available airlines taking into account the origin and destination

  @EleventhStageManual
  @Manual
  @manual-result:passed
  Scenario: Consult things to do successfully
    Given Enter the page https://www.travelocity.com
    When Click on the Things to do option
    And Click on the field Where are you going?
    And Write Medellín
    And Click on the Medellin option
    And Click on the From field
    And Click on the 7th of the month of March
    And Click on the Done button
    And Click on the To field
    And Click on the 10th of the month of March
    And Click on the Done button
    And Click on the Search button
    Then I should see a list of names for each type of activity
    And I should see a description list of each type of activity
    And I should see a list of the cost of each type of activity
    And I should see a list of the time of each type of activity

  @TwelfthStageManual
  @Manual
  @manual-result:passed
  Scenario: Consult things to do successfully
    Given Enter the page https://www.travelocity.com
    When Click on the Things to do option
    And Click on the Search button
    Then You should see Please select a destination below the Things to do in field

  @ThirteenthStageManual
  @Manual
  @manual-result:passed
  Scenario: Consult cruises without specifying search criteria
    Given Enter the page https://www.travelocity.com
    When Click on the Cruises option
    And Click on the Search button
    Then I should see a list of names for each cruise
    And I should see a list of where the cruise departs from
    And I should see a list of the cost of each cruise
    And I should see a list of sailing dates for each cruise
    And I should see an image list of each cruise

  @FourteenthStageManual
  @Manual
  @manual-result:passed
  Scenario: Consult cruises specifying search criteria and dates with short time
    Given Enter the page https://www.travelocity.com
    When Click on the Cruises option
    And Click on the Going to drop-down field
    And In the list, click on the Mexico option
    And Click on the Travelers in the cabin field
    And Choose 1 adult.
    And Choose 1 child.
    And Click on the Child 1 age field
    And Click on option 10
    And Click on the Done button
    And Click on the field Departs as early as
    And Click on the 7th of the month of March
    And Click on the Done button
    And Click on the field Departs as late as
    And Click on the 10th of the month of March
    And Click on the Done button
    And Click on the Search button
    Then I should see the message We couldn't find any cruises that match your departure dates. View cruises for all dates below
    And I should see a list of names for each cruise
    And I should see a list of where the cruise departs from
    And I should see a list of the cost of each cruise
    And I should see a list of sailing dates for each cruise
    And I should see an image list of each cruise
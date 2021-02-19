$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/reservations.feature");
formatter.feature({
  "name": "As a user I want to make bookings in travelocity",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.scenario({
  "name": "Successful hotel booking in travelocity",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@BookingsHotelSuccessful"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I wants to access platform the travelocity",
  "keyword": "Given "
});
formatter.match({
  "location": "ReservationsDefinitions.iWantsToAccessPlatformTheTravelocity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make the hotel reservation on the page",
  "rows": [
    {
      "cells": [
        "destination",
        "initialReservationDate",
        "finalReservationDate",
        "adults",
        "children",
        "ageChild"
      ]
    },
    {
      "cells": [
        "Poblado medellín",
        "2021-02-20",
        "2021-02-25",
        "5",
        "1",
        "5"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "ReservationsDefinitions.iMakeTheHotelReservationOnThePage(HotelReservationModels\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify that the hotel exists \"Apartamento Calle 8\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ReservationsDefinitions.iVerifyThatTheHotelExists(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search hotel booking in travelocity not exists",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@BookingsHotelNoExists"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I wants to access platform the travelocity",
  "keyword": "Given "
});
formatter.match({
  "location": "ReservationsDefinitions.iWantsToAccessPlatformTheTravelocity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make the hotel reservation on the page",
  "rows": [
    {
      "cells": [
        "destination",
        "initialReservationDate",
        "finalReservationDate",
        "adults",
        "children",
        "ageChild"
      ]
    },
    {
      "cells": [
        "Poblado medellín",
        "2021-02-25",
        "2021-02-28",
        "1",
        "1",
        "3"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "ReservationsDefinitions.iMakeTheHotelReservationOnThePage(HotelReservationModels\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify that the hotel no exists \"Apartamento Calle 9\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ReservationsDefinitions.iVerifyThatTheHotelNoExists(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Reservation date hotel with more 28 days",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@BookingsHotelWithReservationDateMore28days"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I wants to access platform the travelocity",
  "keyword": "Given "
});
formatter.match({
  "location": "ReservationsDefinitions.iWantsToAccessPlatformTheTravelocity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make the hotel reservation on the page",
  "rows": [
    {
      "cells": [
        "destination",
        "initialReservationDate",
        "finalReservationDate",
        "adults",
        "children",
        "ageChild"
      ]
    },
    {
      "cells": [
        "Poblado medellín",
        "2021-03-01",
        "2021-03-30",
        "1",
        "1",
        "3"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "ReservationsDefinitions.iMakeTheHotelReservationOnThePage(HotelReservationModels\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify that the message error \"Dates must be no more than 28 days apart\" is expected",
  "keyword": "Then "
});
formatter.match({
  "location": "ReservationsDefinitions.iVerifyThatTheMessageErrorIsExpected(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Reservation hotel without specify place",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@BookingsHotelWithoutToSpecifyPlace"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I wants to access platform the travelocity",
  "keyword": "Given "
});
formatter.match({
  "location": "ReservationsDefinitions.iWantsToAccessPlatformTheTravelocity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make the hotel reservation on the page without specify place",
  "rows": [
    {
      "cells": [
        "initialReservationDate",
        "finalReservationDate",
        "adults",
        "children",
        "ageChild"
      ]
    },
    {
      "cells": [
        "2021-03-01",
        "2021-03-30",
        "1",
        "1",
        "3"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "ReservationsDefinitions.iMakeTheHotelReservationOnThePageWithoutSpecifyPlace(HotelReservationModels\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify that the message error expected in the text place is \"Please select a destination\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ReservationsDefinitions.iVerifyThatTheMessageErrorExpectedInTheTextPlaceIs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Send text message for download App success",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@SendTextMessageDownloadApp"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I wants to access platform the travelocity",
  "keyword": "Given "
});
formatter.match({
  "location": "ReservationsDefinitions.iWantsToAccessPlatformTheTravelocity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I fill in the data to download the app",
  "rows": [
    {
      "cells": [
        "countryCode",
        "phoneNumber"
      ]
    },
    {
      "cells": [
        "Colombia +57",
        "3000000003"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "ReservationsDefinitions.iFillInTheDataToDownloadTheApp(HotelReservationModels\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify that the message \"We’ve sent you a text message with a link to download the app.\" appear",
  "keyword": "Then "
});
formatter.match({
  "location": "ReservationsDefinitions.iVerifyThatTheMessageAppear(String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: The text message is no expected - Expected the message success\nExpected: is \u003ctrue\u003e\n     but: was \u003cfalse\u003e\n\tat net.serenitybdd.screenplay.ErrorTally.throwSummaryExceptionFrom(ErrorTally.java:36)\n\tat net.serenitybdd.screenplay.ErrorTally.reportAnyErrors(ErrorTally.java:30)\n\tat net.serenitybdd.screenplay.Actor.should(Actor.java:316)\n\tat com.cinte.reto_travelocity.stepdefinitions.ReservationsDefinitions.iVerifyThatTheMessageAppear(ReservationsDefinitions.java:84)\n\tat ✽.I verify that the message \"We’ve sent you a text message with a link to download the app.\" appear(src/test/resources/features/reservations.feature:48)\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Send text message with phone number already used",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@SendTextMessageDownloadAppWithAlreadyUsedPhoneNumber"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I wants to access platform the travelocity",
  "keyword": "Given "
});
formatter.match({
  "location": "ReservationsDefinitions.iWantsToAccessPlatformTheTravelocity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I fill in the data to download the app",
  "rows": [
    {
      "cells": [
        "countryCode",
        "phoneNumber"
      ]
    },
    {
      "cells": [
        "Colombia +57",
        "3000000001"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "ReservationsDefinitions.iFillInTheDataToDownloadTheApp(HotelReservationModels\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify that the text \"We’ve sent you a text message with a link to download the app. Please check the phone number you provided, or try again by entering a different phone number.\" is as expected",
  "keyword": "Then "
});
formatter.match({
  "location": "ReservationsDefinitions.iVerifyThatTheTextIsAsExpected(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Send text message without specify phone number",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@SendTextMessageWithoutSpecifyPhoneNumber"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I wants to access platform the travelocity",
  "keyword": "Given "
});
formatter.match({
  "location": "ReservationsDefinitions.iWantsToAccessPlatformTheTravelocity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I press button to get the app",
  "keyword": "When "
});
formatter.match({
  "location": "ReservationsDefinitions.iPressButtonToGetTheApp()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the message \"Please enter a valid phone number.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ReservationsDefinitions.iShouldSeeTheMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search flights successfully",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@FirstStageManual"
    },
    {
      "name": "@Manual"
    },
    {
      "name": "@manual-result:passed"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Enter the page https://www.travelocity.com",
  "keyword": "Given "
});
formatter.match({
  "location": "ReservationsDefinitions.enterThePageHttpsWwwTravelocityCom()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the Flights option",
  "keyword": "When "
});
formatter.match({
  "location": "ReservationsDefinitions.clickOnTheFlightsOption()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Roundtrip",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.clickOnRoundtrip()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the Leaving from field",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.clickOnTheLeavingFromField()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Write Medellín",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.writeMedellín()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the Medellín option (MDE - Jose Maria Cordova Intl)",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.clickOnTheMedellínOptionMDEJoseMariaCordovaIntl()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the Going to field",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.clickOnTheGoingToField()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Write Bogotá",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.writeBogotá()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the Bogota option (BOG - El Dorado Intl.)",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.clickOnTheBogotaOptionBOGElDoradoIntl()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the Departing field",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.clickOnTheDepartingField()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the 1st of March",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.clickOnTheStOfMarch(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the Done button",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.clickOnTheDoneButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the Returning field",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.clickOnTheReturningField()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the 30th of March",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.clickOnTheThOfMarch(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the Done button",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.clickOnTheDoneButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the Search button",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.clickOnTheSearchButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see a list of flight schedules taking into account the selected origin and destination",
  "keyword": "Then "
});
formatter.match({
  "location": "ReservationsDefinitions.iShouldSeeAListOfFlightSchedulesTakingIntoAccountTheSelectedOriginAndDestination()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see a list of flight costs taking into account the selected origin and destination",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.iShouldSeeAListOfFlightCostsTakingIntoAccountTheSelectedOriginAndDestination()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see a list of travel time taking into account the origin and destination",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.iShouldSeeAListOfTravelTimeTakingIntoAccountTheOriginAndDestination()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see a list of available airlines taking into account the origin and destination",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.iShouldSeeAListOfAvailableAirlinesTakingIntoAccountTheOriginAndDestination()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search for flights without selecting origin or destination",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@SecondStageManual"
    },
    {
      "name": "@Manual"
    },
    {
      "name": "@manual-result:passed"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Enter the page https://www.travelocity.com",
  "keyword": "Given "
});
formatter.match({
  "location": "ReservationsDefinitions.enterThePageHttpsWwwTravelocityCom()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the Flights option",
  "keyword": "When "
});
formatter.match({
  "location": "ReservationsDefinitions.clickOnTheFlightsOption()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Roundtrip",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.clickOnRoundtrip()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the Search button",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.clickOnTheSearchButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the error message Please select an origin in red below the Leaving from text field",
  "keyword": "Then "
});
formatter.match({
  "location": "ReservationsDefinitions.iShouldSeeTheErrorMessagePleaseSelectAnOriginInRedBelowTheLeavingFromTextField()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see a red Please select a destination error message below the Going to text field",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.iShouldSeeARedPleaseSelectADestinationErrorMessageBelowTheGoingToTextField()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search for flights without selecting origin or destination",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@ThirdStageManual"
    },
    {
      "name": "@Manual"
    },
    {
      "name": "@manual-result:passed"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Enter the page https://www.travelocity.com",
  "keyword": "Given "
});
formatter.match({
  "location": "ReservationsDefinitions.enterThePageHttpsWwwTravelocityCom()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the Flights option",
  "keyword": "When "
});
formatter.match({
  "location": "ReservationsDefinitions.clickOnTheFlightsOption()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Roundtrip",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.clickOnRoundtrip()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Write Medellín",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.writeMedellín()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the Medellín option (MDE - Jose Maria Cordova Intl)",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.clickOnTheMedellínOptionMDEJoseMariaCordovaIntl()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the Going to field",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.clickOnTheGoingToField()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Write Medellín",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.writeMedellín()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the Medellín option (MDE - Jose Maria Cordova Intl)",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.clickOnTheMedellínOptionMDEJoseMariaCordovaIntl()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the Search button",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.clickOnTheSearchButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see a red Please choose a different destination from origin error message below the Going to text field",
  "keyword": "Then "
});
formatter.match({
  "location": "ReservationsDefinitions.iShouldSeeARedPleaseChooseADifferentDestinationFromOriginErrorMessageBelowTheGoingToTextField()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search multiple flights without selecting any kind of information",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@FourthStageManual"
    },
    {
      "name": "@Manual"
    },
    {
      "name": "@manual-result:passed"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Enter the page https://www.travelocity.com",
  "keyword": "Given "
});
formatter.match({
  "location": "ReservationsDefinitions.enterThePageHttpsWwwTravelocityCom()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the Flights option",
  "keyword": "When "
});
formatter.match({
  "location": "ReservationsDefinitions.clickOnTheFlightsOption()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Multi-city",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.clickOnMultiCity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Under Flight 1, click in the Leaving from field",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.underFlightClickInTheLeavingFromField(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Write Medellín",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.writeMedellín()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the Medellín option (MDE - Jose Maria Cordova Intl)",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.clickOnTheMedellínOptionMDEJoseMariaCordovaIntl()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Under Flight 1, click the Going to field",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.underFlightClickTheGoingToField(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Write Bogota",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.writeBogota()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the Bogota option (BOG - El Dorado Intl.)",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.clickOnTheBogotaOptionBOGElDoradoIntl()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Under Flight 1, Click on the Departing field",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.underFlightClickOnTheDepartingField(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the 10th of the month of March",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.clickOnTheThOfTheMonthOfMarch(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the Done button",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.clickOnTheDoneButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Under Flight 2, click on the Going to field",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.underFlightClickOnTheGoingToField(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Write Medellín",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.writeMedellín()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the Medellín option (MDE - Jose Maria Cordova Intl)",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.clickOnTheMedellínOptionMDEJoseMariaCordovaIntl()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Under Flight 2, Click on the Departing field",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.underFlightClickOnTheDepartingField(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the 15th of March",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.clickOnTheThOfMarch(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the Done button",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.clickOnTheDoneButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the Search button",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.clickOnTheSearchButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see a list of flight schedules taking into account the selected origin and destination",
  "keyword": "Then "
});
formatter.match({
  "location": "ReservationsDefinitions.iShouldSeeAListOfFlightSchedulesTakingIntoAccountTheSelectedOriginAndDestination()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see a list of flight costs taking into account the selected origin and destination",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.iShouldSeeAListOfFlightCostsTakingIntoAccountTheSelectedOriginAndDestination()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see a list of travel time taking into account the origin and destination",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.iShouldSeeAListOfTravelTimeTakingIntoAccountTheOriginAndDestination()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see a list of available airlines taking into account the origin and destination",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.iShouldSeeAListOfAvailableAirlinesTakingIntoAccountTheOriginAndDestination()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search vehicle to rent successfully",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@FifthStageManual"
    },
    {
      "name": "@Manual"
    },
    {
      "name": "@manual-result:passed"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Enter the page https://www.travelocity.com",
  "keyword": "Given "
});
formatter.match({
  "location": "ReservationsDefinitions.enterThePageHttpsWwwTravelocityCom()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the Cars option",
  "keyword": "When "
});
formatter.match({
  "location": "ReservationsDefinitions.clickOnTheCarsOption()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Rental cars",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.clickOnRentalCars()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the Pick-up field",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.clickOnThePickUpField()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Write Town",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.writeTown()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the El Poblado option",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.clickOnTheElPobladoOption()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the Same as pick-up field",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.clickOnTheSameAsPickUpField()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Write Envigado",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.writeEnvigado()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the Ayura Station option",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.clickOnTheAyuraStationOption()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the Pick-up date field",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.clickOnThePickUpDateField()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the 7th of the month of March",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.clickOnTheThOfTheMonthOfMarch(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the Done button",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.clickOnTheDoneButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the Drop-off date field",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.clickOnTheDropOffDateField()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the 10th of the month of March",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.clickOnTheThOfTheMonthOfMarch(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the Done button",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.clickOnTheDoneButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the Pick-up time field",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.clickOnThePickUpTimeField()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "In the drop-down list, click 08:00",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.inTheDropDownListClick(int,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the Drop-off time field",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.clickOnTheDropOffTimeField()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "In the drop-down list, click 17:00",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.inTheDropDownListClick(int,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the Search button",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.clickOnTheSearchButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see a list of the type of vehicle",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.iShouldSeeAListOfTheTypeOfVehicle()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the make of the vehicle ready",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.iShouldSeeTheMakeOfTheVehicleReady()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see a list of the cost of the vehicle rental",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.iShouldSeeAListOfTheCostOfTheVehicleRental()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see button list to reserve",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.iShouldSeeButtonListToReserve()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see mileage list",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.iShouldSeeMileageList()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see cleaning list",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.iShouldSeeCleaningList()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see a list of flight schedules taking into account the selected origin and destination",
  "keyword": "Then "
});
formatter.match({
  "location": "ReservationsDefinitions.iShouldSeeAListOfFlightSchedulesTakingIntoAccountTheSelectedOriginAndDestination()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see a list of flight costs taking into account the selected origin and destination",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.iShouldSeeAListOfFlightCostsTakingIntoAccountTheSelectedOriginAndDestination()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see a list of travel time taking into account the origin and destination",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.iShouldSeeAListOfTravelTimeTakingIntoAccountTheOriginAndDestination()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see a list of available airlines taking into account the origin and destination",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.iShouldSeeAListOfAvailableAirlinesTakingIntoAccountTheOriginAndDestination()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search vehicle to rent without checking any option",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@SixthStageManual"
    },
    {
      "name": "@Manual"
    },
    {
      "name": "@manual-result:passed"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Enter the page https://www.travelocity.com",
  "keyword": "Given "
});
formatter.match({
  "location": "ReservationsDefinitions.enterThePageHttpsWwwTravelocityCom()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the Cars option",
  "keyword": "When "
});
formatter.match({
  "location": "ReservationsDefinitions.clickOnTheCarsOption()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Rental cars",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.clickOnRentalCars()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the Search button",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.clickOnTheSearchButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see a red Please select an origin error message below the Pick-up text field",
  "keyword": "Then "
});
formatter.match({
  "location": "ReservationsDefinitions.iShouldSeeARedPleaseSelectAnOriginErrorMessageBelowThePickUpTextField()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see a red Please select a destination error message below the Same as pick-up text field",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.iShouldSeeARedPleaseSelectADestinationErrorMessageBelowTheSameAsPickUpTextField()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Find transportation to the airport with wrong information",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@SeventhStageManual"
    },
    {
      "name": "@Manual"
    },
    {
      "name": "@manual-result:passed"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Enter the page https://www.travelocity.com",
  "keyword": "Given "
});
formatter.match({
  "location": "ReservationsDefinitions.enterThePageHttpsWwwTravelocityCom()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the Cars option",
  "keyword": "When "
});
formatter.match({
  "location": "ReservationsDefinitions.clickOnTheCarsOption()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Airport transportation",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.clickOnAirportTransportation()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the Airport field",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.clickOnTheAirportField()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Write Medellín",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.writeMedellín()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the Medellín option (MDE - Jose Maria Cordova Intl)",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.clickOnTheMedellínOptionMDEJoseMariaCordovaIntl()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the Hotel name field",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.clickOnTheHotelNameField()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Write Town",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.writeTown()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the option Hotel Poblado Plaza",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.clickOnTheOptionHotelPobladoPlaza()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the Flight arrival date field",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.clickOnTheFlightArrivalDateField()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the 10th of the month of March",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.clickOnTheThOfTheMonthOfMarch(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the Done button",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.clickOnTheDoneButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the Flight arrival time field",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.clickOnTheFlightArrivalTimeField()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "In the drop-down field, click 00:00",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.inTheDropDownFieldClick(int,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the Search button",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.clickOnTheSearchButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the message Sorry, we\u0027re unable to find any Ground Transportation for your search. Please try a different search",
  "keyword": "Then "
});
formatter.match({
  "location": "ReservationsDefinitions.iShouldSeeTheMessageSorryWeReUnableToFindAnyGroundTransportationForYourSearchPleaseTryADifferentSearch()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Make package reservation by selecting Hotels and Flights",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@EighthStageManual"
    },
    {
      "name": "@Manual"
    },
    {
      "name": "@manual-result:passed"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Enter the page https://www.travelocity.com",
  "keyword": "Given "
});
formatter.match({
  "location": "ReservationsDefinitions.enterThePageHttpsWwwTravelocityCom()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the Packages option",
  "keyword": "When "
});
formatter.match({
  "location": "ReservationsDefinitions.clickOnThePackagesOption()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the Hotels option and on the Flights option. Verify that only those 2 options remain selected or colored blue.",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.clickOnTheHotelsOptionAndOnTheFlightsOptionVerifyThatOnlyThoseOptionsRemainSelectedOrColoredBlue(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the Leaving from field",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.clickOnTheLeavingFromField()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Write Medellín",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.writeMedellín()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the Medellín option (MDE - Jose Maria Cordova Intl)",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.clickOnTheMedellínOptionMDEJoseMariaCordovaIntl()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the Going to field",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.clickOnTheGoingToField()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Write Bogotá",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.writeBogotá()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the Bogota option (BOG - El Dorado Intl.)",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.clickOnTheBogotaOptionBOGElDoradoIntl()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the Departing field",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.clickOnTheDepartingField()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the 7th of the month of March",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.clickOnTheThOfTheMonthOfMarch(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the Done button",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.clickOnTheDoneButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the Returning field",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.clickOnTheReturningField()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the 10th of the month of March",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.clickOnTheThOfTheMonthOfMarch(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the Done button",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.clickOnTheDoneButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the Search button",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.clickOnTheSearchButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see a list of names for each hotel",
  "keyword": "Then "
});
formatter.match({
  "location": "ReservationsDefinitions.iShouldSeeAListOfNamesForEachHotel()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see a description list of each hotel",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.iShouldSeeADescriptionListOfEachHotel()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see a list of the cost of each hotel",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.iShouldSeeAListOfTheCostOfEachHotel()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see a list of images for each hotel",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.iShouldSeeAListOfImagesForEachHotel()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "You should see rating list of each hotel",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.youShouldSeeRatingListOfEachHotel()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Make package reservation by selecting Hotels and Cars",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@NinethStageManual"
    },
    {
      "name": "@Manual"
    },
    {
      "name": "@manual-result:passed"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Enter the page https://www.travelocity.com",
  "keyword": "Given "
});
formatter.match({
  "location": "ReservationsDefinitions.enterThePageHttpsWwwTravelocityCom()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the Packages option",
  "keyword": "When "
});
formatter.match({
  "location": "ReservationsDefinitions.clickOnThePackagesOption()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the Hotels option and on the Cars option. Verify that only those 2 options remain selected or colored blue",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.clickOnTheHotelsOptionAndOnTheCarsOptionVerifyThatOnlyThoseOptionsRemainSelectedOrColoredBlue(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the Going to field",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.clickOnTheGoingToField()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Write Bogotá",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.writeBogotá()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the Bogota option (BOG - El Dorado Intl.)",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.clickOnTheBogotaOptionBOGElDoradoIntl()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the Check-in field",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.clickOnTheCheckInField()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the 7th of the month of March",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.clickOnTheThOfTheMonthOfMarch(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the Done button",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.clickOnTheDoneButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the Check-out field",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.clickOnTheCheckOutField()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the 10th of the month of March",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.clickOnTheThOfTheMonthOfMarch(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the Done button",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.clickOnTheDoneButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the Search button",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.clickOnTheSearchButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see a list of names for each hotel",
  "keyword": "Then "
});
formatter.match({
  "location": "ReservationsDefinitions.iShouldSeeAListOfNamesForEachHotel()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see a description list of each hotel",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.iShouldSeeADescriptionListOfEachHotel()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see a list of the cost of each hotel",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.iShouldSeeAListOfTheCostOfEachHotel()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see a list of images for each hotel",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.iShouldSeeAListOfImagesForEachHotel()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see rating list of each hotel",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.iShouldSeeRatingListOfEachHotel()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Make package reservation by selecting Flights and Cars",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@TenthStageManual"
    },
    {
      "name": "@Manual"
    },
    {
      "name": "@manual-result:passed"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Enter the page https://www.travelocity.com",
  "keyword": "Given "
});
formatter.match({
  "location": "ReservationsDefinitions.enterThePageHttpsWwwTravelocityCom()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the Packages option",
  "keyword": "When "
});
formatter.match({
  "location": "ReservationsDefinitions.clickOnThePackagesOption()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the Flights option and on the Cars option. Verify that only those 2 options remain selected or colored blue",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.clickOnTheFlightsOptionAndOnTheCarsOptionVerifyThatOnlyThoseOptionsRemainSelectedOrColoredBlue(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the Leaving from field",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.clickOnTheLeavingFromField()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Write Medellín",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.writeMedellín()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the Medellín option (MDE - Jose Maria Cordova Intl)",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.clickOnTheMedellínOptionMDEJoseMariaCordovaIntl()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the Going to field",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.clickOnTheGoingToField()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Write Bogotá",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.writeBogotá()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the Bogota option (BOG - El Dorado Intl.)",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.clickOnTheBogotaOptionBOGElDoradoIntl()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the Departing field",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.clickOnTheDepartingField()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the 7th of the month of March",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.clickOnTheThOfTheMonthOfMarch(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the Done button",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.clickOnTheDoneButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the Returning field",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.clickOnTheReturningField()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the 10th of the month of March",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.clickOnTheThOfTheMonthOfMarch(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the Done button",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.clickOnTheDoneButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the Search button",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.clickOnTheSearchButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see a list of flight schedules taking into account the selected origin and destination",
  "keyword": "Then "
});
formatter.match({
  "location": "ReservationsDefinitions.iShouldSeeAListOfFlightSchedulesTakingIntoAccountTheSelectedOriginAndDestination()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see a list of flight costs taking into account the selected origin and destination",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.iShouldSeeAListOfFlightCostsTakingIntoAccountTheSelectedOriginAndDestination()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see a list of travel time taking into account the origin and destination",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.iShouldSeeAListOfTravelTimeTakingIntoAccountTheOriginAndDestination()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see a list of available airlines taking into account the origin and destination",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.iShouldSeeAListOfAvailableAirlinesTakingIntoAccountTheOriginAndDestination()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Consult things to do successfully",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@EleventhStageManual"
    },
    {
      "name": "@Manual"
    },
    {
      "name": "@manual-result:passed"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Enter the page https://www.travelocity.com",
  "keyword": "Given "
});
formatter.match({
  "location": "ReservationsDefinitions.enterThePageHttpsWwwTravelocityCom()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the Things to do option",
  "keyword": "When "
});
formatter.match({
  "location": "ReservationsDefinitions.clickOnTheThingsToDoOption()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the field Where are you going?",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.clickOnTheFieldWhereAreYouGoing()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Write Medellín",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.writeMedellín()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the Medellin option",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.clickOnTheMedellinOption()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the From field",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.clickOnTheFromField()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the 7th of the month of March",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.clickOnTheThOfTheMonthOfMarch(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the Done button",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.clickOnTheDoneButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the To field",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.clickOnTheToField()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the 10th of the month of March",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.clickOnTheThOfTheMonthOfMarch(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the Done button",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.clickOnTheDoneButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the Search button",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.clickOnTheSearchButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see a list of names for each type of activity",
  "keyword": "Then "
});
formatter.match({
  "location": "ReservationsDefinitions.iShouldSeeAListOfNamesForEachTypeOfActivity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see a description list of each type of activity",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.iShouldSeeADescriptionListOfEachTypeOfActivity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see a list of the cost of each type of activity",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.iShouldSeeAListOfTheCostOfEachTypeOfActivity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see a list of the time of each type of activity",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.iShouldSeeAListOfTheTimeOfEachTypeOfActivity()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Consult things to do successfully",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@TwelfthStageManual"
    },
    {
      "name": "@Manual"
    },
    {
      "name": "@manual-result:passed"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Enter the page https://www.travelocity.com",
  "keyword": "Given "
});
formatter.match({
  "location": "ReservationsDefinitions.enterThePageHttpsWwwTravelocityCom()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the Things to do option",
  "keyword": "When "
});
formatter.match({
  "location": "ReservationsDefinitions.clickOnTheThingsToDoOption()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the Search button",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.clickOnTheSearchButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "You should see Please select a destination below the Things to do in field",
  "keyword": "Then "
});
formatter.match({
  "location": "ReservationsDefinitions.youShouldSeePleaseSelectADestinationBelowTheThingsToDoInField()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Consult cruises without specifying search criteria",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@ThirteenthStageManual"
    },
    {
      "name": "@Manual"
    },
    {
      "name": "@manual-result:passed"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Enter the page https://www.travelocity.com",
  "keyword": "Given "
});
formatter.match({
  "location": "ReservationsDefinitions.enterThePageHttpsWwwTravelocityCom()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the Cruises option",
  "keyword": "When "
});
formatter.match({
  "location": "ReservationsDefinitions.clickOnTheCruisesOption()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the Search button",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.clickOnTheSearchButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see a list of names for each cruise",
  "keyword": "Then "
});
formatter.match({
  "location": "ReservationsDefinitions.iShouldSeeAListOfNamesForEachCruise()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see a list of where the cruise departs from",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.iShouldSeeAListOfWhereTheCruiseDepartsFrom()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see a list of the cost of each cruise",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.iShouldSeeAListOfTheCostOfEachCruise()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see a list of sailing dates for each cruise",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.iShouldSeeAListOfSailingDatesForEachCruise()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see an image list of each cruise",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.iShouldSeeAnImageListOfEachCruise()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Consult cruises specifying search criteria and dates with short time",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@FourteenthStageManual"
    },
    {
      "name": "@Manual"
    },
    {
      "name": "@manual-result:passed"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Enter the page https://www.travelocity.com",
  "keyword": "Given "
});
formatter.match({
  "location": "ReservationsDefinitions.enterThePageHttpsWwwTravelocityCom()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the Cruises option",
  "keyword": "When "
});
formatter.match({
  "location": "ReservationsDefinitions.clickOnTheCruisesOption()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the Going to drop-down field",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.clickOnTheGoingToDropDownField()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "In the list, click on the Mexico option",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.inTheListClickOnTheMexicoOption()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the Travelers in the cabin field",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.clickOnTheTravelersInTheCabinField()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Choose 1 adult.",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.chooseAdult(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Choose 1 child.",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.chooseChild(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the Child 1 age field",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.clickOnTheChildAgeField(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on option 10",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.clickOnOption(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the Done button",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.clickOnTheDoneButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the field Departs as early as",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.clickOnTheFieldDepartsAsEarlyAs()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the 7th of the month of March",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.clickOnTheThOfTheMonthOfMarch(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the Done button",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.clickOnTheDoneButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the field Departs as late as",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.clickOnTheFieldDepartsAsLateAs()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the 10th of the month of March",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.clickOnTheThOfTheMonthOfMarch(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the Done button",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.clickOnTheDoneButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the Search button",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.clickOnTheSearchButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the message We couldn\u0027t find any cruises that match your departure dates. View cruises for all dates below",
  "keyword": "Then "
});
formatter.match({
  "location": "ReservationsDefinitions.iShouldSeeTheMessageWeCouldnTFindAnyCruisesThatMatchYourDepartureDatesViewCruisesForAllDatesBelow()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see a list of names for each cruise",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.iShouldSeeAListOfNamesForEachCruise()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see a list of where the cruise departs from",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.iShouldSeeAListOfWhereTheCruiseDepartsFrom()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see a list of the cost of each cruise",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.iShouldSeeAListOfTheCostOfEachCruise()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see a list of sailing dates for each cruise",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.iShouldSeeAListOfSailingDatesForEachCruise()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see an image list of each cruise",
  "keyword": "And "
});
formatter.match({
  "location": "ReservationsDefinitions.iShouldSeeAnImageListOfEachCruise()"
});
formatter.result({
  "status": "passed"
});
});
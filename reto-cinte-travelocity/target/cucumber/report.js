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
  "name": "I should see the error message Please select an origin in red below the Leaving from text field.",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I should see a red Please select a destination error message below the Going to text field",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});
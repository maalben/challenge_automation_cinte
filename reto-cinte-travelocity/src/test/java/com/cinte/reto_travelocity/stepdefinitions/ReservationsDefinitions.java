package com.cinte.reto_travelocity.stepdefinitions;

import java.util.List;

import com.cinte.reto_travelocity.exceptions.AssertionsHotelsReservation;
import com.cinte.reto_travelocity.questions.*;

import static com.cinte.reto_travelocity.ui.ReservationsTravelocityPage.LABEL_TEXT_MESSAGE;
import static net.serenitybdd.screenplay.GivenWhenThen.seeThat;
import static org.hamcrest.core.IsEqual.equalTo;

import com.cinte.reto_travelocity.tasks.*;
import net.serenitybdd.screenplay.questions.Text;
import org.openqa.selenium.WebDriver;

import com.cinte.reto_travelocity.models.HotelReservationModels;


import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import net.serenitybdd.screenplay.Actor;
import net.serenitybdd.screenplay.abilities.BrowseTheWeb;
import net.thucydides.core.annotations.Managed;

public class ReservationsDefinitions {

	@Managed(driver = "chrome")
	private WebDriver hisBrowser;
	private Actor user = Actor.named("user");

	@Before
	public void InitialConfiguration() {
		user.can(BrowseTheWeb.with(hisBrowser));
	}

	@Given("^I wants to access platform the travelocity$")
	public void iWantsToAccessPlatformTheTravelocity(){
		user.wasAbleTo(Enter.toTravelocity());
	}

	@When("^I make the hotel reservation on the page$")
	public void iMakeTheHotelReservationOnThePage(List<HotelReservationModels> data){
		user.attemptsTo(CompleteDataReservationHotel.inTheForm(data));
	}

	@When("^I fill in the data to download the app$")
	public void iFillInTheDataToDownloadTheApp(List<HotelReservationModels> data){
		user.attemptsTo(CompleteDataForDownload.app(data));
	}

	@Then("^I verify that the hotel exists \"([^\"]*)\"$")
	public void iVerifyThatTheHotelExists(String hotelName) {
		user.should(seeThat(TheListHotels.appear(hotelName), equalTo(true))
			 .orComplainWith(AssertionsHotelsReservation.class, AssertionsHotelsReservation.NO_HOTEL_FOUND));
	}

	@Then("^I verify that the hotel no exists \"([^\"]*)\"$")
	public void iVerifyThatTheHotelNoExists(String hotelName) {
		user.should(seeThat(TheListHotels.appear(hotelName), equalTo(false))
				.orComplainWith(AssertionsHotelsReservation.class, AssertionsHotelsReservation.HOTEL_FOUND));
	}

	@Then("^I verify that the message error \"([^\"]*)\" is expected$")
	public void iVerifyThatTheMessageErrorIsExpected(String messageError) {
		user.should(seeThat(TheMessage.isExpected(messageError))
				.orComplainWith(AssertionsHotelsReservation.class, AssertionsHotelsReservation.NO_HOTEL_FOUND));
	}

	@When("^I make the hotel reservation on the page without specify place$")
	public void iMakeTheHotelReservationOnThePageWithoutSpecifyPlace(List<HotelReservationModels> data){
		user.attemptsTo(CompleteDataReservationHotelWithoutToSpecifyPlace.inTheForm(data));
	}

	@Then("^I verify that the message error expected in the text place is \"([^\"]*)\"$")
	public void iVerifyThatTheMessageErrorExpectedInTheTextPlaceIs(String messageError) {
		user.should(seeThat(TheMessageError.isExpected(messageError))
				.orComplainWith(AssertionsHotelsReservation.class, AssertionsHotelsReservation.MESSAGE_ERROR_WITHOUT_SPECIFY_PLACE_NOT_EXPECTED));
	}

	@Then("^I verify that the message \"([^\"]*)\" appear$")
	public void iVerifyThatTheMessageAppear(String messageExpected) {
		user.should(seeThat(TheMessageSuccess.isExpected(messageExpected))
				.orComplainWith(AssertionsHotelsReservation.class, AssertionsHotelsReservation.TEXT_MESSAGE_IS_NOT_EXPECTED));
	}

	@Then("^I verify that the text \"([^\"]*)\" is as expected$")
	public void iVerifyThatTheTextIsAsExpected(String textMessage) {
		user.should(seeThat(TheErrorTextMessage.isExpected(textMessage))
				.orComplainWith(AssertionsHotelsReservation.class, AssertionsHotelsReservation.TEXT_MESSAGE_ALREADY_USE_PHONE_NUMBER_IS_NOT_EXPECTED));
	}

	@When("^I press button to get the app$")
	public void iPressButtonToGetTheApp(){
		user.attemptsTo(PressButton.getApp());
	}

	@Then("^I should see the message \"([^\"]*)\"$")
	public void iShouldSeeTheMessage(String message) {
		user.should(seeThat(TheErrorTextMessageWithoutSpecifyPhoneNumber.isExpected(message))
				.orComplainWith(AssertionsHotelsReservation.class, AssertionsHotelsReservation.TEXT_MESSAGE_WITHOUT_SPECIFY_PHONE_NUMBER_IS_NOT_EXPECTED));
	}

	@Given("^Enter the page https://www\\.travelocity\\.com$")
	public void enterThePageHttpsWwwTravelocityCom() {
	}

	@When("^Click on the Flights option$")
	public void clickOnTheFlightsOption() {
	}

	@When("^Click on Roundtrip$")
	public void clickOnRoundtrip() {
	}

	@When("^Click on the Leaving from field$")
	public void clickOnTheLeavingFromField() {
	}

	@When("^Write Medellín$")
	public void writeMedellín() {
	}

	@When("^Click on the Medellín option \\(MDE - Jose Maria Cordova Intl\\)$")
	public void clickOnTheMedellínOptionMDEJoseMariaCordovaIntl() {
	}

	@When("^Click on the Going to field$")
	public void clickOnTheGoingToField() {
	}

	@When("^Write Bogotá$")
	public void writeBogotá() {
	}

	@When("^Click on the Bogota option \\(BOG - El Dorado Intl\\.\\)$")
	public void clickOnTheBogotaOptionBOGElDoradoIntl() {
	}

	@When("^Click on the Departing field$")
	public void clickOnTheDepartingField() {
	}

	@When("^Click on the (\\d+)st of March$")
	public void clickOnTheStOfMarch(int arg1) {
	}

	@When("^Click on the Done button$")
	public void clickOnTheDoneButton() {
	}

	@When("^Click on the Returning field$")
	public void clickOnTheReturningField() {
	}

	@When("^Click on the (\\d+)th of March$")
	public void clickOnTheThOfMarch(int arg1) {
	}

	@When("^Click on the Search button$")
	public void clickOnTheSearchButton() {
	}

	@Then("^I should see a list of flight schedules taking into account the selected origin and destination$")
	public void iShouldSeeAListOfFlightSchedulesTakingIntoAccountTheSelectedOriginAndDestination() {
	}

	@Then("^I should see a list of flight costs taking into account the selected origin and destination$")
	public void iShouldSeeAListOfFlightCostsTakingIntoAccountTheSelectedOriginAndDestination() {
	}

	@Then("^I should see a list of travel time taking into account the origin and destination$")
	public void iShouldSeeAListOfTravelTimeTakingIntoAccountTheOriginAndDestination() {
	}

	@Then("^I should see a list of available airlines taking into account the origin and destination$")
	public void iShouldSeeAListOfAvailableAirlinesTakingIntoAccountTheOriginAndDestination() {
	}

	@Then("^I should see the error message Please select an origin in red below the Leaving from text field$")
	public void iShouldSeeTheErrorMessagePleaseSelectAnOriginInRedBelowTheLeavingFromTextField() {
	}

	@Then("^I should see a red Please select a destination error message below the Going to text field$")
	public void iShouldSeeARedPleaseSelectADestinationErrorMessageBelowTheGoingToTextField() {
	}

	@Then("^I should see a red Please choose a different destination from origin error message below the Going to text field$")
	public void iShouldSeeARedPleaseChooseADifferentDestinationFromOriginErrorMessageBelowTheGoingToTextField() {
	}

	@When("^Click on Multi-city$")
	public void clickOnMultiCity() {
	}

	@When("^Under Flight (\\d+), click in the Leaving from field$")
	public void underFlightClickInTheLeavingFromField(int arg1) {
	}

	@When("^Under Flight (\\d+), click the Going to field$")
	public void underFlightClickTheGoingToField(int arg1) {
	}

	@When("^Write Bogota$")
	public void writeBogota() {
	}

	@When("^Under Flight (\\d+), Click on the Departing field$")
	public void underFlightClickOnTheDepartingField(int arg1) {
	}

	@When("^Click on the (\\d+)th of the month of March$")
	public void clickOnTheThOfTheMonthOfMarch(int arg1) {
	}

	@When("^Under Flight (\\d+), click on the Going to field$")
	public void underFlightClickOnTheGoingToField(int arg1) {
	}

	@When("^Click on the Cars option$")
	public void clickOnTheCarsOption() {
	}

	@When("^Click on Rental cars$")
	public void clickOnRentalCars() {
	}

	@When("^Click on the Pick-up field$")
	public void clickOnThePickUpField() {
	}

	@When("^Write Town$")
	public void writeTown() {
	}

	@When("^Click on the El Poblado option$")
	public void clickOnTheElPobladoOption() {
	}

	@When("^Click on the Same as pick-up field$")
	public void clickOnTheSameAsPickUpField() {
	}

	@When("^Write Envigado$")
	public void writeEnvigado() {
	}

	@When("^Click on the Ayura Station option$")
	public void clickOnTheAyuraStationOption() {
	}

	@When("^Click on the Pick-up date field$")
	public void clickOnThePickUpDateField() {
	}

	@When("^Click on the Drop-off date field$")
	public void clickOnTheDropOffDateField() {
	}

	@When("^Click on the Pick-up time field$")
	public void clickOnThePickUpTimeField() {
	}

	@When("^In the drop-down list, click (\\d+):(\\d+)$")
	public void inTheDropDownListClick(int arg1, int arg2) {
	}

	@When("^Click on the Drop-off time field$")
	public void clickOnTheDropOffTimeField() {
	}

	@When("^I should see a list of the type of vehicle$")
	public void iShouldSeeAListOfTheTypeOfVehicle() {
	}

	@When("^I should see the make of the vehicle ready$")
	public void iShouldSeeTheMakeOfTheVehicleReady() {
	}

	@When("^I should see a list of the cost of the vehicle rental$")
	public void iShouldSeeAListOfTheCostOfTheVehicleRental() {
	}

	@When("^I should see button list to reserve$")
	public void iShouldSeeButtonListToReserve() {
	}

	@When("^I should see mileage list$")
	public void iShouldSeeMileageList() {
	}

	@When("^I should see cleaning list$")
	public void iShouldSeeCleaningList() {
	}

	@Then("^I should see a red Please select an origin error message below the Pick-up text field$")
	public void iShouldSeeARedPleaseSelectAnOriginErrorMessageBelowThePickUpTextField() {
	}

	@Then("^I should see a red Please select a destination error message below the Same as pick-up text field$")
	public void iShouldSeeARedPleaseSelectADestinationErrorMessageBelowTheSameAsPickUpTextField() {
	}

	@When("^Click on Airport transportation$")
	public void clickOnAirportTransportation() {
	}

	@When("^Click on the Airport field$")
	public void clickOnTheAirportField() {
	}

	@When("^Click on the Hotel name field$")
	public void clickOnTheHotelNameField() {
	}

	@When("^Click on the option Hotel Poblado Plaza$")
	public void clickOnTheOptionHotelPobladoPlaza() {
	}

	@When("^Click on the Flight arrival date field$")
	public void clickOnTheFlightArrivalDateField() {
	}

	@When("^Click on the Flight arrival time field$")
	public void clickOnTheFlightArrivalTimeField() {
	}

	@When("^In the drop-down field, click (\\d+):(\\d+)$")
	public void inTheDropDownFieldClick(int arg1, int arg2) {
	}

	@Then("^I should see the message Sorry, we're unable to find any Ground Transportation for your search\\. Please try a different search$")
	public void iShouldSeeTheMessageSorryWeReUnableToFindAnyGroundTransportationForYourSearchPleaseTryADifferentSearch() {
	}

	@When("^Click on the Packages option$")
	public void clickOnThePackagesOption() {
	}

	@When("^Click on the Hotels option and on the Flights option\\. Verify that only those (\\d+) options remain selected or colored blue\\.$")
	public void clickOnTheHotelsOptionAndOnTheFlightsOptionVerifyThatOnlyThoseOptionsRemainSelectedOrColoredBlue(int arg1) {
	}

	@Then("^I should see a list of names for each hotel$")
	public void iShouldSeeAListOfNamesForEachHotel() {
	}

	@Then("^I should see a description list of each hotel$")
	public void iShouldSeeADescriptionListOfEachHotel() {
	}

	@Then("^I should see a list of the cost of each hotel$")
	public void iShouldSeeAListOfTheCostOfEachHotel() {
	}

	@Then("^I should see a list of images for each hotel$")
	public void iShouldSeeAListOfImagesForEachHotel() {
	}

	@Then("^You should see rating list of each hotel$")
	public void youShouldSeeRatingListOfEachHotel() {
	}

	@When("^Click on the Hotels option and on the Cars option\\. Verify that only those (\\d+) options remain selected or colored blue$")
	public void clickOnTheHotelsOptionAndOnTheCarsOptionVerifyThatOnlyThoseOptionsRemainSelectedOrColoredBlue(int arg1) {
	}

	@When("^Click on the Check-in field$")
	public void clickOnTheCheckInField() {
	}

	@When("^Click on the Check-out field$")
	public void clickOnTheCheckOutField() {
	}

	@Then("^I should see rating list of each hotel$")
	public void iShouldSeeRatingListOfEachHotel() {
	}

	@When("^Click on the Flights option and on the Cars option\\. Verify that only those (\\d+) options remain selected or colored blue$")
	public void clickOnTheFlightsOptionAndOnTheCarsOptionVerifyThatOnlyThoseOptionsRemainSelectedOrColoredBlue(int arg1) {
	}

	@When("^Click on the Things to do option$")
	public void clickOnTheThingsToDoOption() {
	}

	@When("^Click on the field Where are you going\\?$")
	public void clickOnTheFieldWhereAreYouGoing() {
	}

	@When("^Click on the Medellin option$")
	public void clickOnTheMedellinOption() {
	}

	@When("^Click on the From field$")
	public void clickOnTheFromField() {
	}

	@When("^Click on the To field$")
	public void clickOnTheToField() {
	}

	@Then("^I should see a list of names for each type of activity$")
	public void iShouldSeeAListOfNamesForEachTypeOfActivity() {
	}

	@Then("^I should see a description list of each type of activity$")
	public void iShouldSeeADescriptionListOfEachTypeOfActivity() {
	}

	@Then("^I should see a list of the cost of each type of activity$")
	public void iShouldSeeAListOfTheCostOfEachTypeOfActivity() {
	}

	@Then("^I should see a list of the time of each type of activity$")
	public void iShouldSeeAListOfTheTimeOfEachTypeOfActivity() {
	}

	@Then("^You should see Please select a destination below the Things to do in field$")
	public void youShouldSeePleaseSelectADestinationBelowTheThingsToDoInField() {
	}

	@When("^Click on the Cruises option$")
	public void clickOnTheCruisesOption() {
	}

	@Then("^I should see a list of names for each cruise$")
	public void iShouldSeeAListOfNamesForEachCruise() {
	}

	@Then("^I should see a list of where the cruise departs from$")
	public void iShouldSeeAListOfWhereTheCruiseDepartsFrom() {
	}

	@Then("^I should see a list of the cost of each cruise$")
	public void iShouldSeeAListOfTheCostOfEachCruise() {
	}

	@Then("^I should see a list of sailing dates for each cruise$")
	public void iShouldSeeAListOfSailingDatesForEachCruise() {
	}

	@Then("^I should see an image list of each cruise$")
	public void iShouldSeeAnImageListOfEachCruise() {
	}

	@When("^Click on the Going to drop-down field$")
	public void clickOnTheGoingToDropDownField() {
	}

	@When("^In the list, click on the Mexico option$")
	public void inTheListClickOnTheMexicoOption() {
	}

	@When("^Click on the Travelers in the cabin field$")
	public void clickOnTheTravelersInTheCabinField() {
	}

	@When("^Choose (\\d+) adult\\.$")
	public void chooseAdult(int arg1) {
	}

	@When("^Choose (\\d+) child\\.$")
	public void chooseChild(int arg1) {
	}

	@When("^Click on the Child (\\d+) age field$")
	public void clickOnTheChildAgeField(int arg1) {
	}

	@When("^Click on option (\\d+)$")
	public void clickOnOption(int arg1) {
	}

	@When("^Click on the field Departs as early as$")
	public void clickOnTheFieldDepartsAsEarlyAs() {
	}

	@When("^Click on the field Departs as late as$")
	public void clickOnTheFieldDepartsAsLateAs() {
	}

	@Then("^I should see the message We couldn't find any cruises that match your departure dates\\. View cruises for all dates below$")
	public void iShouldSeeTheMessageWeCouldnTFindAnyCruisesThatMatchYourDepartureDatesViewCruisesForAllDatesBelow() {
	}


}

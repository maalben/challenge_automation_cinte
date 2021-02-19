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

}
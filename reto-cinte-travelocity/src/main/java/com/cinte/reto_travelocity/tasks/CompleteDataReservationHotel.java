package com.cinte.reto_travelocity.tasks;

import java.util.List;

import com.cinte.reto_travelocity.interactions.SelectAdults;
import com.cinte.reto_travelocity.interactions.Validate;
import com.cinte.reto_travelocity.models.HotelReservationModels;
import com.cinte.reto_travelocity.ui.ReservationsTravelocityPage;

import net.serenitybdd.screenplay.Actor;
import net.serenitybdd.screenplay.Task;
import net.serenitybdd.screenplay.actions.Click;
import net.serenitybdd.screenplay.actions.Enter;
import net.serenitybdd.screenplay.actions.SelectFromOptions;
import net.serenitybdd.screenplay.waits.WaitUntil;

import static com.cinte.reto_travelocity.ui.ReservationsTravelocityPage.*;
import static net.serenitybdd.screenplay.matchers.WebElementStateMatchers.*;


public class CompleteDataReservationHotel implements Task{
	private ReservationsTravelocityPage reservationsTravelocityPage;
	private  List<HotelReservationModels> data;
	
	public CompleteDataReservationHotel(List<HotelReservationModels> data) {
		this.data = data;
	}

	@Override
	public <T extends Actor> void performAs(T actor) {

		actor.attemptsTo(Click.on(BUTTON_HOTELS));
		actor.attemptsTo(Click.on(TEXT_GOING_TO));
		actor.attemptsTo(Enter.theValue(data.get(0).getDestination()).into(TEXT_DESTINATION));
		actor.attemptsTo(WaitUntil.the(FIRST_OPTION_SEARCH, isVisible()).forNoMoreThan(10).seconds());
		actor.attemptsTo(Click.on(FIRST_OPTION_SEARCH));

		actor.attemptsTo(Click.on(TEXT_DATE_CHECKIN));
		actor.attemptsTo(Validate.date(TABLE_SUBTITLE_CURRENT_MONTH, data.get(0).getInitialReservationDate()));
		actor.attemptsTo(Click.on(BUTTON_CONFIRM_DATE));

		actor.attemptsTo(Click.on(TEXT_DATE_CHECKOUT));
		actor.attemptsTo(Validate.date(TABLE_SUBTITLE_CURRENT_MONTH, data.get(0).getFinalReservationDate()));
		actor.attemptsTo(Click.on(BUTTON_CONFIRM_DATE));

		actor.attemptsTo(Click.on(TEXT_TRAVELERS));
		actor.attemptsTo(SelectAdults.quantity(LABEL_INITIAL_VALUE_ADULTS, data.get(0).getAdults(), BUTTON_MINUS_ADULT_TRAVELERS, BUTTON_PLUS_ADULT_TRAVELERS));
		actor.attemptsTo(SelectAdults.quantity(LABEL_INITIAL_VALUE_CHILDREN, data.get(0).getChildren(), BUTTON_MINUS_CHILDREN_TRAVELERS, BUTTON_PLUS_CHILDREN_TRAVELERS));

		actor.attemptsTo(Click.on(SELECT_LIST_AGE_CHILD));
		actor.attemptsTo(SelectFromOptions.byVisibleText(data.get(0).getAgeChild()).from(SELECT_LIST_AGE_CHILD));

		actor.attemptsTo(Click.on(BUTTON_CONFIRM_TRAVELERS));
		actor.attemptsTo(Click.on(BUTTON_SEARCH));
	}

	public static CompleteDataReservationHotel inTheForm(List<HotelReservationModels> data2) {
		return new CompleteDataReservationHotel(data2);
	}

		

}

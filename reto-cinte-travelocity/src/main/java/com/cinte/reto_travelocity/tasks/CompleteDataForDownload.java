package com.cinte.reto_travelocity.tasks;

import com.cinte.reto_travelocity.interactions.SelectListWithOptionItem;
import com.cinte.reto_travelocity.models.HotelReservationModels;
import com.cinte.reto_travelocity.ui.ReservationsTravelocityPage;
import com.cinte.reto_travelocity.utils.Wait;
import net.serenitybdd.screenplay.Actor;
import net.serenitybdd.screenplay.Task;
import net.serenitybdd.screenplay.actions.Click;
import net.serenitybdd.screenplay.actions.Enter;
import net.serenitybdd.screenplay.actions.Scroll;

import java.util.List;
import static com.cinte.reto_travelocity.ui.ReservationsTravelocityPage.*;


public class CompleteDataForDownload implements Task{

	private  List<HotelReservationModels> data;
	public CompleteDataForDownload(List<HotelReservationModels> data) {
		this.data = data;
	}

	@Override
	public <T extends Actor> void performAs(T actor) {
		actor.attemptsTo(Scroll.to(SELECT_COUNTRY_CODE).andAlignToTop());
		actor.attemptsTo(SelectListWithOptionItem.data(data.get(0).getCountryCode(), SELECT_COUNTRY_CODE));
		actor.attemptsTo(Enter.theValue(data.get(0).getPhoneNumber()).into(TEXT_PHONE_NUMBER));
		actor.attemptsTo(Click.on(BUTTON_SUBMIT_SEND_TEXT_MESSAGE));
	}

	public static CompleteDataForDownload app(List<HotelReservationModels> data) {
		return new CompleteDataForDownload(data);
	}
}
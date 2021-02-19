package com.cinte.reto_travelocity.tasks;

import net.serenitybdd.screenplay.Actor;
import net.serenitybdd.screenplay.Task;
import net.serenitybdd.screenplay.actions.Click;
import net.serenitybdd.screenplay.actions.Scroll;
import static com.cinte.reto_travelocity.ui.ReservationsTravelocityPage.*;

public class PressButton implements Task{

	@Override
	public <T extends Actor> void performAs(T actor) {
		actor.attemptsTo(Scroll.to(SELECT_COUNTRY_CODE).andAlignToTop());
		actor.attemptsTo(Click.on(BUTTON_SUBMIT_SEND_TEXT_MESSAGE));
	}

	public static PressButton getApp() {
		return new PressButton();
	}
}
package com.cinte.reto_travelocity.tasks;



import com.cinte.reto_travelocity.ui.ReservationsTravelocityPage;

import net.serenitybdd.screenplay.Actor;
import net.serenitybdd.screenplay.Task;
import static net.serenitybdd.screenplay.Tasks.instrumented;
import net.serenitybdd.screenplay.actions.Open;

public class Enter implements Task{
	
	private ReservationsTravelocityPage reservationsTravelocityPage;

	@Override
	public <T extends Actor> void performAs(T actor) {
		actor.attemptsTo(Open.browserOn(reservationsTravelocityPage));
	}
	
	public static Enter toTravelocity() {
		return instrumented(Enter.class);
	}

}

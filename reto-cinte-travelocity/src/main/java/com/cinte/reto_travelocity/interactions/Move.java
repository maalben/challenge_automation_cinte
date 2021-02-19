package com.cinte.reto_travelocity.interactions;

import com.cinte.reto_travelocity.ui.ReservationsTravelocityPage;
import net.serenitybdd.screenplay.Actor;
import net.serenitybdd.screenplay.Interaction;
import org.openqa.selenium.JavascriptExecutor;
import static net.serenitybdd.screenplay.Tasks.instrumented;

public class Move implements Interaction {

	private ReservationsTravelocityPage reservationsTravelocityPage;
	private String direccion;
	private int pixelesAMover;

	public Move(String direccion, int pixelesAMover) {
		this.direccion = direccion;
		this.pixelesAMover = pixelesAMover;
	}

	@Override
	public <T extends Actor> void performAs(T actor) {
		JavascriptExecutor js = (JavascriptExecutor) reservationsTravelocityPage.getDriver();
		switch(direccion) {
			case "Horizontal":
				js.executeScript("window.scrollBy("+pixelesAMover+",0)");
				break;
			case "Vertical":
				js.executeScript("window.scrollBy(0,"+pixelesAMover+")");
				break;
		}
		actor.attemptsTo(Wait.theNext(1));
	}

	public static Move page(String direccion, int pixelesAMover) {
		 return instrumented(Move.class, direccion, pixelesAMover);
	}
}

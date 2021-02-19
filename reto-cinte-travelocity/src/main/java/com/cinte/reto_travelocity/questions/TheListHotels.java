package com.cinte.reto_travelocity.questions;

import com.cinte.reto_travelocity.utils.Wait;
import net.serenitybdd.screenplay.Actor;
import net.serenitybdd.screenplay.Question;
import net.serenitybdd.screenplay.actions.Click;
import net.serenitybdd.screenplay.actions.Scroll;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import java.util.List;
import static com.cinte.reto_travelocity.ui.ReservationsTravelocityPage.BUTTON_SHOW_MORE;
import static com.cinte.reto_travelocity.ui.ReservationsTravelocityPage.LIST_AREA_RESULTS;

public class TheListHotels implements Question<Boolean>{

	private String hotelName;

	public TheListHotels(String hotelName) {
		this.hotelName = hotelName;
	}

	@Override
	public Boolean answeredBy(Actor actor) {

		boolean flag = false;

		if(LIST_AREA_RESULTS.resolveFor(actor).isPresent()){

			try {
				while (BUTTON_SHOW_MORE.resolveFor(actor).isVisible()) {
					actor.attemptsTo(Scroll.to(BUTTON_SHOW_MORE).andAlignToTop());
					actor.attemptsTo(Click.on(BUTTON_SHOW_MORE));
					actor.attemptsTo(Wait.theNext(3));
				}
			}catch (Exception e){
				e.printStackTrace();
			}

			List<WebElement> containerOptions = LIST_AREA_RESULTS.resolveFor(actor).findElements(By.xpath("//li[@class='uitk-spacing listing uitk-spacing-margin-blockstart-three horizontal']//h3[@data-stid='content-hotel-title']"));

			for(int i=0; i<containerOptions.size(); i++) {

				if(containerOptions.get(i).getText().trim().equals(this.hotelName)) {
					flag = true;
					break;
				}
			}
        }
		return flag;
	}

	public static TheListHotels appear(String hotelName) {
		return new TheListHotels(hotelName);
	}
}
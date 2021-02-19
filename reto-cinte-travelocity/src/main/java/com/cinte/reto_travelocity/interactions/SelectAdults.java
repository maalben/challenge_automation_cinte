package com.cinte.reto_travelocity.interactions;

import net.serenitybdd.screenplay.Actor;
import net.serenitybdd.screenplay.Interaction;
import net.serenitybdd.screenplay.actions.Click;
import net.serenitybdd.screenplay.targets.Target;

import static com.cinte.reto_travelocity.ui.ReservationsTravelocityPage.BUTTON_MINUS_ADULT_TRAVELERS;
import static com.cinte.reto_travelocity.ui.ReservationsTravelocityPage.BUTTON_PLUS_ADULT_TRAVELERS;

public class SelectAdults implements Interaction {

    private Target label_value;
    private String adults;
    private Target minus;
    private Target plus;


    public SelectAdults(Target label_value, String adults, Target minus, Target plus) {
        this.label_value = label_value;
        this.adults = adults;
        this.minus = minus;
        this.plus = plus;
    }

    @Override
    public <T extends Actor> void performAs(T actor) {
        int quantityCurrentLabel = Integer.parseInt(label_value.resolveFor(actor).getValue());
        int quantityAdultUser = Integer.parseInt(this.adults);
        int quantityAdultTravelers = 0;
        int i = 0;

        if(quantityAdultUser > quantityCurrentLabel){
            quantityAdultTravelers = quantityAdultUser - quantityCurrentLabel;
            while (i < quantityAdultTravelers){
                actor.attemptsTo(Click.on(plus));
                i++;
            }
        }else if(quantityAdultUser < quantityCurrentLabel){
            quantityAdultTravelers =  quantityCurrentLabel - quantityAdultUser;
            while (i < quantityAdultTravelers){
                actor.attemptsTo(Click.on(minus));
                i++;
            }
        }
    }

    public static SelectAdults quantity(Target label_value, String adults, Target minus, Target plus) {
        return new SelectAdults(label_value, adults, minus, plus);
    }
}

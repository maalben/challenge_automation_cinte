package com.cinte.reto_travelocity.questions;

import net.serenitybdd.screenplay.Actor;
import net.serenitybdd.screenplay.Question;
import net.serenitybdd.screenplay.questions.Text;
import org.assertj.core.api.SoftAssertions;
import static com.cinte.reto_travelocity.ui.ReservationsTravelocityPage.LABEL_MESSAGE_ERROR;

public class TheMessage implements Question<Boolean> {

    private SoftAssertions validate = new SoftAssertions();
    private String mensaje;

    public TheMessage(String mensaje) {
        this.mensaje = mensaje;
    }

    @Override
    public Boolean answeredBy(Actor actor) {
        boolean flag = false;
        if(LABEL_MESSAGE_ERROR.resolveFor(actor).isPresent()){
            flag = true;
            validate.assertThat(Text.of(LABEL_MESSAGE_ERROR).viewedBy(actor).asString()).isEqualTo(this.mensaje);
            validate.assertAll();
        }
        return flag;
    }

    public static TheMessage isExpected(String message) {
        return new TheMessage(message);
    }
}

package com.cinte.reto_travelocity.questions;

import net.serenitybdd.screenplay.Actor;
import net.serenitybdd.screenplay.Question;
import net.serenitybdd.screenplay.questions.Text;
import org.assertj.core.api.SoftAssertions;

import static com.cinte.reto_travelocity.ui.ReservationsTravelocityPage.LABEL_NEGATIVE_TEXT_MESSAGE;
import static com.cinte.reto_travelocity.ui.ReservationsTravelocityPage.LABEL_NEGATIVE_TEXT_MESSAGE_WITHOUT_SPECIFY_PHONE_NUMBER;

public class TheErrorTextMessageWithoutSpecifyPhoneNumber implements Question<Boolean> {

    private SoftAssertions validate = new SoftAssertions();
    private String mensaje;

    public TheErrorTextMessageWithoutSpecifyPhoneNumber(String mensaje) {
        this.mensaje = mensaje;
    }

    @Override
    public Boolean answeredBy(Actor actor) {
        boolean flag = false;
        if(LABEL_NEGATIVE_TEXT_MESSAGE_WITHOUT_SPECIFY_PHONE_NUMBER.resolveFor(actor).isPresent()){
            flag = true;
            validate.assertThat(Text.of(LABEL_NEGATIVE_TEXT_MESSAGE_WITHOUT_SPECIFY_PHONE_NUMBER).viewedBy(actor).asString()).isEqualTo(this.mensaje);
            validate.assertAll();
        }
        return flag;
    }

    public static TheErrorTextMessageWithoutSpecifyPhoneNumber isExpected(String message) {
        return new TheErrorTextMessageWithoutSpecifyPhoneNumber(message);
    }
}

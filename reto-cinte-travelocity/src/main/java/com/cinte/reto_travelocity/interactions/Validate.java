package com.cinte.reto_travelocity.interactions;

import com.cinte.reto_travelocity.utils.Converter;
import net.serenitybdd.screenplay.Actor;
import net.serenitybdd.screenplay.Interaction;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import net.serenitybdd.screenplay.actions.Click;
import net.serenitybdd.screenplay.targets.Target;
import java.util.Calendar;
import java.util.GregorianCalendar;
import java.util.logging.Level;
import java.util.logging.Logger;
import static com.cinte.reto_travelocity.ui.ReservationsTravelocityPage.*;

public class Validate implements Interaction {

    private Target tableSubtitleCurrentMonth;
    private String dateUser;

    public Validate(Target tableSubtitleCurrentMonth, String dateUser) {
        this.tableSubtitleCurrentMonth = tableSubtitleCurrentMonth;
        this.dateUser = dateUser;
    }

    @Override
    public <T extends Actor> void performAs(T actor) {

        Logger logger = Logger.getLogger(Validate.class.getName());
        SimpleDateFormat sdformat = new SimpleDateFormat("yyyy-MM-dd");
        Calendar c = new GregorianCalendar();
        String dateMonthCurrent = tableSubtitleCurrentMonth.resolveFor(actor).getTextContent();
        String[] parts = dateMonthCurrent.split(" ");
        int monthStringTable = Converter.monthStringToNumber(parts[0]);
        int yearTable = Integer.parseInt(parts[1]);

        String dayCurrentSystem = Integer.toString(c.get(Calendar.DATE));
        String monthCurrentSystem = Integer.toString(c.get(Calendar.MONTH)+1);
        String yearCurrentSystem = Integer.toString(c.get(Calendar.YEAR));

        try {
            Date userDate = sdformat.parse(this.dateUser);
            Date systemDate = sdformat.parse(yearCurrentSystem+"-"+monthCurrentSystem+"-"+dayCurrentSystem);
            String[] splitDateUser = this.dateUser.split("-");
            int yearDateUser = Integer.parseInt(splitDateUser[0]);
            int monthDateUser = Integer.parseInt(splitDateUser[1]);
            int dayDateUser = Integer.parseInt(splitDateUser[2]);
            int quantityClick = 0;
            int quantityClickYear = 0;
            int i = 0;
            int j = 0;

            if(userDate.compareTo(systemDate) > 0) {
                //Fecha usuario es mayor a la fecha de la tabla"

                if(yearDateUser > yearTable){
                    quantityClickYear = (yearDateUser - yearTable) * 12;
                    j = 0;
                    while(j<quantityClickYear){
                        actor.attemptsTo(Click.on(BUTTON_NEXT_MONTH));
                        j++;
                    }
                }

                if(monthDateUser > monthStringTable) {
                    quantityClick = monthDateUser - monthStringTable;
                    i = 0;
                    while (i < quantityClick) {
                        actor.attemptsTo(Click.on(BUTTON_NEXT_MONTH));
                        i++;
                    }
                }else if(monthDateUser < monthStringTable){
                    quantityClick = monthStringTable - monthDateUser;
                    i = 0;
                    while (i < quantityClick) {
                        actor.attemptsTo(Click.on(BUTTON_PREVIOUS_MONTH));
                        i++;
                    }
                }
                actor.attemptsTo(Click.on(BUTTON_INITIAL_DAY.of(String.valueOf(dayDateUser))));

            } else if(userDate.compareTo(systemDate) < 0) {
                //Mes fecha del usuario es menor a la tabla"

                    quantityClick = monthStringTable - monthDateUser;
                    i = 0;
                    while(i<quantityClick){
                        actor.attemptsTo(Click.on(BUTTON_PREVIOUS_MONTH));
                        i++;
                    }

            } else if(userDate.compareTo(systemDate) == 0) {
                logger.log(Level.WARNING, "Fechas son iguales.");
            }
        } catch (ParseException e) {
            logger.log(Level.WARNING, "Error entre las fechas");
        }
    }

    public static Validate date(Target tableSubtitleCurrentMonth, String dateUser) {
        return new Validate(tableSubtitleCurrentMonth, dateUser);
    }
}

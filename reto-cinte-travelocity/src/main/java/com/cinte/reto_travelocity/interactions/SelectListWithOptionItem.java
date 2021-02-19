package com.cinte.reto_travelocity.interactions;

import net.serenitybdd.screenplay.Actor;
import net.serenitybdd.screenplay.Interaction;
import net.serenitybdd.screenplay.targets.Target;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import java.util.List;

public class SelectListWithOptionItem implements Interaction {

    private String valueText;
    Target list;

    public SelectListWithOptionItem(String valueText, Target list) {
        this.valueText = valueText;
        this.list = list;
    }

    @Override
    public <T extends Actor> void performAs(T actor) {
        List<WebElement> contenedorTipoDocumento = list.resolveFor(actor).findElements(By.tagName("option"));
        for(int i=0; i<contenedorTipoDocumento.size(); i++) {
            if(contenedorTipoDocumento.get(i).getText().trim().equals(this.valueText)) {
                contenedorTipoDocumento.get(i).click();
                break;
            }
        }
    }

    public static SelectListWithOptionItem data(String valueText, Target list) {
        return new SelectListWithOptionItem(valueText, list);
    }
}

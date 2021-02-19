package com.cinte.reto_travelocity.ui;

import org.openqa.selenium.By;

import net.serenitybdd.core.pages.PageObject;
import net.serenitybdd.screenplay.targets.Target;
import net.thucydides.core.annotations.DefaultUrl;

@DefaultUrl("https://www.travelocity.com/")
public class ReservationsTravelocityPage extends PageObject{

    public static final Target BUTTON_HOTELS = Target.the("Button hotels")
            .located(By.xpath("//a[@aria-controls='wizard-hotel-pwa-v2']"));

    public static final Target TEXT_GOING_TO = Target.the("Text going to")
            .located(By.xpath("//button[@data-stid='location-field-destination-menu-trigger']"));

    public static final Target TEXT_DESTINATION = Target.the("Text destination")
            .located(By.id("location-field-destination"));

    public static final Target FIRST_OPTION_SEARCH = Target.the("First option search")
            .located(By.xpath("//ul[@data-stid='location-field-destination-results']//li[1]//button"));

    public static final Target TEXT_DATE_CHECKIN = Target.the("Text date check in")
            .located(By.id("d1-btn"));

    public static final Target TABLE_SUBTITLE_CURRENT_MONTH = Target.the("Table subtitle current month")
            .located(By.xpath("//div[@class='uitk-calendar']//div[@class='uitk-new-date-picker-month'][1]//h2"));

    public static final Target BUTTON_PREVIOUS_MONTH = Target.the("Button previous month")
            .located(By.xpath("//button[@data-stid='date-picker-paging'][1]"));

    public static final Target BUTTON_NEXT_MONTH = Target.the("Button next month")
            .located(By.xpath("//button[@data-stid='date-picker-paging'][2]"));

    public static final Target BUTTON_INITIAL_DAY = Target.the("Button initial day")
            .locatedBy("//div[@class='uitk-calendar']//div[@class='uitk-new-date-picker-month'][1]//button[@data-day='{0}']");



    public static final Target BUTTON_CONFIRM_DATE = Target.the("Button confirm date")
            .located(By.xpath("//button[@data-stid='apply-date-picker']"));

    public static final Target TEXT_DATE_CHECKOUT = Target.the("Text date check out")
            .located(By.id("d2-btn"));

    public static final Target TEXT_TRAVELERS = Target.the("Text traveler")
            .located(By.xpath("//button[@data-testid='travelers-field-trigger']"));

    public static final Target LABEL_INITIAL_VALUE_ADULTS = Target.the("Label initial value adults")
            .located(By.id("adult-input-0"));

    public static final Target BUTTON_MINUS_ADULT_TRAVELERS = Target.the("Button minus adult travelers")
            .located(By.xpath("//div[@class='uitk-flex uitk-flex-align-items-center uitk-flex-justify-content-space-between uitk-step-input adultStepInput uitk-step-input-mounted']//div[@class='uitk-flex uitk-flex-item uitk-step-input-controls']//button[1]"));

    public static final Target BUTTON_PLUS_ADULT_TRAVELERS = Target.the("Button plus adult travelers")
            .located(By.xpath("//div[@class='uitk-flex uitk-flex-align-items-center uitk-flex-justify-content-space-between uitk-step-input adultStepInput uitk-step-input-mounted']//div[@class='uitk-flex uitk-flex-item uitk-step-input-controls']//button[2]"));

    public static final Target LABEL_INITIAL_VALUE_CHILDREN = Target.the("Label initial value children")
            .located(By.id("child-input-0"));

    public static final Target BUTTON_MINUS_CHILDREN_TRAVELERS = Target.the("Button minus children travelers")
            .located(By.xpath("//div[@class='uitk-flex uitk-flex-align-items-center uitk-flex-justify-content-space-between uitk-step-input childStepInput uitk-step-input-mounted']//div[@class='uitk-flex uitk-flex-item uitk-step-input-controls']//button[1]"));

    public static final Target BUTTON_PLUS_CHILDREN_TRAVELERS = Target.the("Button plus children travelers")
            .located(By.xpath("//div[@class='uitk-flex uitk-flex-align-items-center uitk-flex-justify-content-space-between uitk-step-input childStepInput uitk-step-input-mounted']//div[@class='uitk-flex uitk-flex-item uitk-step-input-controls']//button[2]"));

    public static final Target SELECT_LIST_AGE_CHILD = Target.the("Select list age child")
            .located(By.id("child-age-input-0-0"));

    public static final Target BUTTON_CONFIRM_TRAVELERS = Target.the("Button confirm travelers")
            .located(By.xpath("//button[@data-testid='guests-done-button']"));

    public static final Target BUTTON_SEARCH = Target.the("Button search")
            .located(By.xpath("//button[@data-testid='submit-button']"));

    public static final Target LIST_AREA_RESULTS = Target.the("List area results")
            .located(By.xpath("//ol[@class='results-list no-bullet']"));

    public static final Target BUTTON_SHOW_MORE = Target.the("Button show more")
            .located(By.xpath("//button[@data-stid='show-more-results']"));

    public static final Target LABEL_MESSAGE_ERROR = Target.the("Label message error")
            .located(By.id("d2-error"));

    public static final Target LABEL_MESSAGE_ERROR_SPECIFY_PLACE = Target.the("Label message error specify place")
            .located(By.id("location-field-destination-input-error"));

    public static final Target SELECT_COUNTRY_CODE = Target.the("Select country code")
            .located(By.id("countryCode"));

    public static final Target TEXT_PHONE_NUMBER = Target.the("Text phone number")
            .located(By.id("phoneNumber"));

    public static final Target BUTTON_SUBMIT_SEND_TEXT_MESSAGE = Target.the("Button submit send text message")
            .located(By.id("submitBtn"));

    public static final Target LABEL_TEXT_MESSAGE = Target.the("Label text message")
            .located(By.xpath("//div[@class='uitk-type-300 uitk-spacing uitk-spacing-padding-blockend-three uitk-text-positive-theme']"));

    public static final Target LABEL_NEGATIVE_TEXT_MESSAGE = Target.the("Label negative text message")
            .located(By.xpath("//div[@class='uitk-type-300 uitk-spacing uitk-spacing-padding-blockend-three uitk-text-negative-theme']"));

    public static final Target LABEL_NEGATIVE_TEXT_MESSAGE_WITHOUT_SPECIFY_PHONE_NUMBER = Target.the("Label text message without specify phone number")
            .located(By.id("phoneNumber-error"));
}



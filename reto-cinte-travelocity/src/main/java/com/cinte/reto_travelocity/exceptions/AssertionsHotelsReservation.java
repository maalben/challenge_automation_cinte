package com.cinte.reto_travelocity.exceptions;

public class AssertionsHotelsReservation extends AssertionError {

    private static final long serialVersionUID = 1L;

    public static final String TEXT_MESSAGE_WITHOUT_SPECIFY_PHONE_NUMBER_IS_NOT_EXPECTED = "The text message without phone number is not expected";
    public static final String TEXT_MESSAGE_ALREADY_USE_PHONE_NUMBER_IS_NOT_EXPECTED = "The text message with already used phone number is not expected";
    public static final String TEXT_MESSAGE_IS_NOT_EXPECTED = "The text message is no expected";
    public static final String MESSAGE_ERROR_WITHOUT_SPECIFY_PLACE_NOT_EXPECTED = "The error message is not showing";
    public static final String NO_HOTEL_FOUND = "The hotel you are looking for does not appear in the list";
    public static final String HOTEL_FOUND = "The hotel you are looking for appears in the list";

    public AssertionsHotelsReservation(String message, Throwable cause) {
        super(message, cause);
    }

    public AssertionsHotelsReservation(String message) {
        super(message);
    }


}

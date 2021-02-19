package com.cinte.reto_travelocity.utils;

public class Converter {

    public static int monthStringToNumber(String month){

        int monthnumber = 0;

        switch(month){

            case "January":
                monthnumber = 1;
                break;

            case "February":
                monthnumber = 2;
                break;

            case "March":
                monthnumber = 3;
                break;

            case "April":
                monthnumber = 4;
                break;


            case "May":
                monthnumber = 5;
                break;

            case "June":
                monthnumber = 6;
                break;

            case "July":
                monthnumber = 7;
                break;

            case "August":
                monthnumber = 8;
                break;

            case "September":
                monthnumber = 9;
                break;

            case "October":
                monthnumber = 10;
                break;

            case "November":
                monthnumber = 11;
                break;

            case "December":
                monthnumber = 12;
                break;

            default:
                monthnumber = 0;
        }

        return monthnumber;
    }

}

package com.cinte.reto_travelocity.runners;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import net.serenitybdd.cucumber.CucumberWithSerenity;

@RunWith(CucumberWithSerenity.class)
@CucumberOptions(features="src/test/resources/features/reservations.feature",
				 glue="com.cinte.reto_travelocity.stepdefinitions",
				 plugin = {"pretty", "html:target/cucumber"},
				 strict = false,
			 	 monochrome = true,
				 snippets=SnippetType.CAMELCASE)
public class ReservationsRunner {

}


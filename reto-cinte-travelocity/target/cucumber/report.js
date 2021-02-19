$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/reservations.feature");
formatter.feature({
  "name": "As a user I want to make bookings in travelocity",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.scenario({
  "name": "Successful hotel booking in travelocity",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@BookingsHotelSuccessful"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I wants to access platform the travelocity",
  "keyword": "Given "
});
formatter.match({
  "location": "ReservationsDefinitions.iWantsToAccessPlatformTheTravelocity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make the hotel reservation on the page",
  "rows": [
    {
      "cells": [
        "destination",
        "initialReservationDate",
        "finalReservationDate",
        "adults",
        "children",
        "ageChild"
      ]
    },
    {
      "cells": [
        "Poblado medellín",
        "2021-02-20",
        "2021-02-25",
        "5",
        "1",
        "5"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "ReservationsDefinitions.iMakeTheHotelReservationOnThePage(HotelReservationModels\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify that the hotel exists \"Apartamento Calle 8\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ReservationsDefinitions.iVerifyThatTheHotelExists(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search hotel booking in travelocity not exists",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@BookingsHotelNoExists"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I wants to access platform the travelocity",
  "keyword": "Given "
});
formatter.match({
  "location": "ReservationsDefinitions.iWantsToAccessPlatformTheTravelocity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make the hotel reservation on the page",
  "rows": [
    {
      "cells": [
        "destination",
        "initialReservationDate",
        "finalReservationDate",
        "adults",
        "children",
        "ageChild"
      ]
    },
    {
      "cells": [
        "Poblado medellín",
        "2021-02-25",
        "2021-02-28",
        "1",
        "1",
        "3"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "ReservationsDefinitions.iMakeTheHotelReservationOnThePage(HotelReservationModels\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify that the hotel no exists \"Apartamento Calle 9\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ReservationsDefinitions.iVerifyThatTheHotelNoExists(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Reservation date hotel with more 28 days",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@BookingsHotelWithReservationDateMore28days"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I wants to access platform the travelocity",
  "keyword": "Given "
});
formatter.match({
  "location": "ReservationsDefinitions.iWantsToAccessPlatformTheTravelocity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make the hotel reservation on the page",
  "rows": [
    {
      "cells": [
        "destination",
        "initialReservationDate",
        "finalReservationDate",
        "adults",
        "children",
        "ageChild"
      ]
    },
    {
      "cells": [
        "Poblado medellín",
        "2021-03-01",
        "2021-03-30",
        "1",
        "1",
        "3"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "ReservationsDefinitions.iMakeTheHotelReservationOnThePage(HotelReservationModels\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify that the message error \"Dates must be no more than 28 days apart\" is expected",
  "keyword": "Then "
});
formatter.match({
  "location": "ReservationsDefinitions.iVerifyThatTheMessageErrorIsExpected(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Reservation hotel without specify place",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@BookingsHotelWithoutToSpecifyPlace"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I wants to access platform the travelocity",
  "keyword": "Given "
});
formatter.match({
  "location": "ReservationsDefinitions.iWantsToAccessPlatformTheTravelocity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make the hotel reservation on the page without specify place",
  "rows": [
    {
      "cells": [
        "initialReservationDate",
        "finalReservationDate",
        "adults",
        "children",
        "ageChild"
      ]
    },
    {
      "cells": [
        "2021-03-01",
        "2021-03-30",
        "1",
        "1",
        "3"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "ReservationsDefinitions.iMakeTheHotelReservationOnThePageWithoutSpecifyPlace(HotelReservationModels\u003e)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d88.0.4324.182)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027MacBook-Pro-de-Mario.local\u0027, ip: \u0027fd14:b968:b7f8:4000:143a:82b3:a389:7a24%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.16\u0027, java.version: \u00271.8.0_271\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 88.0.4324.182, chrome: {chromedriverVersion: 87.0.4280.20 (c99e81631faa0..., userDataDir: /var/folders/5m/6r2ptpzd795...}, goog:chromeOptions: {debuggerAddress: localhost:52095}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: b5ddf3104c8d3477c0d86590d32227de\n*** Element info: {Using\u003dxpath, value\u003d//a[@aria-controls\u003d\u0027wizard-hotel-pwa-v2\u0027]}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat net.thucydides.core.webdriver.WebDriverFacade.findElement(WebDriverFacade.java:222)\n\tat net.serenitybdd.core.pages.WebElementResolverByLocator.resolveForDriver(WebElementResolverByLocator.java:18)\n\tat net.serenitybdd.core.pages.WebElementFacadeImpl.getElement(WebElementFacadeImpl.java:221)\n\tat net.serenitybdd.core.pages.WebElementExpectations$3.apply(WebElementExpectations.java:63)\n\tat net.serenitybdd.core.pages.WebElementExpectations$3.apply(WebElementExpectations.java:55)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\n\tat net.serenitybdd.core.pages.WebElementFacadeImpl.waitUntilEnabled(WebElementFacadeImpl.java:1146)\n\tat net.serenitybdd.core.pages.WebElementFacadeImpl.waitUntilElementAvailable(WebElementFacadeImpl.java:954)\n\tat net.serenitybdd.core.pages.WebElementFacadeImpl.click(WebElementFacadeImpl.java:1229)\n\tat net.serenitybdd.screenplay.actions.ClickOnTarget.performAs(ClickOnTarget.java:13)\n\tat net.serenitybdd.screenplay.actions.ClickOnTarget$ByteBuddy$GRHAfrEW.performAs$accessor$3aNwpYoT(Unknown Source)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat net.thucydides.core.steps.StepInterceptor.invokeMethod(StepInterceptor.java:488)\n\tat net.thucydides.core.steps.StepInterceptor.executeTestStepMethod(StepInterceptor.java:468)\n\tat net.thucydides.core.steps.StepInterceptor.runTestStep(StepInterceptor.java:441)\n\tat net.thucydides.core.steps.StepInterceptor.runOrSkipMethod(StepInterceptor.java:197)\n\tat net.thucydides.core.steps.StepInterceptor.testStepResult(StepInterceptor.java:184)\n\tat net.thucydides.core.steps.StepInterceptor.intercept(StepInterceptor.java:77)\n\tat net.serenitybdd.screenplay.actions.ClickOnTarget$ByteBuddy$GRHAfrEW.performAs(Unknown Source)\n\tat net.serenitybdd.screenplay.Actor.performTask(Actor.java:248)\n\tat net.serenitybdd.screenplay.Actor.perform(Actor.java:229)\n\tat net.serenitybdd.screenplay.Actor.attemptsTo(Actor.java:175)\n\tat com.cinte.reto_travelocity.tasks.CompleteDataReservationHotelWithoutToSpecifyPlace.performAs(CompleteDataReservationHotelWithoutToSpecifyPlace.java:27)\n\tat net.serenitybdd.screenplay.Actor.performTask(Actor.java:248)\n\tat net.serenitybdd.screenplay.Actor.perform(Actor.java:229)\n\tat net.serenitybdd.screenplay.Actor.performWithoutReporting(Actor.java:213)\n\tat net.serenitybdd.screenplay.Actor.attemptsTo(Actor.java:173)\n\tat com.cinte.reto_travelocity.stepdefinitions.ReservationsDefinitions.iMakeTheHotelReservationOnThePageWithoutSpecifyPlace(ReservationsDefinitions.java:73)\n\tat ✽.I make the hotel reservation on the page without specify place(src/test/resources/features/reservations.feature:36)\n",
  "status": "failed"
});
formatter.step({
  "name": "I verify that the message error expected in the text place is \"Please select a destination\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ReservationsDefinitions.iVerifyThatTheMessageErrorExpectedInTheTextPlaceIs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Send text message for download App success",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@SendTextMessageDownloadApp"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I wants to access platform the travelocity",
  "keyword": "Given "
});
formatter.match({
  "location": "ReservationsDefinitions.iWantsToAccessPlatformTheTravelocity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I fill in the data to download the app",
  "rows": [
    {
      "cells": [
        "countryCode",
        "phoneNumber"
      ]
    },
    {
      "cells": [
        "Colombia +57",
        "3000000003"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "ReservationsDefinitions.iFillInTheDataToDownloadTheApp(HotelReservationModels\u003e)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d88.0.4324.182)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027MacBook-Pro-de-Mario.local\u0027, ip: \u0027fd14:b968:b7f8:4000:143a:82b3:a389:7a24%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.16\u0027, java.version: \u00271.8.0_271\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 88.0.4324.182, chrome: {chromedriverVersion: 87.0.4280.20 (c99e81631faa0..., userDataDir: /var/folders/5m/6r2ptpzd795...}, goog:chromeOptions: {debuggerAddress: localhost:52232}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 53db208a55e017c088b8abee9ffaa8cb\n*** Element info: {Using\u003did, value\u003dcountryCode}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat net.thucydides.core.webdriver.WebDriverFacade.findElement(WebDriverFacade.java:222)\n\tat net.serenitybdd.core.pages.WebElementResolverByLocator.resolveForDriver(WebElementResolverByLocator.java:18)\n\tat net.serenitybdd.core.pages.WebElementFacadeImpl.getElement(WebElementFacadeImpl.java:221)\n\tat net.serenitybdd.core.pages.WebElementFacadeImpl.getWrappedElement(WebElementFacadeImpl.java:1363)\n\tat org.openqa.selenium.remote.internal.WebElementToJsonConverter.apply(WebElementToJsonConverter.java:50)\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\n\tat java.util.Spliterators$ArraySpliterator.forEachRemaining(Spliterators.java:948)\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:482)\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:472)\n\tat java.util.stream.ReduceOps$ReduceOp.evaluateSequential(ReduceOps.java:708)\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\n\tat java.util.stream.ReferencePipeline.collect(ReferencePipeline.java:499)\n\tat org.openqa.selenium.remote.RemoteWebDriver.executeScript(RemoteWebDriver.java:484)\n\tat net.thucydides.core.webdriver.javascript.JavascriptExecutorFacade.executeScript(JavascriptExecutorFacade.java:70)\n\tat net.serenitybdd.core.pages.PageObject.evaluateJavascript(PageObject.java:1197)\n\tat net.serenitybdd.screenplay.actions.ScrollTo.performScrollTo(ScrollTo.java:23)\n\tat net.serenitybdd.screenplay.actions.ScrollToTarget.performAs(ScrollToTarget.java:14)\n\tat net.serenitybdd.screenplay.Actor.performTask(Actor.java:248)\n\tat net.serenitybdd.screenplay.Actor.perform(Actor.java:229)\n\tat net.serenitybdd.screenplay.Actor.performWithoutReporting(Actor.java:213)\n\tat net.serenitybdd.screenplay.Actor.attemptsTo(Actor.java:173)\n\tat com.cinte.reto_travelocity.tasks.CompleteDataForDownload.performAs(CompleteDataForDownload.java:26)\n\tat net.serenitybdd.screenplay.Actor.performTask(Actor.java:248)\n\tat net.serenitybdd.screenplay.Actor.perform(Actor.java:229)\n\tat net.serenitybdd.screenplay.Actor.performWithoutReporting(Actor.java:213)\n\tat net.serenitybdd.screenplay.Actor.attemptsTo(Actor.java:173)\n\tat com.cinte.reto_travelocity.stepdefinitions.ReservationsDefinitions.iFillInTheDataToDownloadTheApp(ReservationsDefinitions.java:50)\n\tat ✽.I fill in the data to download the app(src/test/resources/features/reservations.feature:45)\n",
  "status": "failed"
});
formatter.step({
  "name": "I verify that the message \"We’ve sent you a text message with a link to download the app.\" appear",
  "keyword": "Then "
});
formatter.match({
  "location": "ReservationsDefinitions.iVerifyThatTheMessageAppear(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Send text message with phone number already used",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@SendTextMessageDownloadAppWithAlreadyUsedPhoneNumber"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I wants to access platform the travelocity",
  "keyword": "Given "
});
formatter.match({
  "location": "ReservationsDefinitions.iWantsToAccessPlatformTheTravelocity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I fill in the data to download the app",
  "rows": [
    {
      "cells": [
        "countryCode",
        "phoneNumber"
      ]
    },
    {
      "cells": [
        "Colombia +57",
        "3000000001"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "ReservationsDefinitions.iFillInTheDataToDownloadTheApp(HotelReservationModels\u003e)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d88.0.4324.182)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027MacBook-Pro-de-Mario.local\u0027, ip: \u0027fd14:b968:b7f8:4000:143a:82b3:a389:7a24%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.16\u0027, java.version: \u00271.8.0_271\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 88.0.4324.182, chrome: {chromedriverVersion: 87.0.4280.20 (c99e81631faa0..., userDataDir: /var/folders/5m/6r2ptpzd795...}, goog:chromeOptions: {debuggerAddress: localhost:52272}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: f1433bec41a5e751c134dc9687fba300\n*** Element info: {Using\u003did, value\u003dcountryCode}\n\tat sun.reflect.GeneratedConstructorAccessor16.newInstance(Unknown Source)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat net.thucydides.core.webdriver.WebDriverFacade.findElement(WebDriverFacade.java:222)\n\tat net.serenitybdd.core.pages.WebElementResolverByLocator.resolveForDriver(WebElementResolverByLocator.java:18)\n\tat net.serenitybdd.core.pages.WebElementFacadeImpl.getElement(WebElementFacadeImpl.java:221)\n\tat net.serenitybdd.core.pages.WebElementFacadeImpl.getWrappedElement(WebElementFacadeImpl.java:1363)\n\tat org.openqa.selenium.remote.internal.WebElementToJsonConverter.apply(WebElementToJsonConverter.java:50)\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\n\tat java.util.Spliterators$ArraySpliterator.forEachRemaining(Spliterators.java:948)\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:482)\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:472)\n\tat java.util.stream.ReduceOps$ReduceOp.evaluateSequential(ReduceOps.java:708)\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\n\tat java.util.stream.ReferencePipeline.collect(ReferencePipeline.java:499)\n\tat org.openqa.selenium.remote.RemoteWebDriver.executeScript(RemoteWebDriver.java:484)\n\tat net.thucydides.core.webdriver.javascript.JavascriptExecutorFacade.executeScript(JavascriptExecutorFacade.java:70)\n\tat net.serenitybdd.core.pages.PageObject.evaluateJavascript(PageObject.java:1197)\n\tat net.serenitybdd.screenplay.actions.ScrollTo.performScrollTo(ScrollTo.java:23)\n\tat net.serenitybdd.screenplay.actions.ScrollToTarget.performAs(ScrollToTarget.java:14)\n\tat net.serenitybdd.screenplay.Actor.performTask(Actor.java:248)\n\tat net.serenitybdd.screenplay.Actor.perform(Actor.java:229)\n\tat net.serenitybdd.screenplay.Actor.performWithoutReporting(Actor.java:213)\n\tat net.serenitybdd.screenplay.Actor.attemptsTo(Actor.java:173)\n\tat com.cinte.reto_travelocity.tasks.CompleteDataForDownload.performAs(CompleteDataForDownload.java:26)\n\tat net.serenitybdd.screenplay.Actor.performTask(Actor.java:248)\n\tat net.serenitybdd.screenplay.Actor.perform(Actor.java:229)\n\tat net.serenitybdd.screenplay.Actor.performWithoutReporting(Actor.java:213)\n\tat net.serenitybdd.screenplay.Actor.attemptsTo(Actor.java:173)\n\tat com.cinte.reto_travelocity.stepdefinitions.ReservationsDefinitions.iFillInTheDataToDownloadTheApp(ReservationsDefinitions.java:50)\n\tat ✽.I fill in the data to download the app(src/test/resources/features/reservations.feature:54)\n",
  "status": "failed"
});
formatter.step({
  "name": "I verify that the text \"We’ve sent you a text message with a link to download the app. Please check the phone number you provided, or try again by entering a different phone number.\" is as expected",
  "keyword": "Then "
});
formatter.match({
  "location": "ReservationsDefinitions.iVerifyThatTheTextIsAsExpected(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Send text message without specify phone number",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@SendTextMessageWithoutSpecifyPhoneNumber"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I wants to access platform the travelocity",
  "keyword": "Given "
});
formatter.match({
  "location": "ReservationsDefinitions.iWantsToAccessPlatformTheTravelocity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I press button to get the app",
  "keyword": "When "
});
formatter.match({
  "location": "ReservationsDefinitions.iPressButtonToGetTheApp()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d88.0.4324.182)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027MacBook-Pro-de-Mario.local\u0027, ip: \u0027fd14:b968:b7f8:4000:143a:82b3:a389:7a24%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.16\u0027, java.version: \u00271.8.0_271\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 88.0.4324.182, chrome: {chromedriverVersion: 87.0.4280.20 (c99e81631faa0..., userDataDir: /var/folders/5m/6r2ptpzd795...}, goog:chromeOptions: {debuggerAddress: localhost:52387}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: d3fcca59a6f8a68e5a01d50666b04c3c\n*** Element info: {Using\u003did, value\u003dcountryCode}\n\tat sun.reflect.GeneratedConstructorAccessor16.newInstance(Unknown Source)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat net.thucydides.core.webdriver.WebDriverFacade.findElement(WebDriverFacade.java:222)\n\tat net.serenitybdd.core.pages.WebElementResolverByLocator.resolveForDriver(WebElementResolverByLocator.java:18)\n\tat net.serenitybdd.core.pages.WebElementFacadeImpl.getElement(WebElementFacadeImpl.java:221)\n\tat net.serenitybdd.core.pages.WebElementFacadeImpl.getWrappedElement(WebElementFacadeImpl.java:1363)\n\tat org.openqa.selenium.remote.internal.WebElementToJsonConverter.apply(WebElementToJsonConverter.java:50)\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\n\tat java.util.Spliterators$ArraySpliterator.forEachRemaining(Spliterators.java:948)\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:482)\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:472)\n\tat java.util.stream.ReduceOps$ReduceOp.evaluateSequential(ReduceOps.java:708)\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\n\tat java.util.stream.ReferencePipeline.collect(ReferencePipeline.java:499)\n\tat org.openqa.selenium.remote.RemoteWebDriver.executeScript(RemoteWebDriver.java:484)\n\tat net.thucydides.core.webdriver.javascript.JavascriptExecutorFacade.executeScript(JavascriptExecutorFacade.java:70)\n\tat net.serenitybdd.core.pages.PageObject.evaluateJavascript(PageObject.java:1197)\n\tat net.serenitybdd.screenplay.actions.ScrollTo.performScrollTo(ScrollTo.java:23)\n\tat net.serenitybdd.screenplay.actions.ScrollToTarget.performAs(ScrollToTarget.java:14)\n\tat net.serenitybdd.screenplay.Actor.performTask(Actor.java:248)\n\tat net.serenitybdd.screenplay.Actor.perform(Actor.java:229)\n\tat net.serenitybdd.screenplay.Actor.performWithoutReporting(Actor.java:213)\n\tat net.serenitybdd.screenplay.Actor.attemptsTo(Actor.java:173)\n\tat com.cinte.reto_travelocity.tasks.PressButton.performAs(PressButton.java:13)\n\tat com.cinte.reto_travelocity.tasks.PressButton$ByteBuddy$CqHhVmGd.performAs$accessor$wVV2HgBp(Unknown Source)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat net.thucydides.core.steps.StepInterceptor.invokeMethod(StepInterceptor.java:488)\n\tat net.thucydides.core.steps.StepInterceptor.executeTestStepMethod(StepInterceptor.java:468)\n\tat net.thucydides.core.steps.StepInterceptor.runTestStep(StepInterceptor.java:441)\n\tat net.thucydides.core.steps.StepInterceptor.runOrSkipMethod(StepInterceptor.java:197)\n\tat net.thucydides.core.steps.StepInterceptor.testStepResult(StepInterceptor.java:184)\n\tat net.thucydides.core.steps.StepInterceptor.intercept(StepInterceptor.java:77)\n\tat com.cinte.reto_travelocity.tasks.PressButton$ByteBuddy$CqHhVmGd.performAs(Unknown Source)\n\tat net.serenitybdd.screenplay.Actor.performTask(Actor.java:248)\n\tat net.serenitybdd.screenplay.Actor.perform(Actor.java:229)\n\tat net.serenitybdd.screenplay.Actor.attemptsTo(Actor.java:175)\n\tat com.cinte.reto_travelocity.stepdefinitions.ReservationsDefinitions.iPressButtonToGetTheApp(ReservationsDefinitions.java:96)\n\tat ✽.I press button to get the app(src/test/resources/features/reservations.feature:63)\n",
  "status": "failed"
});
formatter.step({
  "name": "I should see the message \"Please enter a valid phone number.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ReservationsDefinitions.iShouldSeeTheMessage(String)"
});
formatter.result({
  "status": "skipped"
});
});
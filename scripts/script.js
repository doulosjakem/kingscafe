/*********************************************************************
***
*Original Author:  Jake Miller                                  *
*Date Created:    9/8/2022                                   *
*Version:        1.3                                        *
*Date Last Modified:     9/9/2022                         *
*Modified by:          Jake Miller                                *
*Modification log:                                  *
        
        Version 1.2 - 09/08/2022 - This script listens to the submit and clear buttons on the contact form and performs their functions.
        Version 1.3 - 09/09/2022 - Added groupsize calculation from the faqs section to fix and issue with having const $ defined both here and there. I probably coulda just changed the name of the function, but copying the code here worked just fine.
        Version 1.4 - 09/21/2022 - Merged all of the JavaScript files and jQuery files into a single file 
        Version 1.5 - 09/23/2022 - Added Slide show functionality
        Version 1.6 - 10/01/2022 - Added Accordion, progressbar, and tabs. Updated contact form to no longer use alert, but display text in a div.
        Version 1.65 - 10/05/2022 - Changed the email list to display in span instead of refresh the page.
        Version 1.7 - 10/12/2022 - Added Regular Expressions to test data, updated contact section to display errors above sections. Contact section also now uses a date object to provide a future date to expect an email response upon successfully filling out the form. Cleaned up dead code.
        

***
******************************************************************** */
"use strict";

// RegEx
const nameRegX = /^[a-zA-Z]+$/;
const emailRegX = /^[\w\.\-]+@[\w\.\-]+\.[a-zA-Z]+$/;
const phoneRegX = /^\(?\d{3}\)?[- ]?\d{3}[- ]?\d{4}$/;
const groupSizeRegX = /^\d+$/;

// DOM load
$(document).ready(() => {
  //first Slide Show
  let nextFSlide = $("#firstSlides img:first-child");

  setInterval(() => {
    //$("#firstCaption").hide(400);
    $("#firstSlide").fadeOut(800, () => {
      if (nextFSlide.next().length == 0) {
        nextFSlide = $("#firstSlides img:first-child");
      } else {
        nextFSlide = nextFSlide.next();
      }
      const nextFSlideSrc = nextFSlide.attr("src");
      const nextFCaption = nextFSlide.attr("alt");
      $("#firstSlide").attr("src", nextFSlideSrc).fadeIn(800);
      $("#firstCaption").text(nextFCaption).show(400);
    });
  }, 8000); //end first slide show

  //second Slide Show
  let nextSSlide = $("#secondSlides img:first-child");

  setInterval(() => {
    //$("#secondCaption").hide(400);
    $("#secondSlide").fadeOut(800, () => {
      if (nextSSlide.next().length == 0) {
        nextSSlide = $("#secondSlides img:first-child");
      } else {
        nextSSlide = nextSSlide.next();
      }
      const nextSSlideSrc = nextSSlide.attr("src");
      const nextSCaption = nextSSlide.attr("alt");
      $("#secondSlide").attr("src", nextSSlideSrc).fadeIn(800);
      $("#secondCaption").text(nextSCaption).show(400);
    });
  }, 8000); //end second slide show

  // Faqs accordion
  $(function () {
    $("#accordion").accordion({
      heightStyle: "content"
    });
  });

  // progressbar
  $(function () {
    console.log("I made it");
    $("#progressbar").progressbar({
      value: 20
    });
  });

  // tabs
  $(function () {
    $("#tabs").tabs();
  });
  // Runs the calc on the groupsize faqs button
  //$("#groupSizeButton").click(calc());
  $("#groupSizeButton").click(() => {
    const tables = 8;
    const seats = 4;
    const groupSize = $("#groupSize").val();
    const maxCapacity = tables * seats;

    let errMsg = "";
    if (groupSizeRegX.test(groupSize)) {
      if (groupSize > maxCapacity) {
        errMsg += "That's too many, max capacity is " + maxCapacity + ". \n";
      }
      if (groupSize <= 0) {
        errMsg += "You should bring more people than that! \n";
      }
    } else {
      errMsg += "You must enter a number! \n";
      focus("#groupSizeButton");
    }

    if (errMsg == "") {
      document.querySelector("#doesItFit").textContent =
        "Your group will fit, contact us with any questions you might have using our contact form.";
    } else {
      document.querySelector("#doesItFit").textContent = errMsg;
    }
  }); // End group size click

  // Contact
  $("#submit").click(() => {
    const firstName = $("#firstName").val();
    const lastName = $("#lastName").val();
    const inputEmail = $("#inputEmail").val();
    const textArea = $("#textArea").val();
    const unFilled = "*All fields must be filled to submit this form";
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + 7);

    let formFilled = true;

    if (
      firstName === "" ||
      !nameRegX.test(firstName) ||
      lastName === "" ||
      !nameRegX.test(lastName)
    ) {
      $("#nameErr").text("*Must enter names like John Doe");
      formFilled = false;
    } else {
      $("#nameErr").text("");
    }

    if (inputEmail === "" || !emailRegX.test(inputEmail)) {
      $("#emailErr").text("*Invalid Email address");
      formFilled = false;
    } else {
      $("#emailErr").text("");
    }

    if (textArea === "") {
      $("#textAreaErr").text("*What would you like to say?");
      formFilled = false;
    } else {
      $("#textAreaErr").text("");
    }

    if (formFilled) {
      document.querySelector("#contactSpan").textContent =
        "Your message has been sent!";
      $("#dateSpan").text(
        "You should hear back from us by " + futureDate.toDateString() + "."
      );
    } else {
      document.querySelector("#contactSpan").textContent = unFilled;
    }
  }); // End submit

  $("#clear").click(() => {
    $("#firstName").val("");
    $("#lastName").val("");
    $("#inputEmail").val("");
    $("#purposeOption").val("General Contact");
    $("#textArea").val("");
    $("#contactSpan").text("");
    $("#textAreaErr").text("");
    $("#emailErr").text("");
    $("#nameErr").text("");
    $("#dateSpan").text("");
    focus("#firstName");
  }); // End clear

  $("#submitEmail").click(() => {
    const email = $("#emailList").val();
    if (!emailRegX.test(email)) {
      $("#emailSuccess").text("Please enter a valid email");
    } else {
      $("#emailList").val("");
      $("#emailSuccess").text(
        "We have received your submission from " + email + "."
      );
    }
  });
}); // DOM ready end

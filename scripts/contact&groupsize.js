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

***
******************************************************************** */
"use strict";

const $ = (selector) => document.querySelector(selector);

/* groupSize calculation */
const calc = () => {
  const tables = 8;
  const seats = 4;
  const groupSize = parseFloat($("#groupSize").value);
  const maxCapacity = tables * seats;

  let errMsg = "";

  if (groupSize > maxCapacity) {
    errMsg += "That's too many, max capacity is " + maxCapacity + ".";
  }

  if (errMsg === "") {
    alert(
      "Your group will fit, contact us with any questions you might have using our contact form."
    );
  } else {
    alert(errMsg);
  }
};
document.addEventListener("DOMContentLoaded", () => {
  $("#groupSizeButton").addEventListener("click", calc);
});

/* Contact calculation */
document.addEventListener("DOMContentLoaded", () => {
  $("#submit").addEventListener("click", () => {
    const firstName = $("#firstName").value;
    const lastName = $("#lastName").value;
    const inputEmail = $("#inputEmail").value;
    const purposeOption = $("#purposeOption").value;
    const textArea = $("#textArea").value;

    let errorMsg = "";

    if (
      firstName === "" ||
      lastName === "" ||
      inputEmail === "" ||
      textArea === ""
    ) {
      errorMsg = "All fields must be filled to submit this form";
    }

    if (errorMsg === "") {
      alert("Your message has been sent!");
    } else {
      alert(errorMsg);
    }
  });

  $("#clear").addEventListener("click", () => {
    $("#firstName").value = "";
    $("#lastName").value = "";
    $("#inputEmail").value = "";
    $("#purposeOption").value = "General Contact";
    $("#textArea").value = "";
  });
});

"use strict";

const $ = (selector) => document.querySelector(selector);

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

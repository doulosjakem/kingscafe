"use strict";

$(document).ready(() => {
  $("#faqs h3").click((evt) => {
    const h3 = evt.currentTarget;

    $(h3).toggleClass("minus");

    if ($(h3).attr("class") !== "minus") {
      $(h3).next().hide();
    } else {
      $(h3).next().show();
    }
    evt.preventDefault();
  });
});

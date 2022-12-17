/*********************************************************************
***
*Original Author:  Jake Miller                                  *
*Date Created:    9/7/2022                                   *
*Version:        1.0                                        *
*Date Last Modified:     9/7/2022                         *
*Modified by:          Jake Miller                                *
*Modification log:                                  *
        
        Version 1.1 - 09/07/2022 - This script is to enable smooth scrolling on a wider variety of browsers than would effectively smooth scroll with CSS alone. I got the technique from https://www.w3schools.com/howto/howto_css_smooth_scroll.asp.
        Version 1.3 - 09/09/2022 - Disabled due to bug from duplicated const $ being used.

***
******************************************************************** */
"use strict";

// Source for this technique https://www.w3schools.com/howto/howto_css_smooth_scroll.asp

const $ = (selector) => document.querySelector(selector);

$(document).ready(function () {
  // Add smooth scrolling to all links
  $("a").on("click", function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top
        },
        800,
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });
});

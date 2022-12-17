/*********************************************************************
***
*Original Author:  Jake Miller                                  *
*Date Created:    8/28/2022                                   *
*Version:        1.0                                        *
*Date Last Modified:     8/28/2022                         *
*Modified by:          Jake Miller                                *
*Modification log:                                  *
        
        Version 0.9 - 08/28/2022 - This document was created to validate the email for the email list request on the footer of the main page. I learned how to accomplish this using a technique from https://www.w3resource.com/javascript/form/email-validation.php
        Version 1.0 - 08/28/2022 - Double checked documentation is up to date, use strict was implemented, and credit was given for the technique I used.

***
******************************************************************** */
"use strict";

/* Technique from https://www.w3resource.com/javascript/form/email-validation.php */
function ValidateEmail(inputText) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (inputText.value.match(mailformat)) {
    alert("Valid email address!");
    document.form1.text1.focus();
    return true;
  } else {
    alert("You have entered an invalid email address!");
    document.form1.text1.focus();
    return false;
  }
}

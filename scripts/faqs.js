/*********************************************************************
***
*Original Author:  Jake Miller                                  *
*Date Created:    9/9/2022                                   *
*Version:        0.0                                        *
*Date Last Modified:     9/9/2022                         *
*Modified by:          Jake Miller                                *
*Modification log:                                  *
        
        Version 0.0 this does not yet work.

***
******************************************************************** */
"use strict";

const toggle = (evt) => {
  const h3Elem = evt.currentTarget;
  const divElem = h3Elem.nextElementSibling;

  h3Elem.classList.toggle("close");
  divElem.classList.toggle("open");

  evt.preventDefault();
};

document.addEventListener("DOMContentLoaded", () => {
  const h3Elem = faqs.querySelectorAll("#faqs h3");

  for (let h3Elem of h3Elem) {
    h3Elem.addEventListener("click", toggle);
  }
  h3Elem[0].firstChild.focus();
});

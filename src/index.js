// @ts-check
"use-strict";

let countElement = document?.getElementById("count-element");
let count = 0;
let errorElement = document?.getElementById("error-message");
let saveElement = document?.getElementById("save-element");

errorElement.textContent = "Invalid entry, the passenger count can only be positive numbers or zero";

/**
 * Increments the passenger count by one (1) each time the increment button is clicked.
 */
function increment() {
  count += 1;
  countElement.textContent = count;
  errorElement.style.visibility = "hidden";
}

/**
 * Decrements the passenger count by one (1) each time the decrement button is clicked.
 */
function decrement() {
  if (count <= 0) {
    count = 0;
    errorElement.style.visibility = "visible";
  } else if (count > 0) {
    count -= 1;
    countElement.textContent = count;
    errorElement.style.visibility = "hidden";
  } // else, the count is valid, doNothing();
}

/**
 * Saves the passenger count recorded on the Subway Counter App.
 * 
 * Entries are logged to webpage when the save button is clicked.
 */
function save() {
  let countString = `${count} ${'~'} `;
  saveElement.textContent = `${saveElement?.textContent}${countString}`;
  count = 0;
  countElement.textContent = 0;
  errorElement.style.visibility = "hidden";
}

/**
 * Serves as a clear or reset mode. Similar to a page refresh.
 * 
 * When the clear button is clicked, the passenger count, previous entries, and any error messages are reset.
 */
function restore() {
  count = 0;
  countElement.textContent = 0;
  saveElement.textContent = " ";
  errorElement.style.visibility = "hidden";
}

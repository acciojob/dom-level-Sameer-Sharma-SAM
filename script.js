//your JS code here. If required.
const el = document.getElementById("level");

let count = 0;
let current = el;

while (current) {
  count++;
  current = current.parentElement;
}

alert("The level of the element is: " + count);

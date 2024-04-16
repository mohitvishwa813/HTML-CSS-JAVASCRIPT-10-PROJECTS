// Selecting elements
const copytext = document.querySelector("textarea[name=copytxt]");
const finaltext = document.querySelector("textarea[name=finaltext]");
const movebtn = document.querySelector("#moverbtn");
const copybtn = document.querySelector(".copybtn");
const output = document.querySelector(".output");

// Adding event listener for copy button
copybtn.addEventListener('click', () => {
  // Copy the text from copytext to clipboard
  copytext.select();
  document.execCommand('copy');
  // output.textContent = "Text copied to clipboard!";   =------>not necessary
});

// Adding event listener for move button
movebtn.addEventListener('click', () => {
  // Move the text from copytext to finaltext and clear copytext
  finaltext.value = copytext.value;
  copytext.value = "";
  // output.textContent = "Text moved!";   =------>not necessary
});

console.log("sdf")
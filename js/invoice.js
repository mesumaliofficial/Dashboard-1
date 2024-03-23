// Invoice Print
function printDiv(divName) {
  var printContents = document.getElementById(divName).innerHTML;
  var originalContents = document.body.innerHTML;

  document.body.innerHTML = printContents;

  window.print();

  document.body.innerHTML = originalContents;
}

// Function to handle click and make table cells editable
document.querySelectorAll(".editable").forEach((item) => {
  item.addEventListener("click", (event) => {
    item.setAttribute("contenteditable", "true");
    item.focus();
  });

  // Event listener to handle "Enter" key press
  item.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      item.blur(); // Remove focus
    }
  });
});
// Function to get and display the current date
const currentDateElement = document.getElementById('currentDate');
const currentDate = new Date();
const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
const formattedDate = currentDate.toLocaleDateString('en-US', options);
currentDateElement.textContent = formattedDate;
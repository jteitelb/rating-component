// document.getElementById("card-thanks").classList.remove("hidden"); // FOR DEV

function submitHandler() {
  const cardHeader = document.getElementById("card-header");
  cardHeader.innerText = "Thank you!";
  cardHeader.classList.add("center-text");
  const cardText = document.getElementById("card-text");
  cardText.innerText =
    "We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!";

  cardText.classList.add("center-text");

  document.getElementById("card-star").classList.add("hidden");
  document.getElementById("rating-options").classList.add("hidden");
  document.getElementById("button-container").classList.add("hidden");
  document.getElementById("card-thanks").classList.remove("hidden");

  const val = document.querySelector('input[name="rating"]:checked').value;
  if (val) {
    document.getElementById("rating-selected").innerText = val;
  } else {
    console.log("Error: no rating selected!");
  }
}

function radioClicked() {
  const val = document.querySelector('input[name="rating"]:checked').value;
  console.log(`radio ${val} clicked!`);
}

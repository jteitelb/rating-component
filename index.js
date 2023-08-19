document.getElementById("card-thanks").classList.remove("hidden"); // FOR DEV

function submitHandler() {
  document.getElementById("card-header").innerText = "Thank you!";
  document.getElementById("card-text").innerText =
    "We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!";
  document.getElementById("card-star").classList.add("hidden");
  document.getElementById("rating-options").classList.add("hidden");
  document.getElementById("button-container").classList.add("hidden");
  document.getElementById("card-thanks").classList.remove("hidden");

  document.getElementById("rating-selected").innerText = Math.ceil(
    Math.random() * 5
  );
}

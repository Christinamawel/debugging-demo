window.addEventListener("load", function() {
  const clickHereBtn = document.getElementById("click-here-btn");
  let heroTextDiv = document.getElementById("hero-text-div");
  let formDiv = document.getElementById("form-div");
  let TripInfoDiv = document.getElementById("Trip-info-div");
  let nameSpan = document.getElementById("name-span");
  let tripDestinationSpan = document.getElementById("trip-destination-span");
  let passportP = document.getElementById("passport-p");
  let formWarning = document.getElementById("form-warning");

  function handleClickHere() {
    heroTextDiv.classList.add("invisible");
    formDiv.classList.remove("invisible");
  }

  function handleSubmitForm (event) {
    event.preventDefault();
    const name = document.getElementById("form-name").value;
    const destination = document.getElementById("form-destination").value;
    const outOfCountry = document.getElementById("form-out-of-country").value;

    function toNextPage() {
      formDiv.classList.add("invisible");
      TripInfoDiv.classList.remove("invisible");
      nameSpan.innerText = name;
      tripDestinationSpan.innerText = destination;
    }

    if (outOfCountry === "yes") {
      console.log("yes ran")
      passportP.classList.remove("invisible")
      toNextPage()
    } else if (outOfCountry === "no") {
      console.log("no ran")
      toNextPage()
    } else {
      console.log("error ran")
      formWarning.classList.remove("invisible");
    }
  }

  formDiv.addEventListener("submit", handleSubmitForm);
  clickHereBtn.addEventListener("click", handleClickHere);
})
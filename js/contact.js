let form = document.querySelector("form");

// Adding a submit event listener to the form to validate the form
form.addEventListener("submit", (event) => {
  // Prevent refreshing the form
  event.preventDefault();
  // Validating the first name
  if (!form.elements["firstName"].value) {
    form.elements["firstName"].nextElementSibling.textContent =
      "First name is required";
  } else {
    form.elements["firstName"].nextElementSibling.textContent = "";
  }
  // Validating the last name
  if (!form.elements["lastName"].value) {
    form.elements["lastName"].nextElementSibling.textContent =
      "Last name is required";
  } else {
    form.elements["lastName"].nextElementSibling.textContent = "";
  }
  // Validating the email
  if (!form.elements["email"].value) {
    form.elements["email"].nextElementSibling.textContent = "Email is required";
  } else if (
    !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
      form.elements["email"].value
    )
  ) {
    form.elements["email"].nextElementSibling.textContent =
      "Invalid email address";
  } else {
    form.elements["email"].nextElementSibling.textContent = "";
  }
  // Validating the subject
  if (!form.elements["subject"].value) {
    form.elements["subject"].nextElementSibling.textContent =
      "First name is required";
  } else {
    form.elements["subject"].nextElementSibling.textContent = "";
  }
  // If all fields are valid, show a success message
  if (
    form.elements["subject"].nextElementSibling.textContent == "" &&
    form.elements["email"].nextElementSibling.textContent == "" &&
    form.elements["lastName"].nextElementSibling.textContent == "" &&
    form.elements["firstName"].nextElementSibling.textContent == ""
  ) {
    alert("You sent successfully sent request, please wait our answer");
    form.elements["subject"].value = "";
    form.elements["email"].value = "";
    form.elements["lastName"].value = "";
    form.elements["firstName"].value = "";
  }
});

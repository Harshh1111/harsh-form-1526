// Form Validation
document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();

  // Getting form input values
  var fullName = document.getElementById("full-name").value.trim();
  var email = document.getElementById("email").value.trim();
  var message = document.getElementById("message").value.trim();

  if (fullName === "" && email === "" && message === "") {
    alert("All fields are required!");
  } else if (fullName !== "" && email === "" && message === "") {
    alert("Please fill in your email and message.");
  } else {
    // Form is properly filled out, you can proceed with submission or other actions
    alert("Form submitted successfully!");
  }
});

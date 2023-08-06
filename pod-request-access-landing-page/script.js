function validateForm() {
  let email = document.forms["form"]["email"].value;
  let newData = email.slice(email.indexOf("@"));

  if (email.indexOf("@") !== -1 && newData.indexOf(".") !== -1) {
   document.getElementById("validationMessage")
      .classList.add("showValidation");
    return true;
  } else {
    document
      .getElementById("validationMessage")
      .classList.remove("showValidation");
    return false;
  }
}

// Step 1
const registerUser = () => {

  let errorMessages = [];

  // Step 2
  const firstName = document.getElementsByClassName('field')[0].value;
  const lastName = document.getElementsByClassName('field')[1].value;
  const email = document.getElementsByClassName('field')[2].value;
  const password = document.getElementsByClassName('field')[3].value;
  const phone = document.getElementsByClassName('field')[4].value;
  const termsConditions = document.getElementsByClassName('checkbox')[0].checked;

  // Step 4
  if(firstName.length === 0) {
    errorMessages.push("Please enter your first name!");
  }
  if(lastName.length === 0) {
    errorMessages.push("Please enter your last name!");
  }
  if(email.length === 0) {
    errorMessages.push("Please enter your email!");
  }
  if(password.length === 0) {
    errorMessages.push("Please enter a password!");
  }

  // Step 5
  if(termsConditions === false) {
    errorMessages.push("Please accept terms & conditions!");
  }

  // Step 3
  // If no mistakes, alert success message
  if(errorMessages.length === 0) {

    fetch('http://localhost:3002/users/register',{
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(
        {
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
          phone: phone
        }
      )
    })
      .then(
        (response) => response.json()
      )
      .then(
        (response) => {
          console.log(response);
          alert(
            "You have registered successfully" + "\n" +
            firstName + "\n" +
            lastName + "\n" +
            email + "\n" +
            password + "\n" +
            phone + "\n"
          );
        }
      )
      .catch(
        (e) => {
          console.log({e: e})
        }
      )
  } else {
    // Reveal the red error message box
    document.getElementsByClassName('error-message')[0].className = "error-message show";

    // Drop error messages in the box
    document.getElementsByClassName('error-message')[0].innerText = errorMessages.join("\n")
  }
}


// Comparison Operators
// <
// >
// <=
// >=
// ==
// ===
// &&           And
// ||           Or

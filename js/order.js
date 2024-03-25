//event listener for the form submission
var contactForm = document.getElementById('contactForm');
//adding action to the event listener
contactForm.addEventListener('submit', handleSubmission);

//Function 1
//Displays all input values
function handleSubmission(event) {
    event.preventDefault();

    //variables to hold the values of the form
    //function 2
    var validForm = validateForm(); //variable to hold the return value of the validateForm function
    var fName = document.getElementById("firstName").value;
    var lName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var verifyEmail = document.getElementById("reverifyEmail").value;
    var phone = document.getElementById("phone").value;
    var option1 = document.getElementById("option1").checked;
    var option2 = document.getElementById("option2").checked;
    var option3 = document.getElementById("option3").checked;
    var mfinish = document.getElementById("mfinish").checked;
    var gfinish = document.getElementById("gfinish").checked;


    // if statement to check if the form is valid
    if (validForm) {
        //function 3
        var total = calculate(); //call the calculate function
        //function 4
        displayValues(); //call the displayValues function

        Array.from(contactForm.elements).forEach(function (element) {
            if (((inputs.type === "checkbox" || inputs.type === "radio") && inputs.checked) || (inputs.type !== "checkbox" && inputs.type !== "radio")) {
                console.log(inputs.value);
            }
        });
        //output calculated total for developer
        console.log("Thank you for your inqury " + fName + " " + lName + "." + " We will contact you at " + email + "," + " or the phone number " + phone + "." + " Total: $" + total);
        //alert user with input values and total
        alert("Thank you for your inqury " + fName + " " + lName + "." + " We will contact you at " + email + "," + " or the phone number " + phone + "." + " Your total is: $" + total);
    }


}

//validate the form to ensure all required fields are filled in
//if not, alert the user and return false
//if all fields are filled in, return true
function validateForm() {
    //let
    let valid = true;
    let fName = document.getElementById("firstName");
    let lName = document.getElementById("lastName");
    let email = document.getElementById("email");
    let verifyEmail = document.getElementById("reverifyEmail");
    let phone = document.getElementById("phone");

    //try catch finally throw
    //if else statement to check if the fields are empty
    try {
        if (fName.value == "") {
            throw "Must enter a first name.";
        } else if (lName.value == "") {
            throw "Must enter a last name.";
        } else if (email.value == "") {
            throw "Must enter an email.";
        } else if (verifyEmail.value == "") {
            throw "Must verify email.";
        } else if (email.value != verifyEmail.value) {
            throw "Emails do not match.";
        } else if (phone.value == "") {
            throw "Must enter a phone number.";
        }
    } catch (message) {
        alert(message);
        valid = false;
    } finally {
        return valid;
    }


}

//function to calculate the total cost of the form
function calculate() {

    //total is values of the option1, option2, option3, mfinish, and gfinish
    let total = 0;

    let fName = document.getElementById("firstName").value;
    let lName = document.getElementById("lastName");
    let email = document.getElementById("email");
    let phone = document.getElementById("phone");
    let option1 = document.getElementById("option1");
    let option2 = document.getElementById("option2");
    let option3 = document.getElementById("option3");
    let mfinish = document.getElementById("mfinish");
    let gfinish = document.getElementById("gfinish");

    //loop to check if the option is checked
    //if checked, add the price to the total
    //return total
    if (fName.value == "") {
        total += 0;
    }
    if (lName.value == "") {
        total += 0;
    }
    if (email.value == "") {
        total += 0;
    }
    if (phone.value == "") {
        total += 0;
    }
    if (option1.checked) {
        total += 25;
    }
    if (option2.checked) {
        total += 60;
    }
    if (option3.checked) {
        total += 100;
    }
    if (mfinish.checked) {
        total += 10;
    }
    if (gfinish.checked) {
        total += 15;
    }

    return total;

}

//function to display the values of the form
function displayValues() {
    let fName = document.getElementById("firstName").value;
    let lName = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;
    let verifyEmail = document.getElementById("reverifyEmail").value;
    let phone = document.getElementById("phone").value;
    let option1 = document.getElementById("option1").checked;
    let option2 = document.getElementById("option2").checked;
    let option3 = document.getElementById("option3").checked;
    let mfinish = document.getElementById("mfinish").checked;
    let gfinish = document.getElementById("gfinish").checked;
    let total = calculate();

}




//const
//change the background of each input when the user clicks on it
//to indicate that it is the current input
//change it back to the original background when the user clicks off of it
const inputs = document.querySelectorAll('input');

//switch statement to change the background color when the user clicks on the input
//change it back to the original background when the user clicks off of it
inputs.forEach(function (input) {
    input.addEventListener('focus', function () {
        switch (input.type) {
            case 'text':
                input.style.backgroundColor = 'lavenderblush';
                break;
            case 'email':
                input.style.backgroundColor = 'lavenderblush';
                break;
            case 'tel':
                input.style.backgroundColor = 'lavenderblush';
                break;
            case 'radio':
                input.style.backgroundColor = 'lavenderblush';
                break;
            case 'checkbox':
                input.style.backgroundColor = 'lavenderblush';
                break;
        }
    });

    input.addEventListener('blur', function () {
        input.style.backgroundColor = '';
    });
});




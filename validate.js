// Register form validation


document.getElementById('registerForm').addEventListener('submit', function(event){
    event.preventDefault();                                                                       //prevents the default behaviour

    //clear any previous message
    const messageContainer = document.getElementById('message')
    messageContainer.innerHTML = ''
  
    //get form value 
    const username = document.getElementById('registerUsername').value.trim(); 
    const email = document.getElementById('registerEmail').value.trim();
    const password = document.getElementById('registerPassword').value.trim();
    const confirmPassword = document.getElementById('registerConfirmPassword').value.trim();
    
    // Collect error message
    const errorMessages = [];

    if(username === ""){
        errorMessages.push("Username is required")
    }
    if (!validateEmail(email)) {
        errorMessages.push('Please enter a valid Email')
        
    }
    if (password.length < 8) {
       errorMessages.push('passworrd must be at least 8 characters long.') 
    }
    if(password !== confirmPassword){
        errorMessages.push('Passwords do not match.')
    }
    if(!validatePassword(password)){
        errorMessages.push('Password must include an uppercase letter, a lowercase, a number, and a special character')
    }
    if(errorMessages.length > 0){
        showErrorMessages(errorMessages)
    } else{
        showSuccessMessage('Registration successful')   //to display success
        // window.location.href = 'index.html'            //to enter another page
    }
})

// Function to validate using regular expression (Regex)
function  validateEmail(email){
    const re = /\S+@\S+\.\S+/;
    return re.test(email)
}

// Function to display multiple error message
function showErrorMessages(messages){
    const messageContainer = document.getElementById('message')   //select the container where error message will be displayed

    messages.forEach(function(msg){                               //loop through each error message in the message array
        const errorMessage = document.createElement('p')          //create a new paragragh element to hold the error message
        errorMessage.textContent = msg;                           //set the content of the paragraph to the current  error message (msg)
        errorMessage.classList.add('error-message')               //add a css class to style the error message 
        messageContainer.appendChild(errorMessage)                //add the paragraph element with the error message to the message container

    })
}

//Function to validate password with additional conditions
function validatePassword(password) {
    const hashUpperCase = /[A-Z]/.test(password);                  //checks for uppercase
    const hashLowerCase = /[a-z]/.test(password);                   //checks for lowercase
    const hashNumber = /\d/.test(password);                         //checks for number
    const hashSpecialChar = /[~!@#$%^&*?_+]/.test(password);        //checks for special character

    return hashUpperCase && hashLowerCase && hashNumber && hashSpecialChar;
}

//Function to display success message
function showSuccessMessage(message){
    const messageContainer = document.getElementById('message')

    const successMessage = document.createElement('p')
    successMessage.textContent = message
    successMessage.classList.add('success-message')
    messageContainer.appendChild(successMessage)
}
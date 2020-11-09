// const diceRoll = (num = 6) => {
//     return Math.floor(Math.random() * num+1);
// }


// console.log(diceRoll());
// console.log(diceRoll());
// console.log(diceRoll());
// console.log(diceRoll(20));
// console.log(diceRoll(20));
// console.log(diceRoll(20));

function generatePassword(length = 8) {
        letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!£$%^&*()~#}]{[;:?/>.<,|¬`",
        password = "";
    if ((length >= 8) && (length < 31)) {
            //for initial expression (0,88) ;condition; increment // for everytime the index is less than 8, increment the index by one...then do {}//
        for (index = 0, num = letters.length; index < length; ++index) {
            //"" add onto the empty password string: a character at a random point in letters until the length is reached//
            password += letters.charAt(Math.floor(Math.random() * num));
        }
        
        console.log(`Your random password is: ${password}`);
    } else if (length >= 30) {
        console.log("WOAH! That passowrd would be too large!");
    }  else if (length < 8) {
        console.log(`${length} is too small for a secure password. Please pick a length of at least 8`)
    } else {
        console.log(`${length} is not a valid number. Please enter a number`);
    }
}

generatePassword();
generatePassword(8);
generatePassword(10);
generatePassword(7);
generatePassword(2);
generatePassword("hannah");
generatePassword(33);



const userInput = document.getElementById("input");
const passwordResult = document.getElementById("passwordResult");
const button = document.getElementById("generate");

button.addEventListener("click", () => {
    password="";
    length = userInput.value;
    if (passwordResult.textContent) {
        passwordResult.innerHTML = "";
        generate.innerHTML = "Generate Password";
        generate.style = "background-color:#3369ff";
    } else {
        //generate password
        length = userInput.value;
        if ((length >= 8) && (length < 51)) {
            for (index = 0, num = letters.length; index < length; ++index) {
                //"" add onto the empty password string: a character at a random point in letters until the length is reached//
                password += letters.charAt(Math.floor(Math.random() * num));
            }
            passwordResult.innerHTML = `${password}`;
        } else if (length >= 50) {
            passwordResult.innerHTML = `Please enter a smaller number.`;
        } else if (length < 8) {
            passwordResult.innerHTML = `Please enter a larger number`;
        } else {
            passwordResult.innerHTML = `What you entered is not a number.`;
        };
        userInput.textContent.value = "";
        generate.style = "background-color: red";
        generate.innerHTML = "Reset Password";
    }
})
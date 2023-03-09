const inputBox = document.querySelector("#inputBox");

const checkBtn = document.querySelector("#checkBtn");

checkBtn.addEventListener("click", checkPrime);

// functions --> 

function checkPrime() {
    let isPrime = true;

    if (inputBox.value <= 1) {
        isPrime = false;
    }

    for (let i = 2; i <= Math.sqrt(inputBox.value); i++) {
        if (inputBox.value % i == 0) {
            isPrime = false;
            break;
        }
    }  

    if(isPrime) {
        document.getElementById('outputBox').innerHTML = inputBox.value + " is a prime number!";
    }   
      else {
        document.getElementById('outputBox').innerHTML = inputBox.value + " is not a prime number!";
    }
}
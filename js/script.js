import PaystackPop from '@paystack/inline-js'

let balance = 0;


// Adds money to balance
const deposit = () => {
    balance += 10;
    updateBalance();
}


// Removes money from balance 
const withdraw = () => {
    if(balance >= 10) {
        balance -= 10;
        updateBalance();
    } else {
        alert("Insufficient funds!")
    }
}


// Updates our balance
const updateBalance = () => {
    document.getElementById("balance").innerText = balance;
}
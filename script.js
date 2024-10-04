
let balance = 1000;


const balanceDisplay = document.getElementById('balance');
const depositAmountInput = document.getElementById('deposit-amount');
const depositButton = document.getElementById('deposit-button');
const withdrawAmountInput = document.getElementById('withdraw-amount');
const withdrawButton = document.getElementById('withdraw-button');


function updateBalanceDisplay() {
    balanceDisplay.textContent = `$${balance.toLocaleString()}`;
}


function handleDeposit() {
    const depositAmount = parseFloat(depositAmountInput.value);

    if (isNaN(depositAmount) || depositAmount <= 0) {
        alert('Please enter a valid deposit amount.');
        return;
    }

    balance += depositAmount;
    updateBalanceDisplay();
    depositAmountInput.value = '';
}


function handleWithdraw() {
    const withdrawAmount = parseFloat(withdrawAmountInput.value);

    if (isNaN(withdrawAmount) || withdrawAmount <= 0) {
        alert('Please enter a valid withdrawal amount.');
        return;
    }

    if (withdrawAmount > balance) {
        alert('Withdrawal amount exceeds current balance.');
        return;
    }

    balance -= withdrawAmount;
    updateBalanceDisplay();
    withdrawAmountInput.value = '';
}


depositButton.addEventListener('click', handleDeposit);
withdrawButton.addEventListener('click', handleWithdraw);


updateBalanceDisplay();

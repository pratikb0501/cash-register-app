
const billAmount = document.getElementById("input--bill");
const paidAmount = document.getElementById("input--amount");
const checkButton = document.getElementById("btn-check");
const calculateButton = document.getElementById("btn-calculate");
const errorMessage = document.getElementById("error-message");
const numberCellArray = document.querySelectorAll(".notes-number");
const divCalc = document.getElementById("div--calculate");
const tableDiv = document.querySelector(".table-div");

const notes = [2000, 500, 100, 50, 20, 10, 5, 1];

function hideErrorMessage() {
    errorMessage.style.display = "none"
}
function showErrorMessage(message) {
    errorMessage.textContent = message
    errorMessage.style.display = "block"
}

function calculateChangeAmount(remainingAmount) {
    notes.map((note, index) => {
        let notesRetured = Math.trunc(remainingAmount / note);
        numberCellArray[index].textContent = notesRetured;
        remainingAmount = remainingAmount % note;
    })
}

checkButton.addEventListener("click", () => {
    if (billAmount.value > 0) {
        hideErrorMessage();
        divCalc.style.display = "block"
        checkButton.style.display = "none"
    } else {
        showErrorMessage("Enter value greater than 0")
        divCalc.style.display = "none"

    }

})

calculateButton.addEventListener("click", () => {
    let bill = Number(billAmount.value)
    let cash = Number(paidAmount.value)
    if (cash < bill) {
        showErrorMessage("Cash paid is less than bill amount");
        tableDiv.style.display = "none"

    } else if (cash === bill) {
        showErrorMessage("No changes are to be returned");
        tableDiv.style.display = "none"

    } else {
        hideErrorMessage();
        calculateChangeAmount(cash - bill);
        tableDiv.style.display = "block"
    }
})


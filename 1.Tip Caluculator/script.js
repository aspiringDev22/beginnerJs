const billInput = document.getElementById("billTotalInput");
const tipInput = document.getElementById("tipInput");
const perPersonTotal = document.getElementById("perPersonTotal");
const numberOfPeople = document.getElementById("numberOfPeople");
const incPeople = document.getElementById("inc");
const decPeople = document.getElementById("dec");

/* 1. we need to calculate the total Bill (including Tip)
   2. Change the number of People contributing to the tip
 */

let peopleCount = Number(numberOfPeople.innerText);

const calculateBill = () => {
  const bill = Number(billInput.value);
  //   console.log(bill);
  const tip = Number(tipInput.value) / 100;
  const tipAmount = bill * tip;
  //   console.log(tipAmount);
  const total = tipAmount + bill;

  const perPerson = total / peopleCount;
  //   console.log(perPerson);

  perPersonTotal.innerText = `$ ${perPerson.toFixed(2)}`;
};

incPeople.addEventListener("click", () => {
  peopleCount += 1;
  numberOfPeople.innerText = peopleCount;
  calculateBill();
});

decPeople.addEventListener("click", () => {
  if (peopleCount <= 1) {
    return;
  }

  peopleCount -= 1;
  numberOfPeople.innerText = peopleCount;

  calculateBill();
});

billInput.addEventListener("keyup", calculateBill);
tipInput.addEventListener("keyup", calculateBill);

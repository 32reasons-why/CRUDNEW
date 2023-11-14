let trans = [
    {
        id : 1,
        type : "income",
        amount : 3000,
        detail : "salary"
    },
    {
        id : 2,
        type : "income",
        amount : 4000,
        detail : "salary"
    }
];

let state = {
    income : 0,
    expense : 0,
    balance : 0,

    trans : [{
        id : 2,
        type : "income",
        amount : 4000,
        detail : "salary"
    },
    {
        id : 3,
        type : "expense",
        amount : 1000,
        detail : "rent"
    },
    {
        id : 4,
        type : "expense",
        amount : 1000,
        detail : "transport"
    }
]
}

let transIncome = 0;
let transExpense = 0;
let transBalance = 0;

//get html values/variables
const income = document.getElementById('income');
const expense = document.getElementById('expense');
const balance = document.getElementById('balance');


function calculate(){

    transIncome = state.trans[0].amount;
    transExpense = state.trans[2].amount + state.trans[1].amount;
    transBalance = transIncome - transExpense;

}

function display(){

    income.innerHTML = transIncome;
    expense.innerHTML = transExpense;
    balance.innerHTML = transBalance;

}

function render(){

    calculate();
    display();

}

render();


const budgets = [{title: "Groceries", carrots: 50, apples: 50, total: 100}, {title: "bots", carrots: 50, apples: 50, total: 120}, {title: "cats", carrots: 50, apples: 50, total: 100}]

$(".wrapper.view2").hide()
const newbudget = document.querySelector(".button.newbudget")
newbudget.addEventListener("click", () => {
    $(".wrapper.view1").hide()
    $(".wrapper.view2").show()
})

const allbudgets = document.querySelector(".button.allbudgets")
allbudgets.addEventListener("click", () => {
    $(".wrapper.view2").hide()
    $(".wrapper.view1").show()
    displayBudgets(budgets)
})

const totalbudget = document.querySelector(".totalbudget")
totalbudget.textContent = countTotal(budgets)

const additem = document.querySelector(".button.additem")
additem.addEventListener("click", () => {
    const budgetform = document.querySelector(".budgetform")
    budgetform.insertAdjacentHTML("beforeend", '<input name="items" value="">')
})

function countTotal(array) {
    let total = 0;
    for (budget of array) {
        total += budget["total"];
    }
    const totalbudget=`Total Budget: $${total}`
    return totalbudget;
}

function displayBudgets(array) {
    const cards = document.querySelectorAll(".card")
    for (card of cards) {
        card.remove()
    }
    for (objects of array) {
        const budget = `<div class="card"><p class="budgettitle">${objects["title"]}</p><p class="budgetprice">$${objects["total"]}</p></div>`
        const budgets = document.querySelector(".budgets")
        budgets.insertAdjacentHTML("afterbegin", budget)
    }
}

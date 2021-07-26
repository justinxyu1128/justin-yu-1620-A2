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
    budgetform.insertAdjacentHTML("beforeend", '<input name="items" value="" placeholder="Carrots 100">')
})

const submit = document.querySelector(".submit")
submit.addEventListener("click", () => {
    const formdata = {}
    let title = document.querySelector(".budgetform").title.value
    const budgettitle = document.querySelector(".title")
    budgettitle.textContent = title
    formdata["title"] = title
    const items = document.querySelectorAll(".items")
    for (item of items) {
        item.remove()
    }
    let budgetitems = document.querySelector(".budgetform").elements.items
    let total = 0
    for (x of budgetitems) {
        let strings = x.value.split(" ")
        const ptemp = `<p class="items">${strings[0]} $${strings[1]}</p>`
        const form = document.querySelector(".form")
        form.insertAdjacentHTML("beforeend", ptemp)
        formdata[strings[0]] = strings[1]
        total += parseInt(strings[1])
    }
    const formtotal = document.querySelector(".formtotal")
    const formtotaltemp = `Total: $${total}`
    formtotal.textContent = formtotaltemp
    formdata["total"] = total
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

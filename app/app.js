const budgets = []
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
})
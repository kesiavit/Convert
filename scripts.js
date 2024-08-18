const amount = document.getElementsByID("amount")

// Manipulando o input amount para receber somente números.
amount.addEventListener("input", () => {
    console.log(amount.value)
})
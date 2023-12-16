const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select-convert-to")
const selectConvertFrom = document.querySelector(".select-convert-from")

function convertValue() {
    const inputCurrencyValue = document.querySelector(".input-value").value

    const realToday = 1

    const dollarToday = 4.97

    const euroToday = 5.39

    const libraToday = 6.26

    const bitcoinToday = 20804860

    const valueToConvert = document.querySelector(".convert-value")

    const valueConverted = document.querySelector(".converted-value")

    if (currencySelect.value == "dollar") {

        valueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dollarToday)

    }

    if (currencySelect.value == "euro") {
        valueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)

    }

    if (currencySelect.value == "libra") {
        valueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }

    if (currencySelect.value == "bitcoin") {
        valueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinToday)
    }

    if (currencySelect.value == "real"){
        valueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue / realToday)
    }
    


    valueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)


}

function changeConvertFrom() { //falta terminar//
    console.log("funcionou")
}

function changeTextConverted() {
    const currencyTextConverted = document.getElementById("converted-currency-text")
    const convertedImage = document.querySelector(".currency-converted-img")

    if (currencySelect.value == "dollar") {

        currencyTextConverted.innerHTML = "Dollar"
        convertedImage.src = "./assets/usa.png"
    }

    if (currencySelect.value == "euro") {

        currencyTextConverted.innerHTML = "Euro"
        convertedImage.src = "./assets/euro.png"
    }

    if (currencySelect.value == "libra") {

        currencyTextConverted.innerHTML = "Libra"
        convertedImage.src = "./assets/libra.png"

    }

    if (currencySelect.value == "bitcoin") {

        currencyTextConverted.innerHTML = "Bitcoin"
        convertedImage.src = "./assets/bitcoin.png"

    }

    convertValue()
}

convertButton.addEventListener("click", convertValue)
currencySelect.addEventListener("change", changeTextConverted)
selectConvertFrom.addEventListener("change", changeConvertFrom)

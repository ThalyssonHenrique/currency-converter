const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select-convert-to")
const selectConvertFrom = document.querySelector(".select-convert-from")

convertButton.addEventListener("click", convertValue)
currencySelect.addEventListener("change", changeTextConverted)
selectConvertFrom.addEventListener("change", changeConvertFrom)


function convertValue() {
    const inputCurrencyValue = document.querySelector(".input-value").value

    //moeda base real
    const realToLibra = 6.2716
    const realToDollar = 4.9426
    const realToReal = 1
    const realToEuro = 5.3916
    const realToBitcoin = 209189

    //moeda base dollar
    const dollarToReal = 0.2023
    const dollarToDollar = 1
    const dollarToEuro = 1.0908
    const dollarToLibra = 1.27
    const dollarToBitcoin = 42420

    //moeda base libra
    const libraToReal = 0.1594
    const libraToDollar = 0.7881
    const libraToEuro = 0.8597
    const libraToLibra = 1
    const libraToBitcoin = 33379

    //moeda base euro
    const euroToReal = 0.1855
    const euroToDollar = 0.9168
    const euroToEuro = 1
    const euroToLibra = 1.1633
    const euroToBitcoin = 38913

    //moeda base bitcoin
    const bitToReal = 0.0000048
    const bitToDollar = 0.000024
    const bitToEuro = 0.000026
    const bitToLibra = 0.000030
    const bitToBit = 1



    const valueToConvert = document.querySelector(".convert-value")

    const valueConverted = document.querySelector(".converted-value")

    //conversion dollar

    if (selectConvertFrom.value == "dollar" & currencySelect.value == "real") {

        valueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)

        valueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue / dollarToReal)

    }

    if (selectConvertFrom.value == "dollar" & currencySelect.value == "euro") {

        valueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)

        valueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / dollarToEuro)

    }

    if (selectConvertFrom.value == "dollar" & currencySelect.value == "libra") {

        valueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)

        valueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / dollarToLibra)

    }

    if (selectConvertFrom.value == "dollar" & currencySelect.value == "bitcoin") {

        valueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)

        valueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / dollarToBitcoin)

    }

    if (selectConvertFrom.value == "dollar" & currencySelect.value == "dollar") {

        valueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)

        valueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dollarToDollar)
    }

    //conversion euro

    if (selectConvertFrom.value == "euro" & currencySelect.value == "dollar") {

        valueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)

        valueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / euroToDollar)
    }

    if (selectConvertFrom.value == "euro" & currencySelect.value == "libra") {

        valueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)

        valueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / euroToLibra)

    }

    if (selectConvertFrom.value == "euro" & currencySelect.value == "bitcoin") {

        valueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)

        valueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / euroToBitcoin)

    }

    if (selectConvertFrom.value == "euro" & currencySelect.value == "real") {

        valueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)

        valueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue / euroToReal)

    }

    if (selectConvertFrom.value == "euro" & currencySelect.value == "euro") {

        valueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)

        valueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToEuro)

    }

    //conversion libra

    if (selectConvertFrom.value == "libra" & currencySelect.value == "real") {

        valueToConvert.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)

        valueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue / libraToReal)

    }

    if (selectConvertFrom.value == "libra" & currencySelect.value == "euro") {

        valueToConvert.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)

        valueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / libraToEuro)

    }

    if (selectConvertFrom.value == "libra" & currencySelect.value == "dollar") {

        valueToConvert.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)

        valueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / libraToDollar)
    }

    if (selectConvertFrom.value == "libra" & currencySelect.value == "bitcoin") {

        valueToConvert.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)

        valueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / libraToBitcoin)

    }

    if (selectConvertFrom.value == "libra" & currencySelect.value == "libra") {

        valueToConvert.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)

        valueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToLibra)

    }

    //conversion real

    if (selectConvertFrom.value == "real" & currencySelect.value == "dollar") {

        valueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)

        valueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / realToDollar)
    }

    if (selectConvertFrom.value == "real" & currencySelect.value == "libra") {

        valueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)

        valueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / realToLibra)

    }

    if (selectConvertFrom.value == "real" & currencySelect.value == "bitcoin") {

        valueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)

        valueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / realToBitcoin)

    }

    if (selectConvertFrom.value == "real" & currencySelect.value == "euro") {

        valueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)

        valueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / realToEuro)

    }

    if (selectConvertFrom.value == "real" & currencySelect.value == "real") {

        valueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)

        valueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue / realToReal)

    }

    //conversion bitcoin

    if (selectConvertFrom.value == "bitcoin" & currencySelect.value == "bitcoin") {

        valueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue)

        valueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitToBit)

    }

    if (selectConvertFrom.value == "bitcoin" & currencySelect.value == "real") {

        valueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue)

        valueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue / bitToReal)

    }

    if (selectConvertFrom.value == "bitcoin" & currencySelect.value == "euro") {

        valueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue)

        valueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / bitToEuro)

    }

    if (selectConvertFrom.value == "bitcoin" & currencySelect.value == "libra") {

        valueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue)

        valueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / bitToLibra)

    }

    if (selectConvertFrom.value == "bitcoin" & currencySelect.value == "dollar") {

        valueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue)

        valueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / bitToDollar)
    }

}


function changeConvertFrom() {
    const textConvertFrom = document.querySelector(".convert-from")
    const convertFromImage = document.querySelector(".convert-from-image")

    if (selectConvertFrom.value == "dollar") {

        textConvertFrom.innerHTML = "Dollar"
        convertFromImage.src = "./assets/usa.png"
    }

    if (selectConvertFrom.value == "real") {

        textConvertFrom.innerHTML = "Real"
        convertFromImage.src = "./assets/brazil.png"
    }

    if (selectConvertFrom.value == "euro") {

        textConvertFrom.innerHTML = "Euro"
        convertFromImage.src = "./assets/euro.png"
    }

    if (selectConvertFrom.value == "libra") {

        textConvertFrom.innerHTML = "Libra"
        convertFromImage.src = "./assets/libra.png"
    }

    if (selectConvertFrom.value == "bitcoin") {

        textConvertFrom.innerHTML = "Bitcoin"
        convertFromImage.src = "./assets/bitcoin.png"
    }

    convertValue()
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

    if (currencySelect.value == "real") {

        currencyTextConverted.innerHTML = "Real"
        convertedImage.src = "./assets/brazil.png"

    }

    convertValue()
}


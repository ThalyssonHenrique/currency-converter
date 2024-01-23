const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select-convert-to")
const selectConvertFrom = document.querySelector(".select-convert-from")

convertButton.addEventListener("click", convertValue)
currencySelect.addEventListener("change", changeTextConverted)
selectConvertFrom.addEventListener("change", changeConvertFrom)


async function convertValue() {
    const inputCurrencyValue = document.querySelector(".input-value").value

    const valueToConvert = document.querySelector(".convert-value")

    const valueConverted = document.querySelector(".converted-value")

    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,USD-EUR,USD-GBP,BTC-BRL,BTC-USD,BTC-EUR,GBP-USD,GBP-BRL,GBP-EUR,BRL-USD,BRL-EUR,BRL-GBP,EUR-USD,EUR-GBP,EUR-BRL").then(response => response.json())

    const dolarToReal = data.USDBRL.high
    const dolarToEuro = data.USDEUR.high
    const dolarToLibra = data.USDGBP.high
    const dolarToBitcoin = 42420
    const dollarToDolar = 1

    const libraToReal = data.GBPBRL.high
    const libraToDolar = data.GBPUSD.high
    const libraToEuro = data.GBPEUR.high
    const libraToBitcoin = 33379
    const libraToLibra = 1

    const realToDolar = data.BRLUSD.high
    const realToLibra = data.BRLGBP.high
    const realToEuro = data.BRLEUR.high
    const realToBitcoin = 209189
    const realToReal = 1

    const euroToDolar = data.EURUSD.high
    const euroToLibra = data.EURGBP.high
    const euroToReal = data.EURBRL.high
    const euroToBitcoin = 38913
    const euroToEuro = 1

    const bitToDolar = data.BTCUSD.high
    const bitToEuro = data.BTCEUR.high
    const bitToReal = data.BTCBRL.high
    const bitToLibra = 0.000030
    const bitToBit = 1


    //conversion dollar

    if (selectConvertFrom.value == "dollar" & currencySelect.value == "real") {

        valueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)

        valueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue / dolarToReal)

    }

    if (selectConvertFrom.value == "dollar" & currencySelect.value == "euro") {

        valueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)

        valueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / dolarToEuro)

    }

    if (selectConvertFrom.value == "dollar" & currencySelect.value == "libra") {

        valueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)

        valueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / dolarToLibra)

    }

    if (selectConvertFrom.value == "dollar" & currencySelect.value == "bitcoin") {

        valueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)

        valueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / dolarToBitcoin)

    }

    if (selectConvertFrom.value == "dollar" & currencySelect.value == "dollar") {

        valueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)

        valueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dollarToDolar)
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
        }).format(inputCurrencyValue / euroToDolar)
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
        }).format(inputCurrencyValue / libraToDolar)
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
        }).format(inputCurrencyValue / realToDolar)
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
        }).format(inputCurrencyValue / bitToDolar)
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


/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/ 

// get input element and grab its value
const input = document.getElementById('input-el')


//get button and paragraph elements for output
const convertBtn = document.getElementById('btn-convert')
const lengthEl = document.getElementById('length-el')
const volumeEl = document.getElementById('volume-el')
const massEl = document.getElementById('mass-el')

//calculations to output
// const metersToFeet = inputEl * 3.28
// const feetToMeters = inputEl * 0.30

// const litersToGallons = inputEl * 0.26
// const gallonsToLiters = inputEl * 3.78

// const kilosToPounds = inputEl * 2.20
// const poundsToKilos = inputEl * 0.45


convertBtn.addEventListener('click', function() {
  
    const inputEl = input.value
    const metersToFeet = inputEl * 3.28
    const feetToMeters = inputEl * 0.30

    const litersToGallons = inputEl * 0.26
    const gallonsToLiters = inputEl * 3.78

    const kilosToPounds = inputEl * 2.20
    const poundsToKilos = inputEl * 0.45
    
    //length output
    lengthEl.textContent = `${inputEl} meters = ${metersToFeet.toFixed(3)} feet | ${inputEl} feet = ${feetToMeters.toFixed(3)} meters`
    
    //volume output
    volumeEl.textContent = `${inputEl} liters = ${litersToGallons.toFixed(3)}  gallons | ${inputEl} gallons = ${gallonsToLiters.toFixed(3)}  liters`
    
    //mass output
    massEl.textContent = `${inputEl} kilos = ${kilosToPounds.toFixed(3)}  pounds | ${inputEl} pounds = ${poundsToKilos.toFixed(3)}  kilos`
    
})


//const queryType = document.querySelector('')
const sumbitButton = document.querySelector('button')
const alert = document.querySelector('.alert-box')
const inputs = document.querySelectorAll("input")

const radio = document.querySelectorAll(".radio-checker")
const radioError = document.querySelector("#query-error")

const checkbox = document.querySelector("#consent")
const checkboxError = document.querySelector("#consent-error")

console.log(radio)

sumbitButton.addEventListener('click', () => {
    let check = 0
    //checking if input have something in it
    inputs.forEach(input => {
        if(input.value === ""){
            input.nextElementSibling.style.display = "block"
            check += 1
        }else if(input.value != ""){
            input.nextElementSibling.style.display = "none"
        }
    });
    let checkRadio = 0
    //checking if radio button was clicked
    radio.forEach(rad => {
        if(rad.checked == false){
            checkRadio += 1
        }
        if(checkRadio == 2){
            radioError.style.display = "block"
        }else{
            radioError.style.display = "none"
        }
    })

    //checking if checkbox is clicked
    if(checkbox.checked){
        check -= 1
        checkboxError.style.display = "none"
    }else if(checkbox.checked == false){
        checkboxError.style.display = "flex"
    }
    console.log(check)
    //checking if everything is okay and showing alert
    if(check == 0){
        alert.style.display = "block"
        setTimeout(() => {alert.style.display = "none"}, 2000)
    }
})
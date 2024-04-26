
const register = document.querySelector(".register")
const newAccount = document.querySelector(".new-account")
const closeIcon = document.querySelector(".ri-close-line")
const form = document.querySelector('form')
const btn = document.querySelector('form button')

newAccount.addEventListener("click", function () {
    register.classList.remove("hide-register")
})

closeIcon.addEventListener("click", function () {
    register.classList.add("hide-register")
})

btn.addEventListener("click", (e) => {
    e.preventDefault()
})

window.onclick = function (event) {
    if (event.target == register) {
        register.classList.add("hide-register")
    }
}

//Obsługa formularza rejestracji:

const nameInput = document.querySelector('input[name=name]')
const surnameInput = document.querySelector('input[name=surname]')
const peselInput = document.querySelector('input[name=pesel]')

const validTexts = document.querySelectorAll('.register small')

async function createAccount() {

    const name = nameInput.value
    const surname = surnameInput.value
    const pesel = peselInput.value

    if (name == '') {
        validTexts[0].style.visibility = 'visible'
    } else {
        validTexts[0].style.visibility = 'hidden'
    }

    if (surname == '') {
        validTexts[1].style.visibility = 'visible'
    } else {
        validTexts[1].style.visibility = 'hidden'
    }

    if (pesel.length != 11) {
        validTexts[2].style.visibility = 'visible'
    } else {
        validTexts[2].style.visibility = 'hidden'
    }

    const formData = {
        name: name,
        surname: surname,
        pesel: pesel
    }

    console.log(formData)

    // await fetch('http://localhost:3333/register', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(formData)
    // })
}
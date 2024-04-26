
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


async function createAccount() {
    
    const formData = {
        nama: 'Ola',
        surname: 'Nalepa',
        pesel: '3455424234'
    }

    await fetch('http://localhost:3333/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
    })
}
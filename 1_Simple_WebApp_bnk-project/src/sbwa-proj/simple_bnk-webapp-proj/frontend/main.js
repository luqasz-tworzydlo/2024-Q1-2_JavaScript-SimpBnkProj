
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

// Obsługa formularza rejestracji

conts nameInput = document.querySelector('input[name=name]').value
const surnameInput = document.querySelector('input[name=surname]').value
conts peselInput = document.querySelector('input[name=pesel]').value

const validTexts = document.querySelectorAll('.register small')

console.log(nameInput)

async function createAccount() {
	
	if(name == null || name == undefinied) {
		validTexts[0].style.visibility = 'visible'
	}
    
    const formData = {
        name: nameInput.value // 'Ola',
        surname: surnameInput.value // 'Nalepa',
        pesel: peselInput.value // '3455424234'
    }
	
	console.log(formData)

    //await fetch('http://localhost:3333/register', {
    //    method: 'POST',
    //    headers: { 'Content-Type': 'application/json' },
    //    body: JSON.stringify(formData)
    //})
}
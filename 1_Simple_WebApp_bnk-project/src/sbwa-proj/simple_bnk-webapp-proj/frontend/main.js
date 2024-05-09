
const register = document.querySelector(".register")
const newAccount = document.querySelector(".new-account")
const closeIcon = document.querySelector(".ri-close-line")
const form = document.querySelector('form')
const btn = document.querySelector('form button')
const inputs = document.querySelectorAll('form input')

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
        name: inputs[0].value,
        surname: inputs[1].value,
        pesel: inputs[2].value,
        email: inputs[3].value,
        password: inputs[4].value,
    }

    const response = await fetch('http://localhost:3333/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
    })

    const data = await response.json()
    register.classList.add("hide-register")

    if (data.success) {
        Toastify({
            text: data.message,
            duration: 2000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "left", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "ffff00",
                color: '#000',
            },
            onClick: function(){} // Callback after click
            }).showToast();
        } else {
        Toastify({
            text: data.message,
            duration: 2000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "left", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "#ff0000",
                color: '#000',
            },
            onClick: function(){} // Callback after click
            }).showToast();
    }

}
const input = document.getElementById("input")
const input1 = document.getElementById("input1")
const btn = document.getElementById("btn")
const error = document.getElementById("error")
const errortext = document.getElementById("errortext")
const closer = document.getElementById("closer")
closer.classList.add("activecloser")
function errorf(text) {
    errortext.innerHTML = text
    error.classList.add("active")
}

function login() {

    if (input.value == "" && input1.value == "" ) {
        errorf("Username va Password maydonini to'ldiring")
    } else if (input.value == "") {
        errorf("Username maydonini to'ldiring")
    } else if (input1.value == "") {
        errorf("Password maydonini to'ldiring")
    } else {
        if (input.value == "suxrob" && input1.value == "20101001") {
            window.location.href = "fetch.html"
        } else {
            errorf("Bunday foydalanuvchi mavjud emas")
        }
    }

}

function closerbtn() {
    error.classList.remove("active")
}
btn.addEventListener("click", login);
closer.addEventListener("click", closerbtn);
const user = JSON.parse(localStorage.getItem("login_success")) || false
if (!user){
    window.location.href = "login.html"
}

const logout = document.querySelector("#logout")

logout.addEventListener("click", ()=>{
    alert("Gracias por utilizar Turnos.com")
    localStorage.removeItem("login_success")
    window.location.href = "..//index.html"
})
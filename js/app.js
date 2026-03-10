function goToStudent(){
    window.location.href = "student.html";
}

document.querySelector(".login-form").addEventListener("submit", function(e){

e.preventDefault()

alert("Login successful!")

})
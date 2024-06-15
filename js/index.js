document.querySelector("#toggle-btn").addEventListener("click", function() {
    document.querySelector("#login-form").classList.toggle("hidden");
    document.querySelector("#login-form").classList.toggle("visible");
    document.querySelector("#register-form").classList.toggle("hidden");
    document.querySelector("#register-form").classList.toggle("visible");
});
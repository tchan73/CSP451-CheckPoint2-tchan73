// login.js
const loginForm = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const errorDiv = document.getElementById("error");
    errorDiv.textContent = "";

    if (!emailInput.value || !passwordInput.value) {
        errorDiv.textContent = "Email and password cannot be empty";
        return;
    }

    if (!emailInput.value.includes("@")) {
        errorDiv.textContent = "Invalid email format";
        return;
    }

    alert("Login successful (demo)");
});

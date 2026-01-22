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
// Inline error message elements
const errorContainer = document.createElement("div");
errorContainer.style.color = "red";
errorContainer.style.marginTop = "10px";
errorContainer.style.fontSize = "0.9rem";

// Attach error container below the form
form.appendChild(errorContainer);

// Disable submit button by default
submitBtn.disabled = true;

/**
 * Validates login inputs and updates UI feedback.
 * This exists to prevent unnecessary form submissions
 * and to improve user experience before sending data.
 */
function validateInputs() {
  errorContainer.textContent = "";

  if (username.value.trim() === "") {
    errorContainer.textContent = "Username is required.";
    submitBtn.disabled = true;
    return false;
  }

  if (password.value.length < 6) {
    errorContainer.textContent =
      "Password must be at least 6 characters long.";
    submitBtn.disabled = true;
    return false;
  }

  submitBtn.disabled = false;
  return true;
}

// Validate on every input change
username.addEventListener("input", validateInputs);
password.addEventListener("input", validateInputs);

// Final validation on submit
form.addEventListener("submit", function (e) {
  if (!validateInputs()) {
    e.preventDefault();
  }
});

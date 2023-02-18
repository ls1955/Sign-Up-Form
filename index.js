const firstNameInput = document.getElementById("first-name");
const lastNameInput = document.getElementById("last-name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");

[firstNameInput, lastNameInput, emailInput].forEach((input) => {
    input.addEventListener("keyup", () => {
        setTimeout(() => {
            if (input.value.length > 0) input.className = "";
        }, 5000);
    });
});

passwordInput.addEventListener("keyup", () => {
    setTimeout(() => {
        if (passwordInput.value.length < 8) {
            passwordInput.className ="short-password-err";
        } else passwordInput.className = "";
    }, 3000);
});

passwordInput.addEventListener("keydown", () => {
    if (passwordInput.className === "unfill") return;

    if (passwordInput.value.length < 8) passwordInput.className = "short-password-err";
    else passwordInput.className = "";
});

confirmPasswordInput.addEventListener("keyup", () => {
    setTimeout(() => {
        if (confirmPasswordInput.value.length < 8) {
            confirmPasswordInput.className = "short-password-err";
        } else if (passwordInput.value !== confirmPasswordInput.value) {
            confirmPasswordInput.className = "unmatch-password-err";
            confirmPasswordInput.setCustomValidity("Password does not match");
        } else {
            confirmPasswordInput.className = "";
            confirmPasswordInput.setCustomValidity("");
        }
    }, 2000);
});

const signinForm = document.getElementById("signin-form");

if (signinForm) {
    signinForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const username = document.getElementById("hello-box").value;
        const password = document.getElementById("password").value;
        const greeting = document.getElementById("user-greeting");

        if (username === "Jacobe" && password === "Johnson") {
            greeting.textContent = "Sign in successful! Welcome, Jacobe.";

            setTimeout(function () {
                window.location.href = "lions.html";
            }, 1500);

        } else {
            greeting.textContent = "Incorrect username or password.";
        }
    });
}
document.getElementById("signupForm").addEventListener("submit", async (e) => {

    e.preventDefault();

    const username = document.getElementById("username").value;

    const email = document.getElementById("email").value;

    const password = document.getElementById("password").value;

    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {

        alert("Passwords do not match.");

        return;

    }

    const { data, error } = await supabase.auth.signUp({

        email: email,

        password: password,

        options: {

            data: {

                username: username

            }

        }

    });

    if (error) {

        alert(error.message);

    } else {

        alert("🎉 Account created! Check your email to verify your account.");

        window.location.href = "login.html";

    }

});
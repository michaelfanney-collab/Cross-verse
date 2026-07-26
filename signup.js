if (!window.supabase) {

    alert("ERROR: Supabase library did not load.");

}

document.getElementById("signupForm").addEventListener("submit", async (e) => {

    e.preventDefault();

    if (typeof supabase === "undefined") {

        alert("ERROR: Supabase client was not created.");

        return;

    }

    const username = document.getElementById("username").value;

    const email = document.getElementById("email").value;

    const password = document.getElementById("password").value;

    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {

        alert("Passwords do not match.");

        return;

    }

    try {

    const { data, error } = await window.supabaseClient.auth.signUp({({

        email: email,

        password: password,

        options: {

            data: {

                username: username

            }

        }

    });

    if (error) {

        alert("Signup Error: " + error.message);

    } else {

        alert("SUCCESS!");

        window.location.href = "login.html";

    }

} catch (err) {

    alert("JavaScript Error: " + err.message);

}

        email: email,

        password: password,

        options: {

            data: {

                username: username

            }

        }

    });

    if (error) {

        alert("Signup Error: " + error.message);

    } else {

        alert("🎉 Account created! Check your email to verify your account.");

        window.location.href = "login.html";

    }

});
            

     
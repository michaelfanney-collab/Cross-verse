document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById("signupForm");

  if (!form) {

    alert("Signup form not found.");

    return;

  }

  form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const username = document.getElementById("username").value.trim();

    const email = document.getElementById("email").value.trim();

    const password = document.getElementById("password").value;

    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {

      alert("Passwords do not match.");

      return;

    }

    try {

      const { data, error } = await window.supabaseClient.auth.signUp({

        email,

        password,

        options: {

          data: {

            username: username

          }

        }

      });

      if (error) {

        alert("Signup failed: " + error.message);

        return;

      }

      alert("Account created successfully!");

      window.location.href = "login.html";

    } catch (err) {

      alert("JavaScript Error: " + err.message);

    }

  });

});

    
        
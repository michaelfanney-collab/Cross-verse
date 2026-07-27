
document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById("login-form");

  if (!form) {

    alert("Login form not found!");

    return;

  }

  form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const email = document.getElementById("email").value.trim();

    const password = document.getElementById("password").value;

    try {

      const { error } = await window.supabaseClient.auth.signInWithPassword({

        email,

        password,

      });

      if (error) {

        alert("Login failed: " + error.message);

        return;

      }

      alert("Login successful!");

      window.location.href = "dashboard.html";

    } catch (err) {

      alert("JavaScript Error: " + err.message);

    }

  });

});





























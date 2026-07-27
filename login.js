document.addEventListener("DOMContentLoaded", () => {

  alert("login.js loaded");

  const form = document.getElementById("login-form");

  if (!form) {

    alert("Login form not found!");

    return;

  }

  form.addEventListener("submit", async (e) => {

    e.preventDefault();

    alert("Login button clicked");

    const email = document.getElementById("email").value;

    const password = document.getElementById("password").value;

    try {

      const { error } = await window.supabaseClient.auth.signInWithPassword({

        email,

        password,

      });

      if (error) {
  alert("Signup failed: " + error.message);
  return;
}

// Create a profile for the new user
const { error: profileError } = await window.supabaseClient
  .from("profiles")
  .insert([
    {
      id: data.user.id,
      username: username,
      display_name: username,
      xp: 0,
      reputation: 0,
      premium: false
    }
  ]);

if (profileError) {
  alert("Profile creation failed: " + profileError.message);
  return;
}

alert("Account created successfully!");

window.location.href = "login.html";

      }

    } catch (err) {

      alert("JavaScript Error: " + err.message);

    }

  });

});  






























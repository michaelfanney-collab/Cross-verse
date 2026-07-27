document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById("signupForm");

  if (!form) {

    alert("Signup form not found.");

    return;

  }

  form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const user_name = document.getElementById("user_name").value.trim();

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

            user_name: username

          }

        }

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

      user_name: username,

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
      
      } catch (err) {

      alert("JavaScript Error: " + err.message);

    }

  }); 

});

    
        
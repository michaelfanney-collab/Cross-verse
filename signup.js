

import { supabase } from "./supabase.js";

const signupForm = document.getElementById("signup-form");

signupForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  // Create the auth user
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    alert(error.message);
    return;
  }

  const user = data.user;

  if (!user) {
    alert("Please check your email to confirm your account.");
    return;
  }

  // Create profile
  const { error: profileError } = await supabase
    .from("profiles")
    .insert({
      id: user.id,
      username: username,
    });

  if (profileError) {
    alert("Profile creation failed: " + profileError.message);
    return;
  }

  alert("Account created successfully!");

  window.location.href = "login.html";
});












































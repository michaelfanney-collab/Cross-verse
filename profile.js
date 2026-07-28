const supabase = window.supabaseClient;

async function loadProfile() {

    const {

        data: { session }

    } = await supabase.auth.getSession();

    if (!session) {

        window.location.href = "login.html";

        return;

    }

    const user = session.user;

    const { data, error } = await supabase

        .from("Profiles")

        .select("*")

        .eq("id", user.id)

        .single();

    if (error) {

        console.error(error);

        return;

    }

    // Username

    const username = document.getElementById("username");

    if (username) {

        username.textContent = data.User_name || "Player";

    }

    // XP

    const xp = document.getElementById("xp");

    if (xp) {

        xp.textContent = data.Xp || 0;

    }

    // Reputation

    const reputation = document.getElementById("reputation");

    if (reputation) {

        reputation.textContent = data.Reputation || 0;

    }

    // Clan

    const clan = document.getElementById("clan");

    if (clan) {

        clan.textContent = data.Clan || "No Clan";

    }

    // Bio

    const bio = document.getElementById("bio");

    if (bio) {

        bio.textContent = data.Bio || "No bio yet.";

    }

    // Favorite Game

    const favoriteGame = document.getElementById("favoriteGame");

    if (favoriteGame) {

        favoriteGame.textContent = data.Favorite_Game || "None";

    }

    // Platform

    const platform = document.getElementById("platform");

    if (platform) {

        platform.textContent = data.Platform || "Unknown";

    }

}

loadProfile();
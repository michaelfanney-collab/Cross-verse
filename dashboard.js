 const supabase = window.supabaseClient;

async function loadDashboard() {

    const {
        data: { session },
        error
    } = await supabase.auth.getSession();

    if (!session) {
        window.location.href = "login.html";
        return;
    }

    const user = session.user;

    const { data, error: profileError } = await supabase
        .from("Profiles")
        .select("*")
        .eq("id", user.id)
        .single();

    if (profileError) {
        console.log(profileError);
        return;
    }

    document.getElementById("username").textContent =
        data.User_name || "Unknown";

    document.getElementById("xp").textContent =
        data.Xp;

    document.getElementById("reputation").textContent =
        data.Reputation;

    document.getElementById("clan").textContent =
        document.getElementById("dashboardName").textContent =

    data.User_name || "Player";

document.getElementById("xpValue").textContent =

    (data.Xp || 0) + " XP";

document.getElementById("clanValue").textContent =

    data.Clan || "No Clan";
        data.Clan || "None";
}


loadDashboard(); 

/* =========================================

   XP PROGRESS

========================================= */

const xp = 35;

const xpFill = document.getElementById("xpFill");

const xpPercent = document.getElementById("xpPercent");

const level = document.getElementById("level");

if (xpFill && xpPercent && level) {

    xpFill.style.width = xp + "%";

    xpPercent.textContent = xp + "%";

    if (xp >= 100) {

        level.textContent = "2";

    }

}

function upgradePremium() {

    alert("🚀 CrossVerse Premium is coming soon!\n\n$25/month\n\n• Bonus XP\n• Exclusive Badges\n• Premium Profile Features\n• Future Premium Rewards");

}






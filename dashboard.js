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

    // Dashboard Profile
    document.getElementById("username").textContent =
        data.User_name || "Unknown";

    document.getElementById("xp").textContent =
        data.Xp || 0;

    document.getElementById("reputation").textContent =
        data.Reputation || 0;

    document.getElementById("clan").textContent =
        data.Clan || "None";

    // Player Overview
    const dashboardName = document.getElementById("dashboardName");
    if (dashboardName) {
        dashboardName.textContent = data.User_name || "Player";
    }

    const xpValue = document.getElementById("xpValue");
    if (xpValue) {
        xpValue.textContent = (data.Xp || 0) + " XP";
    }

    const clanValue = document.getElementById("clanValue");
    if (clanValue) {
        clanValue.textContent = data.Clan || "No Clan";
    }

    // XP Progress
    const xp = Math.min(data.Xp || 0, 100);

    const xpFill = document.getElementById("xpFill");
    const xpPercent = document.getElementById("xpPercent");
    const level = document.getElementById("level");

    if (xpFill) {
        xpFill.style.width = xp + "%";
    }

    if (xpPercent) {
        xpPercent.textContent = xp + "%";
    }

    if (level) {
        level.textContent = Math.floor((data.Xp || 0) / 100) + 1;
    }
}

loadDashboard();

function upgradePremium() {
    alert(
        "🚀 CrossVerse Premium is coming soon!\n\n" +
        "$25/month\n\n" +
        "• Bonus XP\n" +
        "• Exclusive Badges\n" +
        "• Premium Profile Features\n" +
        "• Future Premium Rewards"
    );
}
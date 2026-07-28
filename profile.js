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

        console.log(error);

        return;

    }

    document.getElementById("username").textContent =

        data.User_name || "Unknown";

    document.getElementById("bioInput").value =

        data.Bio || "";

    document.getElementById("favoriteGame").textContent =

        data.Favorite_Game || "Not set";

    document.getElementById("platform").textContent =

        data.Platform || "Not set";

    document.getElementById("clan").textContent =

        data.Clan || "None";

    document.getElementById("xp").textContent =

        data.Xp || 0;

    document.getElementById("reputation").textContent =

        data.Reputation || 0;

    document.getElementById("saveProfile").addEventListener("click", async () => {

        const newBio = document.getElementById("bioInput").value;

        const { error } = await supabase

            .from("Profiles")

            .update({

                Bio: newBio

            })

            .eq("id", user.id);

        if (error) {

            alert(error.message);

            return;

        }

        document.getElementById("saveStatus").textContent =

            "✅ Profile Saved!";

    });

}

loadProfile(); 
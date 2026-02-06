import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

async function checkLiveRecommendations() {
    console.log("Checking Live Recommendations Endpoint...");
    try {
        // 1. Register a fresh user
        const email = `live_debug_${Date.now()}@test.com`;
        const regRes = await axios.post(`${BASE_URL}/api/auth/register`, {
            email, password: 'password123', name: 'Debug User'
        });
        const token = regRes.data.token;
        console.log("Registered temp user:", email);

        // 2. Get Recommendations
        const recRes = await axios.get(`${BASE_URL}/api/advanced/recommendations`, {
            headers: { 'Authorization': `Bearer ${token}` }
        });

        const recs = recRes.data.recommendations;

        if (recs.length === 0) {
            console.error("❌ LIVE FAILURE: API returned empty recommendations.");
        } else {
            // Check for progress property
            const hasProgress = recs.every(r => r.hasOwnProperty('progress'));
            if (hasProgress) {
                console.log("✅ LIVE SUCCESS: API returned recommendations with 'progress':");
                recs.forEach(r => console.log(` - ${r.nextTopic} (${r.progress}%)`));
            } else {
                console.error("❌ LIVE FAILURE: Recommendations missing 'progress' property.");
                console.log(recs[0]);
            }
        }

    } catch (error) {
        console.error("❌ ERROR:", error.message);
    }
}

checkLiveRecommendations();

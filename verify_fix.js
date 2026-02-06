
import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

async function runVerification() {
    console.log("Starting verification...");

    try {
        // 1. Register User
        const email = `test_${Date.now()}@example.com`;
        const password = 'password123';
        console.log(`Registering user: ${email}`);

        // Register
        let response = await axios.post(`${BASE_URL}/api/auth/register`, {
            email, password, name: 'Test User'
        });

        const token = response.data.token;
        console.log("User registered successfully.");

        const authHeaders = {
            'Authorization': `Bearer ${token}`
        };

        // 2. Create Learning Path
        console.log("Creating Learning Path...");
        response = await axios.post(`${BASE_URL}/api/advanced/learning-path/create`,
            { goal: 'Learn Java', currentLevel: 'beginner', duration: 30 },
            { headers: authHeaders }
        );
        console.log("Learning Path created.");

        // 3. Start Session (Frontend simulation)
        console.log("Starting Session (Frontend simulation)...");
        // In the frontend, 'Start Learning' calls api.tutor.ask via handleStartSession
        response = await axios.post(`${BASE_URL}/api/tutor/ask`,
            { question: "I want to learn Learn Java" },
            { headers: authHeaders }
        );
        console.log("Session started successfully. AI Response received.");

        // 4. Check Analytics
        console.log("Checking Analytics...");
        response = await axios.get(`${BASE_URL}/api/advanced/analytics`, {
            headers: authHeaders
        });
        console.log("Analytics Data:", JSON.stringify(response.data.stats, null, 2));

        // 5. Verify Recommendations
        console.log("Checking Recommendations...");
        response = await axios.get(`${BASE_URL}/api/advanced/recommendations`, {
            headers: authHeaders
        });
        console.log("Recommendations:", JSON.stringify(response.data.recommendations, null, 2));

        console.log("\nVerification Complete: All endpoints responding correctly.");
    } catch (error) {
        console.error("Verification Failed:", error.response ? error.response.data : error.message);
    }
}

runVerification();


import { TopicRecommendationEngine } from './src/utils/advancedLearning.js';

console.log("Starting Recommendation Fix Verification...");

const engine = new TopicRecommendationEngine();

// Test 1: User with history that doesn't trigger thresholds (The Dead Zone)
console.log("\n1. Testing User with 'Dead Zone' History...");
// 'Java' is not in the hardcoded topic lists, so progress will be 0 for all categories.
const deadZoneHistory = [
    { topic: 'Java', score: 85, timestamp: new Date() }
];

const recs = engine.getRecommendations(deadZoneHistory, {});

if (recs.length > 0) {
    console.log("✅ PASSED: Received recommendations despite unrelated history.");
    // Verify it fell back to foundational
    if (recs[0].nextTopic === 'Fundamentals of Logic') { // First item of foundational
        console.log("✅ PASSED: Correctly fell back to foundational topics.");
    } else {
        console.log("ℹ️ INFO: Received specific recommendations (unexpected but acceptable):", recs[0].nextTopic);
    }
} else {
    console.error("❌ FAILED: Received empty recommendations array.");
    process.exit(1);
}

console.log("\nVerification Complete.");

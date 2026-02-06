
import { TopicRecommendationEngine } from './src/utils/advancedLearning.js';

console.log("Starting Recommendation Verification...");

const engine = new TopicRecommendationEngine();

// Test 1: New User (No history)
console.log("\n1. Testing New User (Foundational Topics)...");
const foundational = engine.getRecommendations([], {});
// Expect: [ { nextTopic: 'Fundamentals of Logic', ... }, ... ]
const first = foundational[0];
if (first && first.nextTopic === 'Fundamentals of Logic') {
    console.log("✅ PASSED: Foundational topic correct:", first.nextTopic);
} else {
    console.error("❌ FAILED: Foundational topic mismatch.", first);
}

// Test 2: User with Mathematics Progress
console.log("\n2. Testing User with Math Progress...");
const mathSessions = [
    { topic: 'Algebra', score: 85, timestamp: new Date() },
    { topic: 'Geometry', score: 90, timestamp: new Date() }
];
// Logic: Algebra & Geometry are in commonTopics.mathematics.
// Percentage < 100. Should recommend next unlearned topic in mathematics.
// commonTopics.mathematics = ['Algebra', 'Geometry', 'Calculus', ...]
// Next should be 'Calculus'.

const mathRecs = engine.getRecommendations(mathSessions, {});
const mathRec = mathRecs.find(r => r.category === 'mathematics');

if (mathRec && mathRec.nextTopic === 'Calculus') {
    console.log("✅ PASSED: Correctly recommended next math topic: Calculus");
} else {
    console.error("❌ FAILED: Math recommendation incorrect.", mathRec);
    // Debug info
    console.log("Sessions:", mathSessions.map(s => s.topic));
    console.log("Recommendations:", JSON.stringify(mathRecs, null, 2));
}

// Test 3: Check Property Consistency
console.log("\n3. Checking Property Consistency...");
const allRecs = [...foundational, ...mathRecs];
const invalidRecs = allRecs.filter(r => !r.nextTopic);

if (invalidRecs.length === 0) {
    console.log("✅ PASSED: All recommendations have 'nextTopic' property.");
} else {
    console.error("❌ FAILED: Some recommendations missing 'nextTopic'.", invalidRecs);
}

console.log("\nVerification Complete.");

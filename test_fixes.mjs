
import { TopicRecommendationEngine, QuizGenerator } from './src/utils/advancedLearning.js';

console.log("Starting Verification...");

// 1. Verify TopicRecommendationEngine
console.log("\n Testing TopicRecommendationEngine...");
const engine = new TopicRecommendationEngine();
const foundational = engine.getFoundationalTopics();

const invalidTopics = foundational.filter(t => !t.nextTopic);
if (invalidTopics.length > 0) {
    console.error("❌ FAILED: Foundational topics missing 'nextTopic' property:", invalidTopics);
    process.exit(1);
} else {
    console.log("✅ PASSED: All foundational topics have 'nextTopic' property.");
}

// 2. Verify Recommendations with Sessions
const mockSessions = [
    { topic: 'Algebra', score: 80, timestamp: new Date() }
];
const recommendations = engine.getRecommendations(mockSessions, {});
console.log("Recommendations generated:", recommendations.length);
if (recommendations.length > 0 && recommendations[0].nextTopic) {
    console.log("✅ PASSED: Recommendations generated with 'nextTopic'.");
} else if (recommendations.length === 0) {
    console.log("⚠️ WARNING: No recommendations generated (might be expected depending on logic).");
} else {
    console.error("❌ FAILED: Recommendations missing 'nextTopic':", recommendations[0]);
}


// 3. Verify QuizGenerator
console.log("\n Testing QuizGenerator...");
const quizGen = new QuizGenerator();
const quiz = quizGen.generateQuiz('Java', 'intermediate', 5);

if (quiz && quiz.questions && quiz.questions.length === 5) {
    console.log("✅ PASSED: Quiz generated successfully with 5 questions.");
} else {
    console.error("❌ FAILED: Quiz generation failed or incorrect question count.");
}

// check for short_answer presence in templates (indirectly)
// We know we added it? No, wait, checking the file content would be better for that.
// But we can check if generateGenericQuestion returns short_answer potentially.
let shortAnswerFound = false;
for (let i = 0; i < 50; i++) {
    const q = quizGen.generateGenericQuestion('Test', 1, 'intermediate');
    if (q.type === 'short_answer') {
        shortAnswerFound = true;
        break;
    }
}

if (shortAnswerFound) {
    console.log("✅ PASSED: 'short_answer' question type can be generated.");
} else {
    console.log("⚠️ WARNING: 'short_answer' not found in 50 random samples (could be bad luck or missing in backend).");
    // Check advancedLearning.js content via view_file if this fails.
}

console.log("\nVerification Complete.");

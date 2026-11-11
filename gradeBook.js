// Grade Book utilities — in-class testing activity
// Your job is NOT to change this file (at first). Your job is to test it.

/**
 * Returns the average of an array of scores.
 * Throws 'No scores provided' if the array is empty.
 */
function average(scores) {
    if (scores.length === 0) {
        throw new Error('No scores provided');
    }
    const total = scores.reduce((sum, s) => sum + s, 0);
    return total / scores.length;
}

/**
 * Converts a score (0–100) into a letter grade.
 *   80–100 → 'A'
 *   70–79  → 'B'
 *   60–69  → 'C'
 *   50–59  → 'D'
 *   0–49   → 'F'
 * Throws 'Score must be between 0 and 100' for anything outside 0–100.
 */
function getGrade(score) {
    if (score < 0 || score > 100) {
        throw new Error('Score must be between 0 and 100');
    }
    if (score >= 80) return 'A';
    if (score >= 70) return 'B';
    if (score >= 60) return 'C';
    if (score >= 50) return 'D';
    return 'F';
}

module.exports = { average, getGrade };

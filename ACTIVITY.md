# In-Class Activity: Test the Grade Book (15 min)

You've been given `gradeBook.js`, a small module a school uses to grade students.
**Your mission: write tests that prove it works, or catch it when it doesn't.**

## Setup (2 min)
1. In a terminal, inside the `activity` folder, run `npm install` once.
2. Open `gradeBook.js` and read the comment above each function. **The comments are the spec**, so test against what they *say* should happen.
3. Open `gradeBook.test.js`. Each `test.todo(...)` is a test for you to write.
4. Run your tests at any time:
   ```bash
   npm test
   ```

## Tasks (10 min)

| # | Function | Level | What to practise | Time |
|---|----------|-------|------------------|------|
| 1 | `average(scores)` | Simple | `toBe`, `toThrow`, `toEqual`, `toBeCloseTo`, `toBeTruthy` / `toBeFalsy`, `toHaveLength`, **edge cases** | ~4 min |
| 2 | `getGrade(score)` | Intermediate | `test.each`, `toThrow`, **edge values** | ~6 min |

**Hint for Task 1:** the comment after each todo tells you which matcher to use.
- `toBe` checks that two values are the *same thing*. To compare the *contents* of two arrays, use `toEqual`.
- Decimals like `78.333…` can't be matched exactly with `toBe`. Use `toBeCloseTo(78.33, 2)` instead.

**Hint for Task 2:** bugs love to hide at the *edges*. For each grade, test the
lowest score that should get it (for example, the lowest score that earns a B).

## Debrief (3 min)
- Did any test fail? If so: **is the test wrong, or is the code wrong?** How do you know?
- If the code is wrong, fix it in `gradeBook.js` and run the tests again until they're all green ✅.

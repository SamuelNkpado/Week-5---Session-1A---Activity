const { average, getGrade } = require('./gradeBook');

// HOW TO WORK:
//   1. Turn each `test.todo('...')` into a real test:
//        test('...', () => { expect(...).to...(...); });
//   2. Run your tests:   npm test
//   3. If a test fails, ask: is my TEST wrong, or is the CODE wrong?

// ---------------------------------------------------------------
// Task 1 — average()   (simple, ~4 min)
// ---------------------------------------------------------------
describe('average()', () => {
    // The comment after each todo is the matcher to use.
    //test.todo('returns the average of a list of scores');            // toBe
    test('returns the average of a list of scores', () => {
    expect(average([70, 80, 90])).toBe(80);
    });
    //test.todo('throws "No scores provided" for an empty array');     // toThrow
    test('throws "No scores provided" for an empty array', () => {
    expect(() => average([])).toThrow('No scores provided');
    });

    // Edge cases: the unusual inputs that are still allowed by the spec.
    describe('edge cases', () => {
        //test.todo('returns the correct average for each student in a class'); // toEqual
        test('returns the correct average for each student in a class', () => {
        const students = [
            [70, 80, 90],
            [60, 70, 80],
            [100, 100, 100]
        ];

        const averages = students.map(scores => average(scores));

        expect(averages).toEqual([80, 70, 100]);
        });
        //   ↳ put several averages in one array, e.g. a single score, a mix of 0s and 100s…
        //test.todo('returns a decimal average when scores do not divide evenly'); // toBeCloseTo
        test('returns a decimal average when scores do not divide evenly', () => {
            expect(average([70, 80, 85])).toBeCloseTo(78.33, 2);
        });

        //test.todo('returns 0 (a falsy value) when all scores are 0');          // toBeFalsy
        test('returns 0 (a falsy value) when all scores are 0', () => {
            expect(average([0, 0, 0])).toBeFalsy();
        });
        //test.todo('returns a truthy average when only one score is above 0');  // toBeTruthy
        test('returns a truthy average when only one score is above 0', () => {
             expect(average([0, 0, 90])).toBeTruthy();
        });
        //test.todo('returns 100 when all scores are 100');                      // toBe
        test('returns 100 when all scores are 100', () => {
             expect(average([100, 100, 100])).toBe(100);
        });
        //test.todo('does not change the original scores array');                // toEqual + toHaveLength
        test('does not change the original scores array', () => {
        const scores = [70, 80, 90];

            average(scores);

        expect(scores).toEqual([70, 80, 90]);
        expect(scores).toHaveLength(3);
       });
    });
});

// ---------------------------------------------------------------
// Task 2 — getGrade()   (intermediate, ~6 min)
// Use test.each to check one score for EACH grade (A, B, C, D, F).
// Tip: bugs love to hide at the edges. Test the LOWEST score for each grade.
// ---------------------------------------------------------------
describe('getGrade()', () => {
    //test.todo('returns the correct letter grade for each grade band');
    test.each([
    [80, 'A'],
    [70, 'B'],
    [60, 'C'],
    [50, 'D'],
    [0, 'F']
    ])('returns the correct grade for score %i', (score, expectedGrade) => {
        expect(getGrade(score)).toBe(expectedGrade);
   });
    //test.todo('throws for a score above 100');
    test('throws for a score above 100', () => {
         expect(() => getGrade(101)).toThrow('Score must be between 0 and 100');
    });
});

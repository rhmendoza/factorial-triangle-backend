const { factorial } = require('./factorial');

describe("testing factorial function", () => {
    test("when number is 0, factorial is 1", () => {
        const result = factorial(0);

        expect(result).toEqual(1);
    })

    test("when number is 1, factorial is 1", () => {
        const result = factorial(1);

        expect(result).toEqual(1);
    })

    test("when number is greater then 1, factorial is greater than 1", () => {
        const result1 = factorial(5);
        const result2 = factorial(10);
        const result3 = factorial(100);

        expect(result1).toBeGreaterThan(1);
        expect(result2).toBeGreaterThan(1);
        expect(result3).toBeGreaterThan(1);
    })
})
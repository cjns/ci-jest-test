// Import the function to be tested.
const addition = require("../calc");

// Add the test code.
describe("Calculator", () => {                    //  Top level parent description.
  describe("Addition function", () => {           //  Second level description.
    test("Should return 42 for 20 + 22", () => {  //  Test method.
      expect(addition(20, 22)).toBe(42);          //  Expect method.
    });
    test("Should return 73 for 42 + 31", () => {  //  Test method.
      expect(addition(42, 31)).toBe(73);          //  Expect method.
    });
  });
  describe("Subtraction function", () => {        //  Second level description.

  });
  describe("Multiply function", () => {           //  Second level description.

  });
  describe("Division function", () => {           //  Second level description.

  });
})
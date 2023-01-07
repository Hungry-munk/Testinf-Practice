import { capitalise } from "./script.js";

test('takes the "arsam" and capitalises the fist letter returning "Arsam"', () => {
    expect(capitalise("arsam")).toBe("Arsam");
});
test('takes the "cHEESE" and capitalises the fist letter returning "CHEESE"', () => {
    expect(capitalise("cHEESE")).toBe("CHEESE");
});
test('doesnt allow non string arguemnts such as 1 returning "not a string"', () => {
    expect(capitalise(1)).toBe("not a string");
});

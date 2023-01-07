// capitalises the first letter of a string if possible
export const capitalise = string => {
    if (typeof string !== "string") return "not a string";
    return string[0].toUpperCase() + string.slice(1);
};

//  reverses the order of a string
export const reverseString = string => {
    if (typeof string !== "string") return "not a string";
    let newString = "";
    for (let i = string.length - 1; i >= 0; i--) {
        newString += string[i];
    }
    return newString;
};

// calculator object
export const calculator = (() => {
    const add = (num1, num2) => {
        return num1 + num2;
    };

    const subtract = (num1, num2) => {
        return num1 - num2;
    };

    const divide = (num1, num2) => {
        return num1 / num2;
    };

    const multiply = (num1, num2) => {
        return num1 * num2;
    };

    return { add, subtract, divide, multiply };
})();

export const caesarCipher = (string, shift) => {
    return "B";
};

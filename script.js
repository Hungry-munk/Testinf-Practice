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

// caeserCipher functions

const shiftCode = (code, shift, min, max) => {
    let newCode = code + shift;
    if (newCode > max) {
        while (newCode > max) newCode = min + (newCode % max) - 1;
    } else if (newCode < min) {
        while (newCode < min) newCode += max - min + 1;
    }
    return newCode;
};

export const caesarCipher = (string, shift) => {
    return [...string]
        .map(charactrer => charactrer.charCodeAt())
        .map(code => {
            if (code >= 65 && code <= 90) {
                // capital letter
                return shiftCode(code, shift, 65, 90);
            } else if (code >= 97 && code <= 122) {
                // lower case letter
                return shiftCode(code, shift, 97, 122);
            }
            // not a letter
            return code;
        })
        .map(newCode => String.fromCharCode(newCode))
        .join("");
};
caesarCipher("Hello, World!", -5);

export function capitalise(string) {
    if (typeof string !== "string") return "not a string";
    return string[0].toUpperCase() + string.slice(1);
}

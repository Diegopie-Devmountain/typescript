// inline type annotation
var age = 38;
var username = 'Yo';
var admin = true;
var scores = [1, 2, 3];
// scores.push(username)
// TS will now only give us Number methods
// scores.forEach((score) => score.)
function doubleAge(num, name, insult, usesSkinCare) {
    if (usesSkinCare === void 0) { usesSkinCare = 0; }
    if (insult) {
        return "Hey old man, ".concat(name, "! You are ").concat(num + usesSkinCare, " years old!");
    }
    return 'Hey ' + name + 'Your age is ' + (num + usesSkinCare);
}
console.log(doubleAge(age, username));
// enums: a 'class' that creates a group of constants
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
    StatusCodes[StatusCodes["Success"] = 200] = "Success";
    StatusCodes[StatusCodes["Accepted"] = 202] = "Accepted";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
})(StatusCodes || (StatusCodes = {}));
// logs 404
console.log(StatusCodes.NotFound);
// logs 200
console.log(StatusCodes.Success);

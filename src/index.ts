// inline type annotation

let age: number = 10;
let username: string = 'Yo';
let admin: boolean = true;
let scores: number[] = [1, 2, 3];
// scores.push(username)
// TS will now only give us Number methods
// scores.forEach((score) => score.)

function doubleAge (num: number): number {
  return num * 2
}

console.log(doubleAge(age));


// enums: a 'class' that creates a group of constants
enum StatusCodes {
  NotFound = 404,
  Success = 200,
  Accepted = 202,
  BadRequest = 400
}
// logs 404
console.log(StatusCodes.NotFound);
// logs 200
console.log(StatusCodes.Success);


// inline type annotation

let age: number = 38;
let username: string = 'Yo';
let admin: boolean = true;
let scores: number[] = [1, 2, 3];
// scores.push(username)
// TS will now only give us Number methods
// scores.forEach((score) => score.)


function doubleAge (num: number, name: string, usesSkinCare:number = 0, insult?:boolean): string {
  if (insult) {
    return `Hey old man, ${name}! You are ${num + usesSkinCare} years old!`
  }
  return 'Hey ' + name + 'Your age is ' + (num + usesSkinCare);
}

console.log(doubleAge(age, username));

type AccessTypes = 'owner' | 'admin' | 'publisher' | 'editor' | 'viewer';

type User = {
  readonly id: number,
  name:string,
  access: AccessTypes,
  makeOld: (num: number, name: string, usesSkinCare:number, insult?:boolean) => void
} | null;

let user: User = {
  id: 1,
  name: "",
  makeOld: doubleAge, 
  access: "standard"
}

user.name = "Pablo"
// user.id = 10;
user.makeOld()



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


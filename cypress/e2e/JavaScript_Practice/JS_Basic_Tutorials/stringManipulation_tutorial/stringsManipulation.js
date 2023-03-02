let user = "Kabira";
let n = 'kabira'; // using single quotes we can declare string s
console.log(n)
console.log(user.length)
console.log(user.charAt(0))

// replacing Uppercase K with k

user = user.replace('K', 'k')

console.log(user);

// converting to uppercase

user = user.toUpperCase();

console.log(user);

// converting to lowercase

user = user.toLowerCase();

console.log(user);

// displaying from start index to end index

console.log(user.substring(1, user.length))

// displaying the index of character
console.log(user.indexOf('a'))


// template literals

let friend1 = "Kabira";
let friend2 = "Tom";

let check = `${friend1} is true friend of ${friend2}`;

console.log(check)

// escape sequence character

let fruit = 'App\`le'
console.log(fruit)
console.log(fruit.length) // it will consider the length of escapce sequence , output will be 6

const sentence = 'The quick brown deer jumps over the lazy dog';
const word = 'deer';

console.log(`The Word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);

let friend = "kabira";
friend[3] = 'a';
console.log(friend) // friend[3] cannot change because strings are immutable
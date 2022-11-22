let user = "Kabira";

console.log(user.length)
console.log(user.charAt(0))

// replacing Uppercase K with k

user = user.replace('K','k')

console.log(user);

// converting to uppercase

user = user.toUpperCase();

console.log(user);

// converting to lowercase

user = user.toLowerCase();

console.log(user);

// displaying from start index to end index

console.log(user.substring(1,user.length))

// displaying the index of character
console.log(user.indexOf('a'))
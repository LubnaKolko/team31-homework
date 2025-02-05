console.log("Ez-Namey-exercise")


const firstWords = ["Easy", "Awesome", "Corporate", "Innovative", "Creative", "Smart", "Intelligent", "Clever", "Brilliant", "Genius"];
const secondWords = ["Company", "Business", "Corporation", "Innovation", "Creativity", "Solutions", "Technology", "Intelligence", "Innovations", "Genius"];

const randomNumber = Math.floor(Math.random(0-9) * 10);
const startupName = firstWords[randomNumber] + " " + secondWords[randomNumber];
const nameLength = startupName.length;

console.log(`The startup: "${startupName}" contains ${nameLength} characters.`);
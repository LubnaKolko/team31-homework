console.log("Housey-pricey exercise");
//peter's house//
const houseWidth = 8;
const houseDepth = 10;
const houseHeight = 10;
const Gardensize = 100;
const ActualPrice = 2500000;

let volume = houseWidth * houseDepth * houseHeight;
const peterprice = volume * 2.5 * 1000 + Gardensize * 300;
console.log("Calculated house price:", peterprice);
//comparing the 2 prices//
if (ActualPrice > peterprice) {
    console.log("Peter is being scammed.");
} else {
    console.log("Peter is paying too little.");
}

//Julia's house//
const JuliahouseWidth = 5;
const JuliahouseDepth = 11;
const JuliahouseHeight = 8;
const JuliaGardensize = 70;
const JuliaActualPrice = 1000000;
let Juliavolume = JuliahouseWidth * JuliahouseDepth * JuliahouseHeight;
const Juliaprice = Juliavolume * 2.5 * 1000 + JuliaGardensize * 300;
console.log("Calculated house price:", Juliaprice);
//comparing the 2 prices//
if (JuliaActualPrice > Juliaprice) {
    console.log("Julia is also being scammed.");
} else {
    console.log("Julia is paying too little.");
}

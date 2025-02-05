console.log("Goodboy-Oldboy exercise");

const dogYearOfBirth = 2015;
const dogYearFuture = 2027;
const dogYear = dogYearFuture - dogYearOfBirth;
const shouldShowResultInDogYears = true;

if (shouldShowResultInDogYears) {
    console.log(`Your dog will be ${dogYear * 7} dog years old in ${dogYearFuture}.`);
} else {
    console.log(`Your dog will be ${dogYear} human years old in ${dogYearFuture}.`);
}
import { countryDetails } from "./countryDetails.mjs";

// Find the country which has the highest income.
function findCountryWithHighestIncome(countryDetails) {
  // check for invalid inputs
  if (!countryDetails?.length || !Array.isArray(countryDetails)) {
    return "Invalid input";
  }
  let maximumIncome = 0;
  let highestIncomeCountry = [];
  for (let countryDetail of countryDetails) {
    const { income = 0, country = "" } = countryDetail;
    // Check if income is number and country is string, skip this iteration
    if (typeof income !== "number" || typeof country !== "string") {
      continue;
    }
    if (income > maximumIncome) {
      maximumIncome = income;
      highestIncomeCountry = [country];
    } else if (income === maximumIncome) {
      highestIncomeCountry.push(country);
    }
  }
  // If no valid income found
  if (highestIncomeCountry.length === 0) {
    return "No valid income found in the provided data";
  }
  return highestIncomeCountry.join();
}
console.log(findCountryWithHighestIncome(countryDetails));
console.log(findCountryWithHighestIncome());
console.log(findCountryWithHighestIncome([]));

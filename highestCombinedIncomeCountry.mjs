import { countryDetails } from "./countryDetails.mjs";
// Find the country which has the combined highest income

function findCountryWithHighestCombinedIncome(countryDetails) {
  // check invalid inputs
  if (!countryDetails?.length || !Array.isArray(countryDetails)) {
    return "Invalid input";
  }
  let countryWiseIncome = {};
  // Calculating total income for each country
  countryDetails.forEach((countryDetail) => {
    const { country, income } = countryDetail;
    if (
      country &&
      income &&
      typeof country === "string" &&
      typeof income === "number"
    ) {
      countryWiseIncome[country] = (countryWiseIncome[country] || 0) + income;
    }
  });

  // Finding the country with the highest combined income
  let maximumIncome = 0;
  let maximumCombinedIncomeCountry = [];
  for (let key in countryWiseIncome) {
    if (countryWiseIncome[key] >= maximumIncome) {
      maximumIncome = countryWiseIncome[key];
      maximumCombinedIncomeCountry = [key];
    } else if (countryWiseIncome[key] === maximumIncome) {
      maximumCombinedIncomeCountry.push(key);
    }
  }
  return maximumCombinedIncomeCountry.join();
}
console.log(findCountryWithHighestCombinedIncome(countryDetails));
console.log(findCountryWithHighestCombinedIncome());
console.log(findCountryWithHighestCombinedIncome([]));

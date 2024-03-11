// Find the country name which has the maximum combined income for Female
import { countryDetails } from "./countryDetails.mjs";

function findCountryWithHighestCombinedFemaleIncome(countryDetails) {
  // check for invalid inputs
  if (!countryDetails?.length || !Array.isArray(countryDetails)) {
    return "Invalid input";
  }
  let countryWiseIncome = {};
  const filteredCountryDetails = countryDetails.filter(
    (country) => country.gender === "Female"
  );
  if (filteredCountryDetails.length === 0) {
    return "No valid country found";
  }
  // Calculating total income for each country
  filteredCountryDetails.forEach((countryDetail) => {
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
  let maximumIncome = 0;
  let maximumCombinedFemaleIncomeCountry = [];
  for (let key in countryWiseIncome) {
    if (countryWiseIncome[key] >= maximumIncome) {
      maximumIncome = countryWiseIncome[key];
      maximumCombinedFemaleIncomeCountry = [key];
    } else if (countryWiseIncome[key] === maximumIncome) {
      maximumCombinedFemaleIncomeCountry.push(key);
    }
  }
  if (maximumCombinedFemaleIncomeCountry.length === 0) {
    return "No valid country found";
  }
  return maximumCombinedFemaleIncomeCountry.join();
}
console.log(findCountryWithHighestCombinedFemaleIncome(countryDetails));
console.log(findCountryWithHighestCombinedFemaleIncome());
console.log(findCountryWithHighestCombinedFemaleIncome([]));

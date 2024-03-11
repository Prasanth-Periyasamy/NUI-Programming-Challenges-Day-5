import { countryDetails } from "./countryDetails.mjs";

//Get all the users info (complete info) who has the email which ends with .gov
function getUsersWithGovEmails(countryDetails) {
  if (
    !countryDetails ||
    countryDetails?.length === 0 ||
    !Array.isArray(countryDetails)
  ) {
    return "Invalid input";
  }
  const users = [];
  // checking whether mail ends with .gov
  for (let country of countryDetails) {
    const { email } = country;
    if (email && email.slice(-4) === ".gov") {
      users.push(country);
    }
  }
  // If no valid users found
  if (users.length === 0) {
    return "No user data found";
  }
  return users;
}
console.log(getUsersWithGovEmails(countryDetails));

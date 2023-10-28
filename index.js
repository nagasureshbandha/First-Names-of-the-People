const peoplesNames = require("../country/state/city/index");
const getFirstNames = require("../utilities/utils/index1");
const getPeopleInCity = (peoplesNames) => {
  return getFirstNames(peoplesNames);
};
module.exports = getPeopleInCity;
console.log(getPeopleInCity);

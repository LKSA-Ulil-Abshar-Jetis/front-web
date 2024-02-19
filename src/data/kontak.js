const phoneNumber = "6282261137596"

module.exports = {
  phoneNumber,
  getNationalPhoneNumber: () => `0${phoneNumber.slice(2)}`,
};

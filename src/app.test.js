// Project files
const { dayOfTheWeek } = require("./app");

test("The method getDay() returns the long-format day of the week", () => {
  // Arrange
  const date_month_day_year = new Date("01/09/2024");
  const result = "Tuesday";

  // Act
  const test = dayOfTheWeek(date_month_day_year);

  // Assert
  expect(test).toBe(result);
});

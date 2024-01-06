import calculateAttributePricePerRoom from "./calculateAttributePricePerRoom";
import { roundNumber } from "./roundNumber";

describe("calculateAttributePricePerRoom", () => {
  it("should calculate the attribute price per room correctly", () => {
    // Example test case
    const roomUnits = 2;
    const totalAttributeUnits = 10;
    const attributePercentage = 20;
    const totalRent = 1000;

    // Expected result: (2 / 10) * ((20 / 100) * 1000) = 40
    const expectedResult = roundNumber(40, 2);

    expect(
      calculateAttributePricePerRoom(
        roomUnits,
        totalAttributeUnits,
        attributePercentage,
        totalRent,
      ),
    ).toBe(expectedResult);
  });

  it("should handle edge cases when inputs are 0", () => {
    // When roomUnits and totalAttributeUnits are both 0, the result should be 0.
    expect(calculateAttributePricePerRoom(0, 0, 50, 1000)).toBe(0);

    // When attributePercentage is 0, the result should always be 0.
    expect(calculateAttributePricePerRoom(5, 10, 0, 1000)).toBe(0);

    // When totalRent is 0, the result should always be 0.
    expect(calculateAttributePricePerRoom(5, 10, 50, 0)).toBe(0);
  });

  it("should handle decimal values correctly", () => {
    // Example test case with decimal values
    const roomUnits = 2.5;
    const totalAttributeUnits = 10;
    const attributePercentage = 25.5;
    const totalRent = 1234.56;

    // Expected result: (2.5 / 10) * ((25.5 / 100) * 1234.56) ≈ 78.7032
    const expectedResult = roundNumber(78.7032, 2);

    expect(
      calculateAttributePricePerRoom(
        roomUnits,
        totalAttributeUnits,
        attributePercentage,
        totalRent,
      ),
    ).toBe(expectedResult);
  });
});

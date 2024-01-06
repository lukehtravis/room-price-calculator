import { roundNumber } from "./roundNumber";
const calculateAttributePricePerRoom = (
  roomUnits,
  totalAttributeUnits,
  attributePercentage,
  totalRent,
) => {
  // Check if totalAttributeUnits is 0 to avoid division by zero
  if (totalAttributeUnits === 0) {
    return 0;
  }
  return roundNumber(
    (roomUnits / totalAttributeUnits) *
      ((attributePercentage / 100) * totalRent),
    2,
  );
};

export default calculateAttributePricePerRoom;

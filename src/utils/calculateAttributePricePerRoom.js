import { roundNumber } from "./roundNumber";
const calculateAttributePricePerRoom = (
  roomUnits,
  totalAttributeUnits,
  attributePercentage,
  totalRent,
) => {
  return roundNumber(
    (roomUnits / totalAttributeUnits) *
      ((attributePercentage / 100) * totalRent),
    2,
  );
};

export default calculateAttributePricePerRoom;

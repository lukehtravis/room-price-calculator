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
  return (
    (roomUnits / totalAttributeUnits) *
    ((attributePercentage / 100) * totalRent)
  );
};

const roomUnits = 2.5;
const totalAttributeUnits = 10;
const attributePercentage = 25.5;
const totalRent = 1234.56;
console.log(
  calculateAttributePricePerRoom(
    roomUnits,
    totalAttributeUnits,
    attributePercentage,
    totalRent,
  ),
);
console.log((2.5 / 10) * ((25.5 / 100) * 1234.56));

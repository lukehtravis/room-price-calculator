const calculateAttributePricePerRoom = (roomUnits, totalAttributeUnits, attributePercentage, totalRent) => {
    return roomUnits / totalAttributeUnits * ((attributePercentage/100) * totalRent);
}

export default calculateAttributePricePerRoom;
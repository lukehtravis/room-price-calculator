const calculateUnitTotals = (arrayOfNumbers) => {
    return arrayOfNumbers.reduce((acc, curr) => acc + +curr.value, 0);
}

export default calculateUnitTotals;
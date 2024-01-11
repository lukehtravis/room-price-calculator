const sumAttributePercentage = (attributes) => {
  return attributes.reduce(
    (accumulator, currentValue) =>
      Number(accumulator) + Number(currentValue.percentageOfRent),
    0
  )
}

export { sumAttributePercentage }

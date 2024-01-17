const sumAttributePercentage = (attributes) => {
  if (attributes.length < 1) return 0
  return attributes.reduce(
    (accumulator, currentValue) =>
      Number(accumulator) + Number(currentValue.percentageOfRent),
    0
  )
}

const defineAttribute = (event, attributes, setAttribute, setInputsVisible) => {
  event.preventDefault()
  const attributePercentageTotal = sumAttributePercentage(attributes)
  const attributePercentage = Number(
    event.target.elements.attributePercentage.value
  )
  if (attributePercentageTotal + attributePercentage > 100) {
    alert(
      `Attribute percentage total cannot exceed 100. Current total is ${
        attributePercentageTotal + attributePercentage
      }`
    )
    return
  }
  setAttribute({
    name: event.target.elements.attributeName.value,
    percentageOfRent: attributePercentage,
  })
  setInputsVisible(true)
}

export { defineAttribute, sumAttributePercentage }

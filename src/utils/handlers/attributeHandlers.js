const defineAttribute = (event, attributes, setAttribute, setInputsVisible) => {
  event.preventDefault()
  const attributePercentageTotal = attributes.reduce(
    (accumulator, currentValue) => accumulator + currentValue.percentageOfRent,
    0
  )
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

export { defineAttribute }

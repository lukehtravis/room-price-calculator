import { sumAttributePercentage } from '../sumAttributePercentage'

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

export { defineAttribute }

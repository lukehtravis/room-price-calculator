function getStringAfterLastDash(str) {
  if (typeof str !== 'string') {
    return str
  }
  const lastIndex = str.lastIndexOf('-')
  // Check if '-' is present in the string
  if (lastIndex !== -1) {
    return str.substring(lastIndex + 1)
  }
  return str // Return the original string if '-' is not found
}

export { getStringAfterLastDash }

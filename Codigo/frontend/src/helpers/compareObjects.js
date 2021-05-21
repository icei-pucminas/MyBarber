// Returns only changed object values

const compareObjects = (object1, object2) => {
  return Object.entries(object1)
    .reduce((acc, [key, value]) => {
      const hasChanged = object2[key] !== value

      if (hasChanged && value) {
        acc[key] = value
      }

      return acc
    }, {});
}

export default compareObjects;
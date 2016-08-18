//
export const getIdFrom = function (url) {
  // Math just the numbers of the string
  return url.match(/(?!\/)([0-9]+)/)[0]
}

//
export const bringSpecie = ({ people }, url) => {
  return people.species[getIdFrom(url)]
}

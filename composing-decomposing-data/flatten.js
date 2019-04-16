var flatten = ([first, ...rest]) => {
  if (first === undefined) {
    return []
  } else if (!Array.isArray(first)) {
    return [first, ...flatten(rest)]
  } else {
    return [...flatten(first), ...flatten(rest)]
  }
}

module.exports = flatten

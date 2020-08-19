const sameNecklace = (arg1, arg2) => {
  if (arg1 === arg2) {
    return true
  } else {
    let arr1 = arg1.split('').sort()
    let arr2 = arg2.split('').sort()

    if (JSON.stringify(arr1) === JSON.stringify(arr2)) {
      return true
    } else {
      return false
    }
  }
}

module.exports = {
  sameNecklace: sameNecklace
}
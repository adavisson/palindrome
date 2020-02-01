const longestWord = (input) => {
  let arr = input.split(" ");
  let lw = arr[0];
  let count = arr[0].length;

  for (i = 1; i < arr.length; i++){
    if (arr[i].length > count) {
      lw = arr[i];
      count = arr[i].length;
    }
  }

  return lw;
}

module.exports = {
  longestWord: longestWord
}
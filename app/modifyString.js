const modifyString = (input) => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  const input_arr = input.split("");

  let result = input_arr.map(letter => {
    if (!vowels.includes(letter.toLowerCase())) {
      return letter
    }
  });

  return result.reverse().join("");
}

const testFunc = (response = {
    status: true,
    responseMessages: [
      "hello",
      "timmy",
      "bye"
    ]
  }) => {

  let error_message = "";
  if(response.status) {
    error_message = response.responseMessages.join(", ");
    return error_message += "."
  } else {
    return "failed";
  }
}

module.exports = {
  modifyString: modifyString,
  testFunc: testFunc
}
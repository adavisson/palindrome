const palindromeTest = (input) => {
  const palWord = input.split("");

  if (palWord.length <= 1){
    return "Palindrome";
  }

  const first = palWord.shift();
  const last = palWord.pop();

  if (first.toLowerCase() == last.toLowerCase()){
    return palindromeTest(palWord.join(""));
  } else {
    return "Not a Palindrome";
  }
}

// export default palindromeTest;

module.exports = {
  palindromeTest: palindromeTest
};
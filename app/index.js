document.addEventListener("DOMContentLoaded", function() {
  initialSetup();
});

const palindromeTest = (input) => {
  const palWord = input.split("");

  if (palWord.length <= 1){
    return "Palindrome";
  }

  const first = palWord.shift();
  const last = palWord.pop();

  if (first == last){
    return palindromeTest(palWord.join(""));
  } else {
    return "Not a Palindrome";
  }
}

const initialSetup = () => {
  // Add event listener to form
  const formEl = document.getElementById("pal-form");
  formEl.addEventListener("submit", e => onSubmit(e));
}

const onSubmit = (e) => {
  e.preventDefault();

  // Clear results div
  let resultEl = document.getElementById("result");
  while (resultEl.firstChild){
    resultEl.removeChild(resultEl.firstChild);
  }

  // Get user input and call Palindrome Test
  const el = document.getElementById("textfield")
  const result = palindromeTest(el.value.toLowerCase());

  // Display the result
  let p = document.createElement("h3");
  p.innerHTML = result;
  resultEl.appendChild(p);
}
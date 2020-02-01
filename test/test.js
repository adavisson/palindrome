let expect = require ("chai").expect;
let palindromeTest = require("../app/palindrome");
let longestWord = require("../app/longestWord");

describe("Palindrome Test", function() {
  describe("returns 'Palindrome' when the word is a palindrome", function() {
    it("returns 'Palindrome' for the word 'level'", function(){
      let test1 = palindromeTest.palindromeTest("level");
      expect(test1).to.equal("Palindrome");
    });

    it("returns 'Palindrome' for the word 'RaCecar'", function(){
      let test2 = palindromeTest.palindromeTest("RaCecar");
      expect(test2).to.equal("Palindrome");
    });

    it("returns 'Palindrome' for the word 'KAYAK'", function() {
      let test3 = palindromeTest.palindromeTest("KAYAK");
      expect(test3).to.equal("Palindrome");
    });
  });

  describe("returns 'Not a Palindrome' when the word is not a palindorome", function() {
    it("returns 'Not a Palindrome' for the word 'hello'", function(){
      let test1 = palindromeTest.palindromeTest("hello");
      expect(test1).to.equal("Not a Palindrome");
    });

    it("returns 'Not a Palindrome' for the word 'RaCeDog'", function(){
      let test2 = palindromeTest.palindromeTest("RaCeDog");
      expect(test2).to.equal("Not a Palindrome");
    });

    it("returns 'Not a Palindrome' for the word 'GOODBYE'", function(){
      let test3 = palindromeTest.palindromeTest("GOODBYE");
      expect(test3).to.equal("Not a Palindrome");
    });
  })
});

describe("Longest Word Test", function(){
  it("returns the longest word of a string", function(){
    let word1 = longestWord.longestWord("a dog is smelly");
    let word2 = longestWord.longestWord("blue yellow green red");
    let word3 = longestWord.longestWord("Henry Sue Jake");

    expect(word1).to.equal("smelly");
    expect(word2).to.equal("yellow");
    expect(word3).to.equal("Henry");
  })
});
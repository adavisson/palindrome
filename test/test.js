let expect = require ("chai").expect;
let palindromeTest = require("../app/palindrome");
let longestWord = require("../app/longestWord");
let modifyString = require("../app/modifyString");
let sameNecklace = require("../app/sameNecklace");

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

describe("Modify String Test", function(){
  it("accepts a string, returns the string in reverse without vowels", function(){
    let test1 = modifyString.modifyString("Hello World");
    let test2 = modifyString.modifyString("foobar123");
    let test3 = modifyString.modifyString("I like to riDe Bicycles");

    expect(test1).to.equal("dlrW llH");
    expect(test2).to.equal("321rbf");
    expect(test3).to.equal("slcycB Dr t kl ");
  })
})

describe("TestFunc", function(){
  it("properly concatenates strings", function(){
    let test1 = modifyString.testFunc();
    let test2 = modifyString.testFunc({
      status: true,
      responseMessages: [
        "This is a test",
        "And you",
        "passed"
      ]
    });
    let test3 = modifyString.testFunc({
      status: true,
      responseMessages: [
        "Test passed"
      ]
    });
    let test4 = modifyString.testFunc({
      status: false
    });

    expect(test1).to.equal("hello, timmy, bye.");
    expect(test2).to.equal("This is a test, And you, passed.");
    expect(test3).to.equal("Test passed.");
    expect(test4).to.equal("failed");
  })
})

describe ("Same Necklace", function() {
  it("properly identifies necklaces with the same letters in order", function(){
    let test1 = sameNecklace.sameNecklace('Nicole', 'Nicole')
    let test2 = sameNecklace.sameNecklace('andrew', 'andrew')
    let test3 = sameNecklace.sameNecklace('abcdefg', 'abcdefg')

    expect(test1).to.equal(true)
    expect(test2).to.equal(true)
    expect(test3).to.equal(true)
  })
  it("proplerly identifies necklaces with the same letters out of order", function(){
    let test1 = sameNecklace.sameNecklace('Nicole', 'elociN')
    let test2 = sameNecklace.sameNecklace('andrew', 'drewna')
    let test3 = sameNecklace.sameNecklace('adfebx', 'debafx')

    expect(test1).to.equal(true)
    expect(test2).to.equal(true)
    expect(test3).to.equal(true)
  })
  it("properly identifies when necklaces are not the same", function() {
    let test1 = sameNecklace.sameNecklace('Nicole', 'Nikole')
    let test2 = sameNecklace.sameNecklace('andrew', 'timmy')
    let test3 = sameNecklace.sameNecklace('x', 'xx')

    expect(test1).to.equal(false)
    expect(test2).to.equal(false)
    expect(test3).to.equal(false)
  })
})
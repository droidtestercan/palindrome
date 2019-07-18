module.exports = Phrase;

// Adds `reverse` to all strings.
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}

function Phrase(content) {
  this.content = content;

  this.processor = function(string) {
    return this.content.toLowerCase();
  }

  this.processedContent = function processedContent() {
    return this.letters().toLowerCase();
  }

  // Returns true if the phrase is a palindrome, false otherwise.
  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
  }
  // Returns the letters in the content.
    // For example:
    //   new Phrase("Hello, world!").letters() === "Helloworld"
    this.letters = function letters() {
      const lettersRegEx = /[a-z]/gi;
      return (this.content.match(lettersRegEx) || []).join("");
    }
}

function TranslatedPhrase(content, translation) {
  this.content = content;
  this.translation = translation;

  // Returns translation processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.processor(this.translation);
  }
}

TranslatedPhrase.prototype = new Phrase();

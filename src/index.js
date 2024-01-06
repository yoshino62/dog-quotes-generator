function generateQuote(event) {
  event.preventDefault();

  new Typewriter("#quote", {
    strings: "Happiness is a warm puppy.",
    autoStart: true,
    cursor: " ",
    delay: 20,
  });
}

let quoteFormElement = document.querySelector("#quote-generator-form");
quoteFormElement.addEventListener("submit", generateQuote);

function displayQuote(response) {
  console.log("quote generated");

  new Typewriter("#quote", {
    strings: response.data.answer,
    autoStart: true,
    cursor: " ",
    delay: 20,
  });
}

function generateQuote(event) {
  event.preventDefault();

  let instuctionsInput = document.querySelector("#user-intructions");
  let apiKey = "903bbfab25a139539824b07e1tfo211c";
  let context =
    "You are a dog lover and know a lot of the quotes for dog lovers. Your mission is to generate a short quote in basic HTML form and separate each lines with <br />. Make sure to follow the user instructions and provide one quote. Do not provide more than one quote. DO NOT include a title. Sign the quote with 'SheCodes AI' inside a <strong> element at the end of the quote and make sure the color is feab0f.";
  let prompt = `User instructions: Generate a quote for a dog lover based on thier mood follow ${instuctionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let quoteElement = document.querySelector("#quote");
  quoteElement.classList.remove("hidden");
  quoteElement.innerHTML = `<div class="generating">Generating a Quote about ${instuctionsInput.value} for you🐾🐾🐾</div>`;

  console.log("generating quote");
  console.log(`prompt, ${prompt}`);
  console.log(`context, ${context}`);

  axios.get(apiUrl).then(displayQuote);
}

let quoteFormElement = document.querySelector("#quote-generator-form");
quoteFormElement.addEventListener("submit", generateQuote);

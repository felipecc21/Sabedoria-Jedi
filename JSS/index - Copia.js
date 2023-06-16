var phrasesArray = []; 

function loadPhrases() {
  return fetch('../DATA/phrases.txt')
    .then(response => response.text())
    .then(text => text.split('\n').filter(Boolean));
}

function generateRandomPhrase() {
  var introElement = document.getElementById("intro");
  var generateButton = document.getElementById("generateButton");
  var randomPhraseElement = document.getElementById("randomPhrase");
  var newPhraseButton = document.getElementById("newPhraseButton");

  if (phrasesArray.length === 0) {
    // Se o array de frases estiver vazio, esconder elementos e carregar as frases
    introElement.style.opacity = 1; // Define a opacidade inicial como 1
  
    // Animação de fade-out da introdução
    var fadeOutInterval = setInterval(function() {
      introElement.style.opacity = parseFloat(introElement.style.opacity) - 0.1;
      if (parseFloat(introElement.style.opacity) <= 0) {
        clearInterval(fadeOutInterval);
        introElement.style.display = "none";
        generateButton.style.display = "none";
        loadPhrases()
          .then(phrases => {
            phrasesArray = phrases;
            displayRandomPhrase();
          });
      }
    }, 100);
  } else {
    // Se o array de frases já estiver carregado, apenas exibir uma frase aleatória
    displayRandomPhrase();
  }

  function displayRandomPhrase() {
    var randomIndex = Math.floor(Math.random() * phrasesArray.length);
    var randomPhrase = phrasesArray[randomIndex];
  
    // Define a opacidade inicial como 0
    randomPhraseElement.style.opacity = 0;
    randomPhraseElement.innerHTML = randomPhrase;
    newPhraseButton.style.display = "block";
  
    // Animação de fade-in da frase aleatória
    var fadeInInterval = setInterval(function() {
      randomPhraseElement.style.opacity = parseFloat(randomPhraseElement.style.opacity) + 0.1;
      if (parseFloat(randomPhraseElement.style.opacity) >= 1) {
        clearInterval(fadeInInterval);
      }
    }, 100);
  }
}
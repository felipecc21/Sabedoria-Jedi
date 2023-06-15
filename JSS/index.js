function loadPhrases(callback) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var phrasesText = xhr.responseText;
        var phrasesArray = phrasesText.split("\n");
        callback(phrasesArray);
      }
    };
    xhr.open("GET", "./phrases.txt", true);
    xhr.send();
  }
  
  function generateRandomPhrase() {
    console.log('Teste')
    loadPhrases(function(phrases) {
      var randomIndex = Math.floor(Math.random() * phrases.length);
      var randomPhrase = phrases[randomIndex];
      document.getElementById("randomPhrase").innerHTML = randomPhrase;
    });
  }
  
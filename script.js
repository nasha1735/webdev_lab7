function init() {

  const alertDiv = document.getElementById('entrybutton');
  const textInput = document.getElementById('entryinput');
  const outputText = document.getElementById('textoutput');

  alertDiv.addEventListener('click', function() {
    const userText = textInput.value;

    alert("McCory: " + userText);

    outputText.textContent = userText;
  });
}

window.addEventListener('load', init);

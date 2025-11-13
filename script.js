function init() {
  const textInput = document.getElementById('textInput');
  const displayHeading = document.getElementById('displayHeading');

  alertButton.addEventListener('click', function() {
    const userText = textInput.value;

    alert("McCory: " + userText);

    displayHeading.textContent = userText;
  });
}

window.addEventListener('load', init);
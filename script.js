function init() {
  const alertDiv = document.getElementById('alertDiv');
  const textInput = document.getElementById('textInput');
  const displayHeading = document.getElementById('displayHeading');

  alertDiv.addEventListener('click', function() {
  
    const userText = textInput.value;

    alert("YourNameHere: " + userText);


    displayHeading.textContent = userText;
  });
}

window.addEventListener('load', init);

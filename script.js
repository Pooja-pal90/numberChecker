function processNumber() {
    const input = document.getElementById("numberInput").value;
    const output = document.getElementById("output");
    const number = parseInt(input);
  
    if (isNaN(number)) {
      output.textContent = "Please enter a valid number.";
      return;
    }
  
    if (number < 0) {
      output.textContent = "Enter a positive value.";
    } else if (number % 2 === 0) {
      output.textContent = `Next 3 even numbers: ${number + 2}, ${number + 4}, ${number + 6}`;
    } else {
      output.textContent = `Next 3 odd numbers: ${number + 2}, ${number + 4}, ${number + 6}`;
    }
  }
  
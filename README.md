# numberChecker
# Number Checker Application

This is a simple web application that allows users to check the nature of a number (odd or even) and see the next three consecutive numbers of the same type (odd or even). The project consists of an HTML structure, CSS for styling, and JavaScript for functionality.

## Features
- Accepts a number input from the user.
- Displays a message if the input is invalid.
- Determines whether the input number is odd or even.
- Displays the next three odd or even numbers based on the input.

## File Structure

### HTML
The main structure of the application is defined in `index.html`. It includes:
- An input field for the user to enter a number.
- A button to trigger the JavaScript function.
- A section to display the output.

### CSS
The styling is managed by `style.css`. This file contains styles for:
- Centering the content on the page.
- Making the interface user-friendly.

### JavaScript
The logic for the application resides in `script.js`. This script handles:
- Validating the input.
- Determining whether the number is odd or even.
- Calculating and displaying the next three numbers of the same type.

## How to Use
1. Clone or download the repository.
2. Ensure the project includes the following files:
   - `index.html`
   - `style.css`
   - `script.js`
3. Open the `index.html` file in a web browser.
4. Enter a number in the input field and click the **Check Number** button.
5. View the result in the output section.

## Example Usage
- **Input**: `4`  
  **Output**: `Next 3 even numbers: 6, 8, 10`

- **Input**: `7`  
  **Output**: `Next 3 odd numbers: 9, 11, 13`

- **Input**: `abc`  
  **Output**: `Please enter a valid number.`

## Technologies Used
- **HTML5** for structure
- **CSS3** for styling
- **JavaScript** for interactivity

## Future Improvements
- Add styling to enhance the visual appeal of the application.
- Enable keyboard events to trigger the calculation.
- Display a history of previous inputs and results.
- Provide an option to reset the input and output fields.



// Get inputs from the user.
const inputs = [];
while (true) {
    const inputString = prompt("Enter an input (or 'q' to quit): ");
    if (inputString === 'q') {
        break;
    }
    inputs.push(inputString);
}
// Generate a random number between 0 and 1.
const randomNumber = Math.random();
// If the random number is less than 0.5, output the inputs.
if (randomNumber < 0.5) {
    for (const inputString of inputs) {
        console.log(inputString);
    }
}
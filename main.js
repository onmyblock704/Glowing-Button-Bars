//Get all buttons
const buttons = document.querySelectorAll(".glow-bar button");

//Loop through all buttons
buttons.forEach(button => {
  //Add click event to each button
  button.addEventListener("click", () => {
    //Toggle pressed button class
    button.classList.toggle("button-pressed");
  });
});
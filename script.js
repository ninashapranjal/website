function animateHeart(button) {
  // Toggle the active/liked color state
  button.classList.toggle('liked');
  
  // Add the animation class
  button.classList.add('is-animated');
  
  // Remove the class after animation finishes so it can be re-triggered
  setTimeout(() => {
    button.classList.remove('is-animated');
  }, 400); // Matches CSS animation duration (0.4s)
}

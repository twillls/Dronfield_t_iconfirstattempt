(() => {
  //stub
  console.log('fired!');

  //select elemts with JavaScript

  //setting up a variable using the let keyword,
  //and using a CSS selector to find the element we want to use

  // Variables should always come first, either "let" or "const" statements

  //"let" stores the referene to element as a variable (in memory) we can call to it
  let svgGraphic = document.querySelector("#badgeSVG"),
      mainHeadline = document.querySelector(".main-headline"),
      svgHeadline = document.querySelector(".svgHeading"),
      swapTextButton = document.querySelector(".switch-type");

  //functions are reusable pieces of code that you can run any time
  function logMyId() {
    console.log(this.id);

    this.style.opacity = 0.5;
  }

  function swapText(){
    mainHeadline.textContent = "Now you're something else!";
    mainHeadline.classList.toggle("selected");
    svgHeadline.textContent = "We're switching it Up!";
    svgHeadline.classList.toggle("selected");
  }

  //events always go at the bottom

  svgGraphic.addEventListener("click", logMyId);
  swapTextButton.addEventListener("click", swapText)

})();

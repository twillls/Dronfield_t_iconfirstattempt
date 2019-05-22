(() => {
  //stub
  console.log('fired!');

  //select elemts with JavaScript

  //setting up a variable using the let keyword,
  //and using a CSS selector to find the element we want to use

  // Variables should always come first, either "let" or "const" statements

  //"let" stores the referene to element as a variable (in memory) we can call to it
  let mainHeadline = document.querySelector(".main-headline"),
      svgHeadline = document.querySelector(".svgHeading"),
      swapTextButton = document.querySelector(".switch-type"),
      allImages = document.querySelectorAll("#image-container img"),
      objectButton = document.querySelector(".container button");

  //functions are reusable pieces of code that you can run any time
  function logMyId() {
    console.log(this.id);
    // toggle a class here with classList
  }

  function swapText(){
    mainHeadline.textContent = "Now you're something else!";
    mainHeadline.classList.toggle("selected");
    svgHeadline.textContent = "We're switching it Up!";
    svgHeadline.classList.toggle("selected");
  }

  function logTheSVG(){
    console.log(this.previousElementSibling.id);
  }

  //events always go at the bottom

  swapTextButton.addEventListener("click", swapText);

  // select and loop through a bunch of items at once -> "one to many" relationship
  allImages.forEach(item => {
    item.addEventListener("click", logMyId);
  });

  objectButton.addEventListener("click", logTheSVG);
})();

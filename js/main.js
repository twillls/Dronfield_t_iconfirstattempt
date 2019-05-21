(() => {
  //stub
  console.log('fired!');

  //select elemts with JavaScript

  //setting up a variable using the let keyword,
  //and using a CSS selector to find the element we want to use

  //"let" stores the referene to element as a variable (in memory) we can call to it
  let svgGraphic = document.querySelector("#badgeSVG"),
      mainHeadline = document.querySelector(".main-headline"),
      svgHeadline = document.querySelector(".svgHeading");

  //functions are reusable pieces of code that you can run any time
  function logMyId() {
    console.log(this.id);
  }

  svgGraphic.addEventListener("click", logMyId);

  mainHeadline.textContent = "Now you're something else!";

  svgHeadline.textContent = "We're switching it Up!";
})();

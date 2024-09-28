let switchBtn = document.querySelector(".switch-btn");
let loginContainer = document.querySelector(".login-container");
let signupContainer = document.querySelector(".signup-container");
let sliderText = document.querySelector(".slider-text");
let mainContainer = document.querySelector(".main-container");
let subContainer = document.querySelector(".sub-container");
let sliderContainer = document.querySelector(".slider-container");

switchBtn.addEventListener("click", () => {
  if (loginContainer.style.display === "none") {
    mainContainer.classList.toggle("rotate");
    subContainer.classList.toggle("rotate-sub");
    sliderContainer.classList.toggle("rotate-sub");

    if (window.innerWidth > 750) {
      mainContainer.style.flexDirection = "row";
    } else if (window.innerWidth <= 750) {
      mainContainer.style.flexDirection = "column-reverse";
    }
    signupContainer.style.display = "none";
    loginContainer.style.display = "block";
    sliderText.innerText = "Do not have an account?";
    switchBtn.innerText = "Create one!";
  } else {
    mainContainer.classList.toggle("rotate");
    subContainer.classList.toggle("rotate-sub");
    sliderContainer.classList.toggle("rotate-sub");

    if (window.innerWidth > 750) {
      mainContainer.style.flexDirection = "row-reverse";
    } else if (window.innerWidth <= 750) {
      mainContainer.style.flexDirection = "column";
    }
    signupContainer.style.display = "block";
    loginContainer.style.display = "none";
    sliderText.innerText = "Already have an account?";
    switchBtn.innerText = "Login";
  }
});

let direction = () => {
  if (window.innerWidth <= 750) {
    window.location.reload();
  } else if (window.innerWidth > 750) {
    window.location.reload();
  }
};

window.addEventListener("resize", direction);

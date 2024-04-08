const sections = document.querySelectorAll(".section");
const sectBtns = document.querySelectorAll(".controlls");
const sectBtn = document.querySelectorAll(".control");
const allsections = document.querySelector(".main-content");

function PageTransitions() {
  for (let i = 0; i < sectBtn.length; i++) {
    sectBtn[i].addEventListener("click", function () {
      let currentBtn = document.querySelectorAll(".active-btn");
      currentBtn[0].className = currentBtn[0].className.replace(
        "active-btn",
        "control"//
      );
      this.className += " active-btn"; 
    });
  }

  allsections.addEventListener("click", (eu) => {
    const ido = eu.target.dataset.id; 
    if (ido) {
      sectBtn.forEach((btn) => {
        btn.classList.remove("active"); 
      });
      eu.target.classList.add("active"); 

      sections.forEach((section) => {
        section.classList.remove("active");
      });
      const element = document.getElementById(ido);
      element.classList.add("active"); 
    }

  });

  const themeBtn = document.querySelector(".theme-btn");
  themeBtn.addEventListener("click", () => {
    let element = document.body;
    element.classList.toggle("light-mode");
  });
}

PageTransitions();

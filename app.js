var bar = document.querySelectorAll(".bar");
    var hamburgersection = document.querySelector("#hamburger_section");
    hamburgersection.onmouseover = function () {
      for (let j = 0; j < 3; j++) {
        bar[j].style.height = "4px";
        bar[j].style.width = "30px";
      }
    };
    hamburgersection.onmouseout = function () {
      for (let j = 0; j < 3; j++) {
        bar[j].style.height = "3px";
        bar[j].style.width = "25px";
      }
    };

    var div2 = document.querySelector("#div2");
    hamburgersection.addEventListener("click", () => {
      hamburgersection.classList.toggle("active");
      div2.classList.toggle("active");
    });




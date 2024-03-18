const nav = document.querySelector("nav");
//console.log(nav);
window.addEventListener("scroll", () => {
  //console.log(window.scrollY);
  //donne la valeur en pixel qui a été scroller depuis le haut de la page
  if (window.scrollY > 0) {
    nav.style.top = 0;
  } else {
    nav.style.top = "0";
  }
});

//_____________________________________________________________________________________________________________________//

const mousemove = document.querySelector(".mousemove");

window.addEventListener("mousemove", (e) => {
  //console.log(e);
  mousemove.style.left = e.pageX + "px";
  mousemove.style.top = e.pageY + "px";
});
window.addEventListener("mousedown", () => {
  // console.log("test");
  mousemove.style.transform = "scale(2) translate(-25% ,-25%)";
});
window.addEventListener("mouseup", () => {
  // console.log("test");
  mousemove.style.transform = "scale(1) translate(-50% ,-50%)";
  mousemove.style.border = "2px solid black";
});

//_____________________________________________________________________________________________________________________//

const button1 = document.querySelector("#btn1");
const p1 = document.querySelector(".p1");

btn1.addEventListener("click", () => {
  if (p1.style.display == "block") {
    p1.style.display = "none";
  } else {
    p1.style.display = "block";
  }
});

const button2 = document.querySelector("#btn2");
const p2 = document.querySelector(".p2");

btn2.addEventListener("click", () => {
  if (p2.style.display == "block") {
    p2.style.display = "none";
  } else {
    p2.style.display = "block";
  }
});

const button3 = document.querySelector("#btn3");
const p3 = document.querySelector(".p3");

btn3.addEventListener("click", () => {
  if (p3.style.display == "block") {
    p3.style.display = "none";
  } else {
    p3.style.display = "block";
  }
});

const button4 = document.querySelector("#btn4");
const p4 = document.querySelector(".p4");

btn4.addEventListener("click", () => {
  if (p4.style.display == "block") {
    p4.style.display = "none";
  } else {
    p4.style.display = "block";
  }
});

const button5 = document.querySelector("#btn5");
const p5 = document.querySelector(".p5");

btn5.addEventListener("click", () => {
  if (p5.style.display == "block") {
    p5.style.display = "none";
  } else {
    p5.style.display = "block";
  }
});

const button6 = document.querySelector("#btn6");
const p6 = document.querySelector(".p6");

btn6.addEventListener("click", () => {
  if (p6.style.display == "block") {
    p6.style.display = "none";
  } else {
    p6.style.display = "block";
  }
});

const button7 = document.querySelector("#btn7");
const p7 = document.querySelector(".p7");

btn7.addEventListener("click", () => {
  if (p7.style.display == "block") {
    p7.style.display = "none";
  } else {
    p7.style.display = "block";
  }
});

const button8 = document.querySelector("#btn8");
const p8 = document.querySelector(".p8");

btn8.addEventListener("click", () => {
  if (p8.style.display == "block") {
    p8.style.display = "none";
  } else {
    p8.style.display = "block";
  }
});

//_____________________________________________________________________________________________________________________//

const pieCanvas = document.getElementById("pieCanvas");
//console.log(barCanvas);

const pieChart = new Chart(pieCanvas, {
  type: "pie",
  data: {
    labels: ["Management", "Service", "Gestion", "commerce", "Informatique"],
    datasets: [
      {
        data: [255, 255, 130, 130, 30],
        backgroundColor: [
          "crimson",
          "lightgreen",
          "lightblue",
          "violet",
          "#0a369d",
        ],
        hoverOffset: 40,
      },
    ],
  },
  options: {
    aspectRatio: 2,
  },
});

//_____________________________________________________________________________________________________________________//

const modalContainer = document.querySelector(".modal-container");
const modalTriggers = document.querySelectorAll(".modal-trigger");

modalTriggers.forEach((trigger) =>
  trigger.addEventListener("click", toggleModal)
);

function toggleModal() {
  modalContainer.classList.toggle("active");
}

//___________________________________________________brouillon_________________________________________________________//

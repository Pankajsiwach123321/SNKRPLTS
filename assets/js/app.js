let nav = document.querySelector(".nav");
let menubar = document.querySelector(".menubar");
let finish = document.querySelectorAll(".finish");
let overlay = document.querySelector(".over-layer");
let bgbody = document.querySelector(".bg-bodys");
let fix1 = document.querySelector(".fix1");
let fix2 = document.querySelector(".fix2");
let fix3 = document.querySelector(".fix3");
nav.addEventListener("click", function () {
  menubar.classList.toggle("left-0");
  fix1.classList.toggle("fixer1");
  fix2.classList.toggle("fixer2");
  fix3.classList.toggle("fixer3");
  overlay.classList.toggle("left-0");
  bgbody.classList.toggle("over_flow");
  nav.classList.toggle("left-corner");
});
overlay.addEventListener("click", function () {
  menubar.classList.toggle("left-0");
  fix1.classList.toggle("fixer1");
  fix2.classList.toggle("fixer2");
  fix3.classList.toggle("fixer3");
  overlay.classList.toggle("left-0");
  bgbody.classList.toggle("over_flow");
  nav.classList.toggle("left-corner");
});
finish.forEach((e) => {
  e.addEventListener("click", function () {
    menubar.classList.remove("left-0");
    bgbody.classList.remove("over_flow");
    fix1.classList.toggle("fixer1");
    overlay.classList.toggle("left-0");
    fix2.classList.toggle("fixer2");
    fix3.classList.toggle("fixer3");
    nav.classList.toggle("left-corner");
  });
});
/// add ///
let p = document.querySelector("#number");
let add = document.querySelector("#add");
let subtract = document.querySelector("#subtract");
let cart = document.querySelector("#carto");
// add subtract
add.addEventListener("click", function () {
  if (p.innerHTML == 10) {
    cart.classList.add("shake");
    setTimeout(() => {
      cart.classList.remove("shake");
    }, 300);
  } else if (p.innerHTML < 10) {
    p.innerHTML = +p.innerHTML + 1;
  }
  // p.innerHTML = +p.innerHTML + 1;
});
subtract.addEventListener("click", function () {
  if (p.innerHTML == 1) {
    cart.classList.add("shake");
    setTimeout(() => {
      cart.classList.remove("shake");
    }, 300);
  } else if (p.innerHTML > 1) {
    p.innerHTML = +p.innerHTML - 1;
  }
});
// tab///
function opentabs(Tabid) {
  const tabcontent = document.querySelectorAll(".my-content");
  tabcontent.forEach((Tabcontent) => {
    Tabcontent.classList.add("d_none");
    Tabcontent.classList.remove("d_block");
  });
  const mytabshow = document.getElementById(Tabid);
  mytabshow.classList.add("d_block");

  const activecontent = document.querySelectorAll(".action");
  activecontent.forEach((activeunder) => {
    activeunder.classList.remove("activeunder");
  });
  const activetab = document.querySelector(
    `button[onclick="opentabs('${Tabid}')"]`
  );
  activetab.classList.add("activeunder");
}
opentabs("tab1");
// related product
function openproduct(Productid) {
  const productcontent = document.querySelectorAll(".allproduct");
  productcontent.forEach((Productcontent) => {
    Productcontent.classList.add("d_none");
    Productcontent.classList.remove("d_block");
  });
  const myproduct = document.getElementById(Productid);
  myproduct.classList.add("d_block");

  const activeno = document.querySelectorAll(".box-arround-number");
  activeno.forEach((activenumder) => {
    activenumder.classList.remove("activenumber");
  });
  const activenumber = document.querySelector(
    `button[onclick="openproduct('${Productid}')"]`
  );
  activenumber.classList.add("activenumber");
}
openproduct("productset1");
// color-shoes
function myshowes(colorId) {
  const mymacthcolor = document.querySelectorAll(".color-macth");
  mymacthcolor.forEach((mymacth) => {
    mymacth.classList.add("color-macth");
    mymacth.classList.remove("color-macth-active");
  });
  const myproduct = document.getElementById(colorId);
  myproduct.classList.add("color-macth-active");

  const activerang = document.querySelectorAll(".box-border");
  activerang.forEach((activerango) => {
    activerango.classList.remove("activecolor-size");
  });

  const activecolor = document.querySelector(
    `div[onclick="myshowes('${colorId}')"]`
  );
  activecolor.classList.add("activecolor-size");
}
setTimeout(() => {
  document.getElementById("preloder").classList.add("d-none");
  document.body.classList.remove("overflow-hidden");
}, 2000);

// backtotop

function backtop() {
  window.scrollTo(0, 0);
}

window.addEventListener("scroll", function () {
  const mybackto = document.getElementById("backtops");
  if (window.scrollY > 300) {
    mybackto.style.display = "block";
    mybackto.style.background = "white";
  }
  else {
    mybackto.style.display = "none";
  }
});

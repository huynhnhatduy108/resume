// menu show
const navMenu = document.getElementById("nav-menu"),
  toggleMenu = document.getElementById("nav-toggle"),
  closeMenu = document.getElementById("nav-close");

// show
toggleMenu.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});
// hidden
closeMenu.addEventListener("click", () => {
  navMenu.classList.remove("show");
});

// Remove menu
const navLink = document.querySelectorAll(".nav_link");

function linkAction() {
  navMenu.classList.remove("show");
}
navLink.forEach((link) => link.addEventListener("click", linkAction));

// Scroll section
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", scrollActive);

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((curren) => {
    const sectionHeight = curren.offsetHeight;
    const sectionTop = curren.offsetTop - 50;
    sectionId = curren.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active");
    }
  });
}

function onSumit() {
  alert("You have successfully sent.");
  // const scriptURL =
  //   "https://script.google.com/macros/s/AKfycbwCt8Nx7CECpb0LhqhJIQFQasTPCLyWTATaXsc3rYc3ZScB2FwX-Bv44hq_BNznuO8I_A/exec";
  // const form = document.forms["google-sheet"];
  // // console.log(FormData(form));

  // form.addEventListener("submit", (e) => {
  //   e.preventDefault();
  //   fetch(scriptURL, { method: "POST", body: new FormData(form) })
  //     .then((response) => alert("You have successfully submitted."))
  //     .catch((error) => console.error("Error!", error.message));
  // });
}

 // QR CODE
 var qrcode = new QRCode("id-qrcode", {
  text: "https://github.com/huynhnhatduy108",
  width: 180,
  height: 180,
  colorDark: "#000000",
  colorLight: "#ffffff",
  correctLevel: QRCode.CorrectLevel.H,
});
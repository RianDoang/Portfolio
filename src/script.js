// Typing teks profile
const elts = {
  text1: document.getElementById("text1"),
  text2: document.getElementById("text2"),
  text3: document.getElementById("text3"),
  text4: document.getElementById("text4"),
};

const texts = [
  "Front-End Engineer",
  "Web Designer",
  "Network Infrastructure",
  "Computer Science",
];
let currentTextIndex = 0;
let currentCharIndex = 0;
let currentElement = elts.text1;
let isDeleting = false;

const typingSpeed = 100; // Speed of typing
const deletingSpeed = 20; // Speed of deleting
const delayBetweenTexts = 2000; // Delay between switching texts

function type() {
  const currentText = texts[currentTextIndex];
  if (isDeleting) {
    currentElement.textContent = currentText.substring(0, currentCharIndex - 1);
    currentCharIndex--;
    if (currentCharIndex == 0) {
      isDeleting = false;
      currentTextIndex = (currentTextIndex + 1) % texts.length;
      currentElement = currentElement === elts.text1 ? elts.text2 : elts.text1;
      setTimeout(type, typingSpeed);
    } else {
      setTimeout(type, deletingSpeed);
    }
  } else {
    currentElement.textContent = currentText.substring(0, currentCharIndex + 1);
    currentCharIndex++;
    if (currentCharIndex == currentText.length) {
      isDeleting = true;
      setTimeout(type, delayBetweenTexts);
    } else {
      setTimeout(type, typingSpeed);
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  type();
});

document.addEventListener("DOMContentLoaded", function () {
  var profileLink = document.getElementById("primary");
  var otherLinks = document.querySelectorAll("ul.flex li a:not(#primary)");

  otherLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      profileLink.removeAttribute("id");
    });
  });
});
// End Typing teks

// Hamburger
const hamburger = document.querySelector("#hamburgerMenu");
const navMenu = document.querySelector("#navMenu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// Klik di luar hamburger
window.addEventListener("click", function (e) {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  }
});

// Emailjs Init
(function () {
  emailjs.init("0dM0z_2cs6_UVCki0");
})();

// Send to email
function validate() {
  //
  let teks1 = document.getElementById("teks1");
  let teks2 = document.getElementById("teks2");
  let teks3 = document.getElementById("teks3");
  // Data user
  let alert = document.querySelector("#alertContact");
  let form = document.querySelector("form");
  let name = document.querySelector("#name");
  let email = document.querySelector("#email");
  let pesan = document.querySelector("#message");
  let btnKirim = document.querySelector(".btnKirim");

  teks2.classList.add("reset", "hidden", "opacity-hidden");
  teks3.classList.add("reset", "hidden", "opacity-hidden");

  btnKirim.addEventListener("click", function (e) {
    e.preventDefault();
    if (name.value == "" || email.value == "" || pesan.value == "") {
      inputempty();
    } else {
      teks1.classList.add("fade-out-up");

      setTimeout(() => {
        teks1.classList.add("hidden");
      }, 500);

      setTimeout(() => {
        teks2.classList.add("fade-in-down");
        teks2.classList.remove("reset");
        teks2.classList.remove("opacity-hidden");
      }, 500);

      setTimeout(() => {
        teks2.classList.remove("hidden");
      }, 200);

      setTimeout(() => {
        teks2.classList.remove("fade-in-down");
        teks2.classList.add("fade-out-up");
      }, 3000);

      setTimeout(() => {
        teks2.classList.add("hidden");
      }, 3200);

      setTimeout(() => {
        teks3.classList.add("fade-in-down");
        teks3.classList.remove("reset");
        teks3.classList.remove("opacity-hidden");
      }, 3400);

      setTimeout(() => {
        teks3.classList.remove("hidden");
        //
        // sendmail(name.value, email.value, pesan.value);
        console.log("Pesan berhasil terkirim");
        alert.classList.remove("hidden");
        alert.classList.add("flex");
        form.reset();
      }, 3200);

      setTimeout(() => {
        teks3.classList.remove("fade-in-down");
        teks3.classList.add("fade-out-up");
      }, 4500);

      setTimeout(() => {
        teks1.classList.add("reset");
        teks1.classList.add("hidden");
        teks1.classList.add("opacity-hidden");
      }, 4600);

      setTimeout(() => {
        teks1.classList.remove("reset");
        teks1.classList.remove("opacity-hidden");
      }, 4700);

      setTimeout(() => {
        teks3.classList.add("hidden");
        teks1.classList.add("reset");
        teks1.classList.remove("hidden");
      }, 4800);

      setTimeout(() => {
        teks1.classList.remove("reset");
        teks1.classList.add("fade-in-down");
      }, 5100);
    }
  });
}
validate();

function sendmail(name, email, pesan) {
  emailjs.send("service_9o4p2pa", "template_dd8ebfh", {
    from_name: name,
    to_name: email,
    message: pesan,
  });
}

// Button to top
window.onscroll = function () {
  const header = document.querySelector("nav");
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector("#to-top");

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
    toTop.classList.remove("hidden");
    toTop.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");
    toTop.classList.remove("flex");
    toTop.classList.add("hidden");
  }
};

// Btn Close Alert Contact
document.getElementById("closeContact").addEventListener("click", function () {
  const alert = document.getElementById("alertContact");
  alert.classList.add("fade-out");

  setTimeout(() => {
    alert.style.display = "none";
  }, 300);
});

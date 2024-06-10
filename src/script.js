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
  let form = document.querySelector("form");
  let name = document.querySelector("#name");
  let email = document.querySelector("#email");
  let pesan = document.querySelector("#message");
  let btnKirim = document.querySelector(".btnKirim");

  btnKirim.addEventListener("click", function (e) {
    e.preventDefault();
    if (name.value == "" || email.value == "" || pesan.value == "") {
      inputempty();
    } else {
      sendmail(name.value, email.value, pesan.value);
      console.log("Pesan berhasil terkirim");
      form.reset();
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

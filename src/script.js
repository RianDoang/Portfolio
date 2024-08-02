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

  setTimeout(() => {
    navMenu.classList.toggle("opacity-0");
    navMenu.classList.toggle("-translate-y-4");
  }, 5);
});

// Klik di luar hamburger
window.addEventListener("click", function (e) {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");

    setTimeout(() => {
      navMenu.classList.toggle("opacity-0");
      navMenu.classList.toggle("-translate-y-4");
    }, 5);
  }
});

// Emailjs Init
(function () {
  emailjs.init("0dM0z_2cs6_UVCki0");
})();
// End Emailjs Init

// Send to email
function validate() {
  //
  let teks1 = document.getElementById("teks1");
  let teks2 = document.getElementById("teks2");
  let teks3 = document.getElementById("teks3");
  // Data user
  let alertSuccess = document.querySelector("#alertContactSuccess");
  let alertError = document.querySelector("#alertContactError");
  let alertErrorEmail = document.querySelector("#alertContactErrorEmail");
  let form = document.querySelector("form");
  let name = document.querySelector("#name");
  let email = document.querySelector("#email");
  let pesan = document.querySelector("#message");
  let btnKirim = document.querySelector(".btnKirim");

  teks1.classList.add("fade-in-down");
  teks2.classList.add("reset", "hidden", "opacity-hidden");
  teks3.classList.add("reset", "hidden", "opacity-hidden");

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  btnKirim.addEventListener("click", function (e) {
    e.preventDefault();

    // Menyembunyikan semua alert sebelum menampilkan yang baru
    alertError.classList.remove("flex");
    alertError.classList.add("hidden");
    alertErrorEmail.classList.remove("flex");
    alertErrorEmail.classList.add("hidden");
    alertSuccess.classList.remove("flex");
    alertSuccess.classList.add("hidden");

    if (name.value === "" || email.value === "" || pesan.value === "") {
      // Tampilkan alertError jika ada input yang kosong
      alertError.classList.remove("hidden");
      alertError.classList.add("flex");

      // Tambahkan border merah ke input yang kosong
      if (name.value === "") {
        name.classList.add("border-red-500");
      } else {
        name.classList.remove("border-red-500");
      }

      if (email.value === "") {
        email.classList.add("border-red-500");
      } else {
        email.classList.remove("border-red-500");
      }

      if (pesan.value === "") {
        pesan.classList.add("border-red-500");
      } else {
        pesan.classList.remove("border-red-500");
      }
    } else if (!isValidEmail(email.value)) {
      // Tampilkan alertErrorEmail jika email tidak valid
      alertErrorEmail.classList.remove("hidden");
      alertErrorEmail.classList.add("flex");

      // Tambahkan border merah ke input email jika email tidak valid
      email.classList.add("border-red-500");
    } else {
      // Reset borders jika input sudah benar
      name.classList.remove("border-red-500");
      email.classList.remove("border-red-500");
      pesan.classList.remove("border-red-500");

      //
      teks1.classList.add("fade-out-up");
      teks1.classList.remove("fade-in-down");

      setTimeout(() => {
        teks1.classList.add("hidden");
      }, 200);

      setTimeout(() => {
        teks1.classList.add("reset", "hidden", "opacity-hidden");
        teks2.classList.remove("reset");
        teks2.classList.remove("opacity-hidden");
      }, 500);

      setTimeout(() => {
        teks2.classList.remove("hidden");
      }, 200);

      setTimeout(() => {
        teks2.classList.remove("fade-in-down");
        teks2.classList.add("fade-out-up");
      }, 3300);

      setTimeout(() => {
        teks2.classList.add("hidden");
      }, 3500);

      setTimeout(() => {
        teks3.classList.add("fade-in-down");
        teks3.classList.remove("reset");
        teks3.classList.remove("opacity-hidden");
      }, 3700);

      setTimeout(() => {
        teks3.classList.remove("hidden");
        //
        sendmail(name.value, email.value, pesan.value);
        console.log("Pesan berhasil terkirim");
        alertSuccess.classList.remove("hidden");
        alertSuccess.classList.add("flex");
        form.reset();
      }, 3500);

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
      }, 4900);

      setTimeout(() => {
        teks1.classList.remove("fade-out-up");
        teks2.classList.remove("fade-out-up");
        teks2.classList.add("opacity-hidden", "reset");
        teks3.classList.remove("fade-out-up");
        teks3.classList.add("opacity-hidden", "reset");
      }, 5000);
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
// End Send to email

// Btn Close Alert Contact Success
document
  .getElementById("closeContactSuccess")
  .addEventListener("click", function () {
    const alert = document.getElementById("alertContactSuccess");
    alert.classList.add("fade-out");

    setTimeout(() => {
      alert.classList.add("hidden");
      alert.classList.remove("fade-out");
      alert.classList.remove("flex");
    }, 300);
  });
// End Btn Close Alert COntact Success

// Btn Close Alert Contact Error
document
  .getElementById("closeContactError")
  .addEventListener("click", function () {
    const alert = document.getElementById("alertContactError");
    alert.classList.add("fade-out");

    setTimeout(() => {
      alert.classList.add("hidden");
      alert.classList.remove("fade-out");
      alert.classList.remove("flex");
      document.querySelector("#name").classList.remove("border-red-500");
      document.querySelector("#email").classList.remove("border-red-500");
      document.querySelector("#message").classList.remove("border-red-500");
    }, 300);
  });
// End Btn Close Alert Contact Error

// Btn Close Alert Contact Error Email
document
  .getElementById("closeContactErrorEmail")
  .addEventListener("click", function () {
    const alert = document.getElementById("alertContactErrorEmail");
    alert.classList.add("fade-out");

    setTimeout(() => {
      alert.classList.add("hidden");
      alert.classList.remove("fade-out");
      alert.classList.remove("flex");
      document.querySelector("#email").classList.remove("border-red-500");
    }, 300);
  });
// End Btn Close Alert Contact Error Email

// Button to top
const toTop = document.querySelector("#to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 1) {
    console.log("scroll");
    toTop.classList.remove("hidden");
    toTop.classList.add("opacity-0");

    setTimeout(() => {
      toTop.classList.remove("opacity-0");
      toTop.classList.add("flex");
    }, 1);
  } else {
    toTop.classList.add("opacity-100");

    setTimeout(() => {
      toTop.classList.remove("opacity-100");
      toTop.classList.add("opacity-0");
    }, 1);

    setTimeout(() => {
      toTop.classList.add("hidden");
    }, 250);
  }
});
// End Button to top

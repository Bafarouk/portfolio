const sections = document.querySelectorAll(".section");
const secBtns = document.querySelectorAll(".controls");
const secBtn = document.querySelectorAll(".control");
const allSections = document.querySelectorAll(".main-content");

function pageTransition() {
  // button click active class
  for (let i = 0; i < secBtn.length; i++) {
    secBtn[i].addEventListener("click", function () {
      let currentBtn = document.querySelectorAll(".active-btn");
      currentBtn[0].className = currentBtn[0].className.replace(
        "active-btn",
        ""
      );
      this.className += "active-btn";
    });
  }

  // replacing section active class
  for (let i = 0; i < allSections.length; i++) {
    allSections[i].addEventListener("click", function (event) {
      const id = event.target.dataset.id;
      if (id) {
        // remove selected section
        secBtns.forEach((btn) => {
          btn.classList.remove("active");
        });
        event.target.classList.add("active");

        // hide other sections
        sections.forEach((section) => {
          section.classList.remove("active");
        });

        const element = document.getElementById(id);
        element.classList.add("active");
      }
    });
  }

  // Toggle light theme
  const themeBtn = document.querySelector(".theme-btn");
  themeBtn.addEventListener("click", function () {
    let element = document.body;
    element.classList.toggle("light-mode");
  });

  // send email

  document
    .querySelector(".contact-form")
    .addEventListener("submit", submitForm);

  function submitForm(e) {
    e.preventDefault();

    // get input values
    let name = document.querySelector(".names").value;
    let email = document.querySelector(".email").value;
    let subject = document.querySelector(".subject").value;
    let message = document.querySelector(".message").value;

    sendEmail(name, email, subject, message);

    document.querySelector(".contact-form").reset();
  }

  function sendEmail(name, email, subject, message) {
    Email.send({
      SecureToken: "0a0b5980-070a-4361-acfa-f21d5cd38a8c",
      To: "med.faroukakacha@gmail.com",
      From: "portfolio.farouk@gmail.com",
      Subject: subject,
      Body:
        "This mail is from : <br/> Name: " +
        name +
        " <br/>  Email: " +
        email +
        "<br/> and his message : " +
        message,
    }).then((message) => alert("Your email was sent successfully"));
  }
}
pageTransition();

const toggler = document.querySelector(".nav__toggler");
const mainHeader = document.querySelector(".main-header");

toggler.addEventListener("click", () => {
  mainHeader.classList.toggle("nav__expanded");
  console.log(mainHeader.className); // fixed typo (was main-header)
});

// === FORM SUBMISSION HANDLING ===
const form = document.querySelector(".join-hydra__form");

// Create popup container
const popup = document.createElement("div");
popup.style.position = "fixed";
popup.style.top = "50%";
popup.style.left = "50%";
popup.style.transform = "translate(-50%, -50%)";
popup.style.backgroundColor = "#222";
popup.style.color = "#fff";
popup.style.padding = "2rem";
popup.style.borderRadius = "10px";
popup.style.boxShadow = "0 5px 15px rgba(0,0,0,0.3)";
popup.style.fontSize = "1rem";
popup.style.zIndex = "1000";
popup.style.textAlign = "center";
popup.style.display = "none";
document.body.appendChild(popup);

// Validate function
function validateForm() {
  const inputs = form.querySelectorAll("input, textarea");
  let isValid = true;

  inputs.forEach((input) => {
    input.style.border = "";
    if (!input.value.trim()) {
      input.style.border = "2px solid red";
      isValid = false;
    }
  });

  return isValid;
}

// Show popup function
function showPopup(message) {
  popup.innerHTML = message;
  popup.style.display = "block";
  setTimeout(() => {
    popup.style.display = "none";
    form.reset();
  }, 4000);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!validateForm()) {
    showPopup("<p>Please fill in all fields before submitting.</p>");
    return;
  }

  showPopup(`
    <p>You’re officially on the early access list 🎉</p>
    <p>We'll email you when Hydra VR is ready to launch.</p>
  `);
});

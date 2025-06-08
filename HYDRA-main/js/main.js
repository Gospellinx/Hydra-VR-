const toggler = document.querySelector(".nav__toggler");
const mainHeader = document.querySelector(".main-header");

toggler.addEventListener("click", (e) => {
    mainHeader.classList.toggle("nav__expanded");
    console.log(main-header.className);
});
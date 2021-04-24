let galerijaBildeSaraksts = document.querySelectorAll('.galerija__bilde');
let galerijaBildePopup = new Image();
// Pieliekam bildei CSS klasi, lai mēs to varētu CSS noformēt
galerijaBildePopup.classList.add('galerija__bilde--popup');

// Aizveram bildi:
galerijaBildePopup.addEventListener('click', function () {
  console.log('click');
  document.body.removeChild(galerijaBildePopup);
});

// Reaģējam uz klikšķi uz katru bildi:
for (let bilde of galerijaBildeSaraksts) {
  bilde.addEventListener('click', function (event) {
    event.preventDefault();

    let konkretaBilde = event.target;
    galerijaBildePopup.src = konkretaBilde.href;

    // Atveram bildi:
    document.body.appendChild(galerijaBildePopup);
  });
}

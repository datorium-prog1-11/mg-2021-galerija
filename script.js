let galerijaStavoklis = {
  bildeAtverta: false,
  bildeNr: null
};

let galerijaBildeSaraksts = document.querySelectorAll('.galerija__bilde');
let galerijaBildePopup = new Image();
// Pieliekam bildei CSS klasi, lai mēs to varētu CSS noformēt
galerijaBildePopup.classList.add('galerija__bilde--popup');

// ATVERAM BILDI:
function atvertBildi(bildesElements, bildesIndekss) {

}

// Reaģējam uz klikšķi uz katru bildi:
// for (let bilde of galerijaBildeSaraksts) {
for (let i = 0; i < galerijaBildeSaraksts.length; i = i + 1) {
  let bilde = galerijaBildeSaraksts[i];
  console.log('bilde nr', i, bilde);

  bilde.addEventListener('click', function (event) {
    event.preventDefault();

    let konkretaBilde = event.target;
    galerijaBildePopup.src = konkretaBilde.href;

    // Atveram bildi:
    document.body.appendChild(galerijaBildePopup);

    galerijaStavoklis.bildeAtverta = true;
    galerijaStavoklis.bildeNr = i;

    console.log('galerijas stavoklis', galerijaStavoklis);
  });
}

// Aizveram bildi:

function aizvertBildi(bilde) {
  document.body.removeChild(bilde);

  galerijaStavoklis.bildeAtverta = false;
}

galerijaBildePopup.addEventListener('click', function () {
  console.log('click');
  aizvertBildi(galerijaBildePopup);
});

// Bildes aizvēršana ar esc
// - Klausīties uz `keyup` eventu dokumentam - `document...`:
document.addEventListener('keyup', function(event) {
  // - Sākam ar `console.log`
  // console.log('keyup', event.key);

  if (galerijaStavoklis.bildeAtverta) {

    if (event.key == 'ArrowRight') {
      console.log('nākamā bilde');
    } else if (event.key == 'ArrowLeft') {
      console.log('iepriekšējā bilde');
    }
  }

  // - Pārbaudām taustiņu ar `event.key`
  if (event.key == 'Escape' && galerijaStavoklis.bildeAtverta) {
    // - Sākam ar `console.log`
    console.log('Escape pressed');

    aizvertBildi(galerijaBildePopup);
  }
});

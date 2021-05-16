let galerijaStavoklis = {
  bildeAtverta: false,
  bildeNr: 0
};

let galerijaBildeElems = document.querySelectorAll('.galerija__bilde');

//  0  1  2  3  4
// [1, 2, 3, 4, 5] length = 5, pedejais = length - 1
console.log(galerijaBildeElems[0]);

let bildePopUp = new Image();
bildePopUp.classList.add('galerija__bilde--popup');

function aizvertBildi(bilde) {
  document.body.removeChild(bilde);
  galerijaStavoklis.bildeAtverta = false;
}

bildePopUp.addEventListener('click', function() {
  aizvertBildi(bildePopUp);
});

// for (let galerijaBilde of galerijaBildeElems) {
for (let i = 0; i < galerijaBildeElems.length; i = i + 1) {
  let galerijaBilde = galerijaBildeElems[i];

  galerijaBilde.addEventListener('click', function (event) {
    // nesekojam linkam
    event.preventDefault();
    let bildeKlik = event.target;

    document.body.appendChild(bildePopUp);

    // Parādām to bildi uz kuras uzspiedām
    bildePopUp.src = bildeKlik.href;
    galerijaStavoklis.bildeAtverta = true;
    galerijaStavoklis.bildeNr = i;
  });
}

function parslegtBildi(nakamaBildeNr) {
  let nakamaBilde = galerijaBildeElems[nakamaBildeNr];

  bildePopUp.src = nakamaBilde.href;
  galerijaStavoklis.bildeNr = nakamaBildeNr;
}

document.addEventListener('keyup', function(event) {
  // console.log('key', event.key);

  // atrodam pēdējo bildi                                                               8          [0,1,2...8].length = 9
  if (event.key == 'ArrowRight' && galerijaStavoklis.bildeAtverta && galerijaStavoklis.bildeNr < galerijaBildeElems.length - 1) {
    parslegtBildi(galerijaStavoklis.bildeNr + 1);
  } else if (event.key == 'ArrowLeft' && galerijaStavoklis.bildeAtverta && galerijaStavoklis.bildeNr > 0) {
    parslegtBildi(galerijaStavoklis.bildeNr - 1);
  }

  if (event.key == 'Escape' && galerijaStavoklis.bildeAtverta) {
    aizvertBildi(bildePopUp);
  }
});

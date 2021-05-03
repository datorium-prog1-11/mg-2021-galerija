let galerijaBildeElems = document.querySelectorAll('.galerija__bilde');

console.log(galerijaBildeElems);

let bildePopUp = new Image();
bildePopUp.classList.add('galerija__bilde--popup');

bildePopUp.addEventListener('click', function() {
  document.body.removeChild(bildePopUp);
});

for (let galerijaBilde of galerijaBildeElems) {

  galerijaBilde.addEventListener('click', function (event) {
    // nesekojam linkam
    event.preventDefault();
    let bildeKlik = event.target;

    document.body.appendChild(bildePopUp);

    // Parādām to bildi uz kuras uzspiedām
    bildePopUp.src = bildeKlik.href;
  });
}

document.addEventListener('keyup', function(event) {
  console.log('key', event.key);

  if (event.key == 'Escape') {
    document.body.removeChild(bildePopUp);
  }
});

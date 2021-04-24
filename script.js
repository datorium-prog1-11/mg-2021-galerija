let galerijaBildeElems = document.querySelectorAll('.galerija__bilde');

console.log(galerijaBildeElems);

let bildePopUp = new Image();
bildePopUp.src = 'https://source.unsplash.com/CG6Gd__QIOY/640x472';
bildePopUp.classList.add('galerija__bilde--popup');
document.body.appendChild(bildePopUp);

for (let galerijaBilde of galerijaBildeElems) {

  galerijaBilde.addEventListener('click', function (event) {
    // nesekojam linkam
    event.preventDefault();

    // Parādām to bildi uz kuras uzspiedām
    bildePopUp.src = event.target.href;
  });
}

# Galerija: 1. Nodarbība

Web lapa, kas satur interaktīvu galeriju. HTML + CSS + JS.

## 1. Uzdevums: Izveidot projektu

Izveidot projektu, kur jau iekšā ir saistīti HTML un CSS dokumenti. Nomainīt fonu Body elementam.

## Lapas satura pamats

Semantiskie tagi, apraksta lapas saturu.

Header - lapas virsraksts, navigācija, banneris.
Main - lapas galvenais saturs.

```html
<header></header>
<main></main>
```

## 2. Uzdevums: Uztaisīt Attēlu no Unsplash

### Risinājums

https://source.unsplash.com/{id}/{size}


## 3. Uzdevums: Iemest bildes no unsplash

Bildēm jābūt tādā formātā, lai tās uzreiz var izmantot `<img>` elementā.

### Risinājums

- https://source.unsplash.com/JS2IVAyMsM0/640x960
- https://source.unsplash.com/qp7WA8AV2x0/640x426
- https://source.unsplash.com/9DgwO_ihqL0/640x426
- https://source.unsplash.com/6aMhLUqZRPc/640x799
- https://source.unsplash.com/SYPdW4rN4_w/640x1138
- https://source.unsplash.com/xfz16jQtJWE/640x960
- https://source.unsplash.com/eBbRSsV4JqU/640x960
- https://source.unsplash.com/sZwsybhaxTg/640x426
- https://source.unsplash.com/7H77FWkK_x4/640x693
- https://source.unsplash.com/IaWODJl0HE4/640x492


## Attēlu saraksts no unsplash

```html
<div>
  <img src="https://source.unsplash.com/JS2IVAyMsM0/640x960">
</div>
```

## Attēli kā fona bildes `<div>` elementam

Bildes dažādos izmēros neizskatās labi kopā - izskatās salūzušas.

Bildi liekam kā fonu `<div>`, lai kontorolētu tās izmēru.

```html
<div style="width: 320px; height: 320px; background-image: url('https://source.unsplash.com/JS2IVAyMsM0/640x960');"></div>
```

## Iznesam kopīgo CSS `style.css` failā

CSS rakstām `style.css` failā, izņemot, ja tas ir specifisks vienam elementam.

Lai pielietotu CSS no faila, izmantojam klasi `class="galerija__bilde"`.

Klases nosaukums ir sadalīts tā, lai to būtu viegli kam tā domāta.

```html
<div class="galerija__bilde" style="background-image: url('https://source.unsplash.com/JS2IVAyMsM0/640x960');"></div>
```

```css
.galerija__bilde {
  width: 320px;
  height: 320px;
}
```

## Fona bildes iecentrēšana

Lai bilde izskatītos pareizi, mums tā "jāietilpina" elementā.

```css
.galerija__bilde {
  width: 320px;
  height: 320px;

  background-size: cover;
  background-position: center center;
}
```

## Saliekam bildes blakus vienu otrai

Div elementi pēc noklusējuma sakārtojas viens zem otra.

```html
<div class="galerija">
    <div class="galerija__bilde" style="background-image: url('https://source.unsplash.com/JS2IVAyMsM0/640x960');"></div>
</div>
```

```css
.galerija {
  display: flex;
}
```

---

# 2. Nodarbība

## Flexbox elementu sakārtošana

Automātiski pārnesam elementus jaunā rindā:

```css
.galerija {
  flex-wrap: wrap;
}
```

Ievērot vienādas atstarpes starp elementiem:

```css
.galerija {
  justify-content: space-evenly;
}
```

## 1. Uzdevums: Atkāpes starp elementiem

Ieliekam sekojošas atkāpes starp elementiem:

- no bildes augšas apakšas: 25px
- no bildes kreisā un labā sāna: 13px

### Risinājums

```css
.galerija__bilde {
  /* ... */
  margin-top: 25px;
  margin-bottom: 25px;
  margin-left: 13px;
  margin-right: 13px;
}
```

## Lapas satuar centrēšana

```css
.saturs {
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}
```

Virsraksta Testa iecentrēšana, lai labāk izskatās

```css
h1 {
  text-align: center;
}

```

## 2. Uzdevums: Saites uz bildēm

Pārvēršam bildes elementu par linku `<a>` uz bildi, kas ir fonā. Linkam jāatveras jaunā lapā.

Pārvērst šos elementus:
```html
<div class="galerija__bilde" style="background-image: url('https://source.unsplash.com/JS2IVAyMsM0/640x960');"></div>
```

### Risinājums:

HTML:

```html
<a
    class="galerija__bilde"
    style="background-image: url('https://source.unsplash.com/JS2IVAyMsM0/640x960');"
    href="https://source.unsplash.com/JS2IVAyMsM0/640x960"
    target="_blank"
></a>
```

CSS:

```css
.galerija__bilde {
  /* ... */
  display: block;
}
```

## 3. Uzdevums: Izveidot JS failu un savienot ar HTML

```html
<html>
  <!-- ... -->
  <body>
    <!-- ... -->
    <script src="./script.js"></script>
  </body>
</html>
```

---

# 3. Nodarbība

## 1. Uzdevums: Atrast HTML elementus JavaScript

- Izmantojam `querySelectorAll` query selector vietā.
- Izvadīt konsolē visas galerijas bildes.

### Risinājums

```js
let bildeSaraksts = document.querySelectorAll('.galerija__bilde');
console.log(bildes);
```

## Izveidojam jaunu bildi JS

```js
const popUpBilde = new Image();
popUpBilde.src = event.target.href;

document.body.appendChild(popUpBilde);
```

- Izmantojam tikai vienu elementu Pop up bildei, lai mums nebūtu problēma ar daudzu elementu pievienošanu un noņemšanu no lapas.

## Attēlu saraksts un cikls

```js
for (let bilde of bildeSaraksts) {
  console.log('bilde', bilde);
}
```

## 2. Uzdevums: Atvērt bildi uz klikšķa

- Reaģējam uz klikšķa uz katras bildes
- Pēc klikšķa nomainām `src` atribūta vērtību mūsu "pop-up" bildei uz to bildi uz kuras mēs uzspiedām
- Izmantojam `event.target`

### Risinājums

```js
bilde.addEventListener('click', function (event) {
  // Event target ir tā bilde uz kā mēs uzspiedām
  let bildeKlik = event.target;
  popUpBilde.src = bildeKlik.href;
});
```

## Bloķējam bildes atvēršanu jaunā lapā

- Linka (`a`) noklusētā darbība, ir atvērt saiti `href`
- Tas atļauj galeriju lietot arī cilvēkiem kam nestrādā JavaScript
- Tā kā mums jau bilde atveras "pop-up"ā tad jaunā lapā vairs nevajag atvērt.

```js
bilde.addEventListener('click', function (event) {
  event.preventDefault();
  /* ... */
});
```

## Pop-up bildes pozicionēšana

- Bildes pozīciju un izskatu mēs nosakām ar CSS
- Izveidojam klasi: `galerija__bilde--popup`
- Piešķiram šo klasi mūsu jaunajam bildes elementam caur JS

```js
popUpBilde.classList.add('galerija__bilde--popup');
```

- Novietojam bildi virs pārējiem elementiem
- Iecentrējot to pret ekrānu

```css
.galerija__bilde--popup {
  position: fixed; /* pāri visam */
  top: 25px;
}
```

## Pop-up bildes iecentrēšana

- Izmantojam `top` un `left` pozīcijas parametrus
- Iecentrējam bildes pozicionēšanas punktu (`translate`)

  > Pēc noklusējuma bildi pozicionē pēc tās augšējā kreisā tūra

```css
.galerija__bilde--popup {
  /* ... */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

## 3. Uzdevums: Aizvērt bildi uz klikšķa

- Kad "Pop-up" bildes uzklikšķina, tai jāpazūd
- Izmantojam: `document.body.removeChild()`

### Risinājums:

```js
/* ... */
/* Pēc bildes elementa izveides, bet pirms cikla */
galerijaBildePopup.addEventListener('click', function () {
  document.body.removeChild(galerijaBildePopup);
});
```

## Pievienojam bildi arī tikai uz klikšķa

- Pārvietojam `document.body.appendChild(galerijaBildePopup);`
- Iekšā mūsu bildes atvēršanas klikšķa funkcjiā:

```js
for (let bilde of galerijaBildeSaraksts) {
  bilde.addEventListener('click', function (event) {
    /* ... */
    document.body.appendChild(galerijaBildePopup);
  });
}
```

## Ierobežojam Pop-up bildes izmēru

- Lai pop-up bilde neiziet ārpus ekrāna robežām, ja tā ir par lielu
- Ievērojam nelielu atkāpi, lai izskatītos smukāk

```css
.galerija__bilde--popup {
  /* ... */
  max-height: 95%;
  max-width: 95%;
}
```

---

# 4. Nodarbība

## Reaģējam uz peli

Lai parādītu lietotājam, ka bildes ir interaktīvas, reaģējam, kad peles kursors ir uz bildes:

```css
.galerija__bilde:hover {
    opacity: 70%;
    transition: opacity 0.2s;
}
```

## Uzdevums: Aizvērt Pop-up bildi as `esc`

- Klausīties uz `keyup` eventu dokumentam - `document...`
- Pārbaudām taustiņu ar `event.key`
- Sākam ar `console.log`

## Pārvietojamies pa bildēm ar bultiņu taustiņiem

### Uzdevums: Pārvietojamies pa bildēm ar indeksu

- Izmantojam `for` ciklu
- Izmantojam `saraksts.length`

### Saglabājam galerijas stāvokli

- Fiksējam katras bildes indeksu
- Saglabājam atvērto bildi

```js
const galerija = {
  atverta: false,
  bilde: 1
}
```

### Uzdevums: Kad tiek nospiests uz biltas pārvietojamies uz nākamo bildi

- Izmantojam to pašu `keyup` funkciju
- Pārbaudām taustiņu ar `event.key`

### Uzdevums: Pārbaudām galerijas robežas pirms pārslēgt bildi

- Ja esam galerijas sākumā, nepārslēdzam uz iepriekšējo bildi
- Ja esam galerijas beigās, nepārslēdzam uz nākamo bildi
- Ja galerija nav atvērta, nemēģinām to aizvērt

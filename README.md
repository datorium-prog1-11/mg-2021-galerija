# Galerija

Web lapa, kas satur interaktīvu galeriju. HTML + CSS + JS.

## 1. Uzdevums

Izveidot projektu, kur jau iekšā ir saistīti HTML un CSS dokumenti. Nomainīt fonu Body elementam.

## Lapas satura pamats:

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

- https://source.unsplash.com/lYQAgS8nb0o/640x960
- https://source.unsplash.com/CG6Gd__QIOY/640x472
- https://source.unsplash.com/kLfkVa_4aXM/640x427
- https://source.unsplash.com/zF2h2QHtwx0/640x960
- https://source.unsplash.com/WgThxysV6YE/640x364
- https://source.unsplash.com/Xq1ntWruZQI/640x960
- https://source.unsplash.com/hfNg3dPdaC0/640x958
- https://source.unsplash.com/_RpPMkqTTTg/640x426
- https://source.unsplash.com/TrB4UA1rDeQ/640x426


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

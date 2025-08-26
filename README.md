# E3 Expo 2025 — README de Laboratorio 2

Este documento describe dónde y cómo se aplicó cada tipo de elemento solicitado en el proyecto, según los criterios de evaluación.

---

## Selectores

### Tipo
- `header`, `footer`, `a`, `h1`, `form`, `button`, `table`, `td`, `th`, `img`, `section`, `p`, `figcaption`  
  *Usados en toda la estructura principal y componentes.*

### Clase
- `.listExhibitors`, `.listSponsors`, `.mainSponsorTag`, `.sectionFooter`, `.footerTitle`, `.footerInfo`, `.presentationsH2`, `.formLine`, `.hrHorizontal`, `.contactlist`  
  *Para cuadrículas, etiquetas, secciones y organización visual.*

### ID
- `#infoPatrocinadores`, `#patrocinadores`  
  *Para secciones específicas y estilos particulares.*

### Atributo (≥3)
- `a[href]` — Enlaces generales.
- `a[aria-label]` — Enlaces con accesibilidad.
- `img[tabindex="-1"]` — Imágenes de patrocinadores.

### Combinadores (los 4)
- **Descendiente:** `.listExhibitors li` — Expositores dentro de la lista.
- **Hijo directo:** `.listSponsors > section`, `.listSponsors p` — Secciones y párrafos directos dentro de patrocinadores.
- **Hermano general:** `.contactlist ~ li` — Elementos de contacto después del primero.

---

## Pseudo-clases

### Estado (≥3)
- `a:hover` — Enlaces en navegación y contenido.
- `button:hover` — Botón de registro.
- `button:active` — Botón de registro.
- `.listExhibitors img:focus-visible` — Imágenes de expositores.

### Estructurales (≥3)
- `.listExhibitors li:first-child` — Primer expositor.
- `.listExhibitors li:last-child` — Último expositor.
- `.listExhibitors li:nth-child(2)` — Segundo expositor.

---

## Especificidad

- **Uso de `!important`:**  
  Puedes agregar en `.infoPatrocinadores` para destacar el borde:
  ```css
  #infoPatrocinadores hr {
   border-color: #CF0F47 !important;
  }
  ```
- **Inline style:**  
  Ejemplo en HTML:
  ```html
  <section style="position: relative;">
  ```

---

## Box Model y Colapso de Márgenes

- **Box-sizing:**  
  `.listSponsors`, `.listSponsors > section`, `.listSponsors p` usan `box-sizing: border-box;`
- **Márgenes y paddings:**  
  Usados en `.footerInfo`, `.formLine`, `.listSponsors > section`, `.listSponsors p`, `.contactlist`, etc.
- **Colapso de márgenes:**  
  Demostrado en `.contactlist ~ li, .contactlist` y en elementos con `margin-bottom`.

---

## Overflow

- **Control de overflow:**  
  `.listSponsors` usa `overflow-y: auto;` y `overflow-x: hidden;` para controlar contenido desbordado en la sección de patrocinadores.

---

## Flexbox

- **Uso de flexbox:**  
  `header`, `footer`, `.sectionFooter`, `.footerTitle`, `.footerInfo`, `.formLine`, `.listSponsors > section` usan `display: flex;` con `justify-content`, `align-items`, y `gap`.

---

## Grid

- **Uso de grid:**  
  `.listExhibitors` y `.listSponsors` usan `display: grid;` con `repeat()` y `minmax()` para cuadrículas adaptables.

---

## Position (relative + absolute)

- **Uso correcto:**  
  `.mainSponsorTag` usa `position: absolute;` dentro de un contenedor con `position: relative;` (ejemplo en patrocinadores).

---

## Otros elementos

- **Sombras:**  
  `.listExhibitors li`, `.listSponsors`, `table`, `form`, `.listExhibitors img` usan `box-shadow`.
- **Bordes personalizados:**  
  `table`, `td, th`, `.listSponsors`, y en hover de imágenes de patrocinadores.

---
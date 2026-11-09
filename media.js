// ─────────────────────────────────────────────────────────────────
//  Add your media items here.
//  Each item needs:
//    id      – matches the label in your thesis (used in the URL)
//    title   – shown on the page
//    type    – "youtube" | "image" | "audio" | "model"
//    url     – full URL or relative path to the resource
//              (for "model", point to the viewer's folder with a trailing slash,
//               e.g. "models/tubularium/" — not ".../index.html", which the dev
//               server redirects in a way that breaks the model's relative asset paths)
//    caption – (optional) short description
// ─────────────────────────────────────────────────────────────────

const MEDIA = [
  {
    id: "tubularium-demo",
    title: "A full demonstration of Tubularium",
    type: "youtube",
    url: "https://youtu.be/5Gbb4605J9A"
  },

  {
    id: "tubularium-model",
    title: "An interactive 3D model of Tubularium",
    type: "model",
    url: "models/tubularium/",
    caption: "# Playing\n- **Click / tap / hold** a tube to play it\n- **Mode** switches between melody and chords\n- **LEDs** turn the lights on or off\n- **Light** slide to the moon to darken the room\n# Camera\n- **Drag** to orbit\n- **Scroll / pinch** to zoom"
  },

  // {
  //   id: "tubularium-with-percussion",
  //   title: "Tubularium with the percussion companion",
  //   type: "youtube",
  //   url: "https://youtu.be/-0JgVwPJSMs",
  //   caption: "Using the playback feature to record something in the Tubularium and play it back while playing on the companion some percussion."
  // },

  {
    id: "tubularium-sounds",
    title: "The different instrument voices of Tubularium",
    type: "audio",
    url: "audios/tubularium/TubuSounds.wav"
  },

   {
    id: "tubularium-ai",
    title: "The playback and AI features of Tubularium",
    type: "youtube",
    url: "https://youtu.be/GeJgnmoYQCo"
  },
  

  {
    id: "picnic-demo",
    title: "A full demonstration of Picnic",
    type: "youtube",
    url: "https://youtu.be/vzOZoCOCKr0"
  },

  {
    id: "picnic-model",
    title: "An interactive 3D model of Picnic",
    type: "model",
    url: "models/picnic/",
    caption: "# Playing\n- **Click / tap** an object to add it to the loop\n- **Click / tap** the glass to clear the loop\n- **Drag** to move the objects\n# Camera\n- **Drag** space to orbit\n- **Scroll / pinch** to zoom"
  },
  {
    id: "picnic-tawharanui",
    title: "A recording of the birds in Tawharanui National Park",
    type: "youtube",
    url: "https://www.youtu.be/IC-FxaUTtlo",
    caption: "This recording showcases how the different bird calls were layered, in a spot where one could be having a picnic"
  },
   {
    id: "tablemanners-model",
    title: "An interactive 3D model of Table Manners",
    type: "model",
    url: "models/tablemanners/",
    caption: "# Playing\n- **Click / tap** an object to record a sound\n- **Drag** an object to move it; bring two objects together to play their sounds\n# Camera\n- **Drag** space to orbit\n- **Scroll / pinch** to zoom"
  },
  {
    id: "tablemanners-demo",
    title: "Participants playing Table Manners",
    type: "youtube",
    url: "https://youtu.be/vzOZoCOCKr0"
  },
  {
    id: "tablemanners-sounds",
    title: "The sounds of Table Manners",
    type: "audio",
    url: "https://youtu.be/vzOZoCOCKr0"
  }

];


// Label shown next to each item in the lists
const TYPE_LABELS = { youtube: "Video", model: "3D Model", audio: "Audio", image: "Image" };
function typeLabel(type) { return TYPE_LABELS[type] || type; }

// Figure badge: a globe with the figure's number on top (the number is the page number, never the id)
function figBadge(n) {
  var el = document.createElement('span');
  el.className = 'fig-badge';
  el.setAttribute('aria-label', 'Figure ' + n);
  el.textContent = n;
  return el;
}

// "Supplementary Material" in the top bar opens the first figure
document.querySelectorAll('.site-name').forEach(function (a) { a.href = 'figure.html#' + MEDIA[0].id; });

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
    title: "Tubularium — full demo",
    type: "youtube",
    url: "https://youtu.be/5Gbb4605J9A",
    caption: "Demo of Tubularium"
  },

  {
    id: "tubularium-model",
    title: "Tubularium — interactive 3D model",
    type: "model",
    url: "models/tubularium/",
    caption: "# Playing\n- **Hover** a pipe to make it glow\n- **Click or hold** play the pipe; where you touch it sets the octave (top, middle, bottom)\n- **Mode** Melody: each pipe plays a note. Chords: each pipe plays a chord, and hovering the pink pipe advances the sequence\n- **LEDs** switch the lights inside the pipes on or off\n- **Light** slide towards the moon to darken the space and see the LEDs better\n# Camera\n- **Drag** orbit the view\n- **Right-drag** pan\n- **Scroll / pinch** zoom"
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
    title: "Tubularium instrument sounds",
    type: "audio",
    url: "audios/tubularium/TubuSounds.wav",
    caption: "The different instrument voices of Tubularium"
  },

   {
    id: "tubularium-ai",
    title: "Playback and AI in Tubularium",
    type: "youtube",
    url: "https://youtu.be/GeJgnmoYQCo",
    caption: "Playback and AI features in Tubularium"
  },
  

  {
    id: "picnic-demo",
    title: "Picnic — full demo",
    type: "youtube",
    url: "https://youtu.be/vzOZoCOCKr0",
    caption: "Demo of picnic"
  },

  {
    id: "picnic-model",
    title: "Picnic — interactive 3D model",
    type: "model",
    url: "models/picnic/",
    caption: "# Playing\n- **Click an object** play it and add a hit to the loop (120 BPM, snapped to the nearest 16th note)\n- **Drag an object** move it; let go to throw it\n- **Click the glass** clear the loop\n# Camera\n- **Drag space** orbit the view\n- **Right-drag** pan\n- **Scroll / pinch** zoom\n# Instruments\n- **Cup** snare\n- **Bowl** kick 1\n- **Large plate** hi-hat 1\n- **Small plate** hi-hat 2\n- **Cutlery** clap\n- **Basket** kick 2"
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
    title: "Table Manners — Interactive 3D Model",
    type: "model",
    url: "models/tablemanners/",
    caption: "# Playing\n- **Click** play the object's sound\n- **Right-click** record a new 1 s sound (or use “Tap to record” on touch screens)\n- **Drag** move an object (gravity applies)\n- **⌘ / Alt + drag** turn or tilt it\n- **Scroll over it** turn it\n- **Shift + drag** lift it\n# Camera\n- **Drag space** orbit the view\n- **Right-drag** pan\n- **Scroll / pinch** zoom"
  },
  {
    id: "tablemanners-demo",
    title: "Table Manners — Participants demo",
    type: "youtube",
    url: "https://youtu.be/vzOZoCOCKr0",
    caption: "Demo of Table Manners with participants"
  },
  {
    id: "tablemanners-sounds",
    title: "Picnic — Participants soundso",
    type: "audio",
    url: "https://youtu.be/vzOZoCOCKr0",
    caption: "Sounds of Table Manners"
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

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
    caption: "Click on the tubes to play. Drag to orbit, scroll to zoom. Switch between structure and sequence modes."
  },

  {
    id: "tubularium-with-percussion",
    title: "Tubularium with the percussion companion",
    type: "youtube",
    url: "https://youtu.be/-0JgVwPJSMs",
    caption: "Using the playback feature to record something in the Tubularium and play it back while playing on the companion some percussion."
  },

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
    caption: "Click and drag to throw the objects"
  },
  {
    id: "picnic-tawharanui",
    title: "A recording of the birds in Tawharanui National Park",
    type: "youtube",
    url: "https://youtube.com/shorts/IC-FxaUTtlo?feature=share",
    caption: "This recording showcases how the different bird calls were layered, in a spot where one could be having a picnic"
  }
];


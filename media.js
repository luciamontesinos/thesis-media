// ─────────────────────────────────────────────────────────────────
//  Add your media items here.
//  Each item needs:
//    id      – matches the label in your thesis (used in the URL)
//    title   – shown on the page
//    type    – "youtube" | "image" | "audio"
//    url     – full URL to the resource
//    caption – (optional) short description
// ─────────────────────────────────────────────────────────────────

const MEDIA = [
  {
    id: "fig-1a",
    title: "Example YouTube video",
    type: "youtube",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    caption: "Caption describing this clip in relation to Chapter 1."
  },
  {
    id: "fig-2",
    title: "Example image",
    type: "image",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/JPEG_example_flower.jpg/800px-JPEG_example_flower.jpg",
    caption: "Caption for this image."
  },
  {
    id: "fig-3a",
    title: "Example audio",
    type: "audio",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    caption: "Audio clip caption."
  }
];

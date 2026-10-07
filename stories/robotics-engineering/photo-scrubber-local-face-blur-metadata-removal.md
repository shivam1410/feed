---
title: "Photo Scrubber — local face blur & metadata removal"
category: "Robotics & Engineering"
source: "Simon Willison"
url: "https://simonwillison.net/2026/Sep/29/photo-scrubber/"
authors: []
date: "2026-09-29T16:45:27+00:00"
score: 35
guid: "https://simonwillison.net/2026/Sep/29/photo-scrubber/"
image: ""
generated: "2026-10-07T19:11:01+05:30"
---

Tool: Photo Scrubber — local face blur & metadata removal I took a photograph of some protesters, then thought about how I don't like sharing photographs of strangers with identifiable faces. I had GPT-6 Astra build this experimental tool that would identify faces and automatically blur them out. It uses Google's MediaPipe C++ library, compiled to WebAssembly via @mediapipe/tasks-vision , plus the BlazeFace face detection model. Tags: photography , tools

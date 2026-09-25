---
title: "Gemini 3.8 TTS Playground"
category: "AI Research"
source: "Simon Willison"
url: "https://simonwillison.net/2026/Sep/23/gemini-tts-playground/"
authors: []
date: "2026-09-23T17:12:27+00:00"
score: 60
guid: "https://simonwillison.net/2026/Sep/23/gemini-tts-playground/"
image: ""
generated: "2026-09-25T19:08:22+05:30"
---

Tool: Gemini 3.8 TTS Playground Google released two new Gemini text-to-speech models today - gemini-3.8-flash-tts and gemini-3.8-flash-lite-tts . They come with a library of over 2,000 voices, plus the ability to create a custom voice with "just a 30-second audio sample of your voice or a voice you have the rights to use". I vibe coded this bring-your-own-key playground interface with GPT-6 Astra, taking advantage of the open CORS policy of the underlying Gemini API. A notable feature of the API is that it makes it easy to define a full conversation between multiple characters, each with different voices and voice style instructions. Here's a short demo clip of a conversation between two pelicans debating if they should move to the Pacifica Pier . I had Claude 4.5 Opus write the script and generate a URL to render it using the tool . Your browser does not support the audio element. It took ~20 seconds to generate 1m 18s of audio using Gemini 3.8 Flash TTS (not the cheaper Flash-Lite), at a cost of 2.74 cents. Tags: text-to-speech , gemini

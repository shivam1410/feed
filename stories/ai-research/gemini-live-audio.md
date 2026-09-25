---
title: "Gemini Live audio"
category: "AI Research"
source: "Simon Willison"
url: "https://simonwillison.net/2026/Sep/15/gemini-live/"
authors: []
date: "2026-09-15T22:47:07+00:00"
score: 65
guid: "https://simonwillison.net/2026/Sep/15/gemini-live/"
image: ""
generated: "2026-09-25T19:08:22+05:30"
---

Tool: Gemini Live audio Google released Gemini 3.8 Live and 3.8 Live Extended Thinking today - two new speech-to-speech models that are a similar shape to OpenAI's GPT-Live family. I pointed GPT-6 Astra Extra High at the documentation and had it build me this web UI for trying out the new models. You can select a model and voice preset, enter an optional system prompt and then start a voice conversation through your browser, including the ability to interrupt the model while it is talking. The implementation uses no libraries. It connects to the wss://generativelanguage.googleapis.com/ws/google.ai.generativelanguage.v1alpha.GenerativeService.BidiGenerateContent?key=... WebSocket endpoint and uses a Web Audio API AudioContext for both capture and playback. Here's the Gemini Live tutorial for getting started with that WebSockets API. Tags: google , tools , websockets , generative-ai , llms , gemini , llm-release , speech-to-text

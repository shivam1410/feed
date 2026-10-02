---
title: "Do Audio LLMs Listen Before They Act? Diagnosing Acoustic-Context Gating in Voice Agents"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.32536"
authors: ["Yanjie Zhang", "Nanchen Hu", "Yushi Sun"]
date: "2026-09-25T20:00:00.000Z"
score: 82
guid: "2609.32536"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.32536.png"
generated: "2026-10-02T21:40:09+05:30"
---

VGBench tests 1,018 scenarios where audio agents must withhold action when the user is someone else or bystander speaks instead. Raw audio models rarely mute switched speakers, with the highest achieving only 14% switch mute rate. Supervised training via VoxGate mutes 91.3% of switched commands while staying accurate on nearby wearer commands. Side-talk and self-talk accuracy also improve substantially with training.

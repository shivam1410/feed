---
title: "GigaChat Audio: Time-aware Large Audio Language Model"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.10387"
authors: ["Aleksandr Kutsakov", "Mariia Sadovina", "Georgii Gospodinov", "Alexandr Maximenko", "Oleg Kutuzov", "Pavel Bogomolov", "Fyodor Minkin"]
date: "2026-07-10T20:00:00.000Z"
score: 68
guid: "2607.10387"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.10387.png"
generated: "2026-07-21T19:05:01+05:30"
---

Temporal grounding in long recordings remains challenging for audio-conditioned LLMs. We present a time-aware audio LLM that answers questions with explicit timestamps over up to 120 minutes of input. Our approach interleaves periodic time markers with continuous audio tokens using large-scale synthetic supervision from a cascaded pipeline. Our model achieves strong temporal-grounding accuracy on short and long benchmarks and supports time-anchored fragment descriptions and summaries. Extensive ablations examine how time representation, marker frequency, tokenization, and duration-mixture design affect accuracy and computational cost. We release model weights and datasets to support further research on time-aware audio understanding, available at https://huggingface.co/ai-sage/GigaChat3.1-Audio-10B-A1.8B.

---
title: "Audio-Visual Flamingo: Open Audio-Visual Intelligence for Long and Complex Videos"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.16107"
authors: ["Sreyan Ghosh", "Arushi Goel", "Kaousheik Jayakumar", "Lasha Koroshinadze", "Nishit Anand", "Siddharth Gururani", "Hanrong Ye", "Pritam Biswas", "Yuanhang Su", "Ehsan Hosseini-Asl", "Sang-gil Lee", "Zhifeng Kong", "Jaehyeon Kim", "Sungwon Kim", "S Sakshi", "Ramani Duraiswami", "Dinesh Manocha", "Andrew Tao", "Mohammad Shoeybi", "Bryan Catanzaro", "Ming-Yu Liu", "Wei Ping"]
date: "2026-07-16T20:00:00.000Z"
score: 75
guid: "2607.16107"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.16107.png"
generated: "2026-07-20T19:05:49+05:30"
---

We present Audio-Visual Flamingo (AV-Flamingo), a fully open state-of-the-art audio-visual large language model (AV-LLM) for joint understanding and reasoning over audio, images, and long-form videos. Unlike prior AV-LLMs that primarily focus on short clips, AV-Flamingo is designed for understanding and reasoning over long and complex real-world (audio-visual) videos. To support this, we make three key contributions: (i) Audio-Visual-Skills, a large-scale collection of real-world videos with ~7M caption and question-answer training instances designed to emphasize temporal, compositional, and cross-modal audio-visual reasoning; (ii) a novel three-stage curriculum that progressively trains the model from short-range perception to long-horizon multi-event reasoning; and (iii) Temporal Audio-Visual Interleaved Chain-of-Thought, a reasoning framework that explicitly grounds intermediate reasoning steps to timestamps in long audio-visual streams, improving temporal alignment and interpretability. Extensive experiments across 15+ audio-visual, omni-modal, audio, and vision benchmarks show that AV-Flamingo outperforms similarly sized open models by clear margins and remains highly competitive with, and in some cases surpasses, much larger open-weight and closed models, particularly on long and complex real-world audio-visual understanding and reasoning tasks. Beyond benchmark performance, AV-Flamingo exhibits strong real-world utility and transfers well to unseen tasks, highlighting its robustness and generalization ability.

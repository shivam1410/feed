---
title: "RepSelect: Robust LLM Unlearning via Representation Selectivity"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2606.17168"
authors: ["Filip Sondej", "Yushi Yang", "Adam Mahdi"]
date: "2026-06-14T20:00:00.000Z"
score: 81
guid: "2606.17168"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2606.17168.png"
generated: "2026-06-18T19:07:09+05:30"
---

Existing methods for machine unlearning—removing specific knowledge from trained models—often produce weak or shallow forgetting. RepSelect targets the specific representations that encode forget-set information by collapsing the top principal components of weight gradients related to that data. This surgical approach achieves deeper, more robust unlearning than previous methods that broadly reduce weights or modify attention patterns. The technique identifies which parts of the model's learned representations contain the information to be forgotten and specifically targets those components. This precision is important for privacy and safety applications where incomplete unlearning could leave traces of sensitive data.
